import { DataGrid } from "@mui/x-data-grid";
import "../styles/ProductsDashboard.css";
import AnalyseProduct from "../components/Admin/AnalyseProduct";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useMemo } from "react";
import ModelItem from "../components/Admin/ModelItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productSlice";
import { deleteProduct } from "../features/productSlice";
import SureMsg from "../components/Suremsg/SureMsg";
import FlashCard from "../components/Flash card/FlashCard";
export default function Products() {
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productReducer.products);
    const status = useSelector((state) => state.productReducer.status);
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    useEffect(() => {
        if (status !== "") setSuccess(true);
    }, [status]);
    console.log(status);
    let Rows = useMemo(() => {
        let ne = products;
        let nr = ne.map((e) => {
            return {
                ...e,
                categorie: e?.categorie?.name,
                brand: e?.brand?.name,
            };
        });
        return nr;
    }, [products]);

    const deleteP = () => {
        dispatch(deleteProduct(Delete));
        setDeleted(null);
        dispatch(getProducts());
    };

    console.log(Rows);

    const [Delete, setDeleted] = useState(null);
    const [iditem, setId] = useState(null);
    console.log(Delete);
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 130 },
        { field: "price", headerName: "Price", width: 130 },
        {
            field: "discount",
            headerName: "discount",
            type: "number",
        },
        {
            field: "stock",
            headerName: "stock",
            type: "number",
        },
        {
            field: "rate",
            headerName: "Rate",
            type: "number",
        },
        { field: "brand", headerName: "Brand", width: 130 },
        { field: "categorie", headerName: "Categorie", width: 140 },
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
                                navigate(
                                    "/admin/produitmodifier/" + params.row.id
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

    const dataItem = useMemo(
        () => (iditem ? Rows.filter((e) => e.id == iditem) : ""),
        [iditem]
    );

    return (
        <div className="ProductsDashboard">
            <AnalyseProduct />
            <button
                className="ajouterProduit"
                onClick={() => navigate("/admin/AjouterProduit")}
            >
                Ajouter Produit
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
                color="#fff"
                pageSizeOptions={[5, 10]}
            />
            {iditem && (
                <ModelItem data={dataItem} setIdNull={() => setId(null)} />
            )}
            {Delete && (
                <SureMsg
                    close={() => setDeleted(null)}
                    func={() => deleteP()}
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
}
