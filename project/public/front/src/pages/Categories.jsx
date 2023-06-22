import React, { useState, useEffect, useMemo } from "react";
import AnalyseProduct from "../components/Admin/AnalyseProduct";
import { DataGrid } from "@mui/x-data-grid";
import ModelItem from "../components/Admin/ModelItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DeleteCategorie, getCategories } from "../features/CategorieSlice";
import { useDispatch, useSelector } from "react-redux";
import SureMsg from "../components/Suremsg/SureMsg";
import FlashCard from "../components/Flash card/FlashCard";
import { useNavigate } from "react-router-dom";
const Categories = () => {
    const location = useNavigate();

    const [iditem, setId] = useState(null);
    const [Delete, setDeleted] = useState(null);
    const [success, setSuccess] = useState(null);
    const categories = useSelector((state) => state.Categorie.categories);
    const status = useSelector((state) => state.Categorie.status);
    const Rows = useMemo(() => {
        return categories.map((e) => ({
            name: e.name,
            id: e.id,
            categorie_id: e.parent?.name,
        }));
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, []);
    useEffect(() => {
        if (status !== "" && status !== "pending") setSuccess(true);
    }, [status]);

    const deleteC = () => {
        dispatch(DeleteCategorie(Delete))
            .unwrap()
            .then(() => {
                setDeleted(null);
                dispatch(getCategories());
            })
            .catch((err) => console.log(err));
    };
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "name", width: 130 },
        {
            field: "categorie_id",
            headerName: "parent",
            width: 130,
        },
        {
            field: "Action",
            headerName: "Action",
            width: 140,
            renderCell: (params) => {
                return (
                    <div className="actionbtntable">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setDeleted(params.id);
                            }}
                            className="delete"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                location(
                                    "/admin/Categoriemodifier/" + params.id
                                );
                            }}
                            className="edite"
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="ProductsDashboard">
            <AnalyseProduct />
            <button
                className="ajouterProduit"
                onClick={() => {
                    location("/admin/AjouterCategorie");
                }}
            >
                Ajouter Categorie
            </button>
            <DataGrid
                rows={Rows}
                columns={columns}
                onRowClick={(params) => setId(params.id)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
            {iditem && <ModelItem setIdNull={() => setId(null)} />}
            {Delete && (
                <SureMsg
                    close={() => setDeleted(null)}
                    func={() => deleteC()}
                />
            )}
            <div className="errorDi">
                {success && (
                    <FlashCard
                        type="success"
                        content={status}
                        title={"producta actions"}
                        toogle={() => setSuccess(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default Categories;
