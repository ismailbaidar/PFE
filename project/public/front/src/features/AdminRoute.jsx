import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/Admin/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Search from "../components/Admin/Search";
import DashboardHome from "../pages/DashboardHome";
import AddCategorie from "../pages/AddCategorie";
import AddBrand from "../pages/AddBrand";
import AjouterSpect from "../pages/AjouterSpect";
import ContentManagement from "../pages/ContentManagement";
import ModifierProduit from "../pages/ModifierProduit";
import Loading from "../components/Loading";
import ModifierCategorie from "../pages/ModifierCategorie";
import ModifierBrand from "../pages/ModifierBrand";
import ModifierSpect from "../pages/ModifierSpect";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Collection from "../pages/Collection";
import EditeCollection from "../pages/EditeCollection";
import Brands from '../pages/Brands'
import Spects from '../pages/Spects'
import AddCollection from '../pages/AddCollection'
import UploadShippingCity from '../pages/UploadShippingCity'
import ShowLivreurs from '../pages/ShowLivreurs'
import Admins from '../pages/Admins'
import { useSelector } from "react-redux";
const AdminRoute = () => {
    const AddProduct = React.lazy(() => import("../pages/AddProduct"));
    const show = useSelector((state) => state.showReducer.show);
    return (
        <div className="DashbordMain  ">
            <SideBar />
            <div className="WrapperAdmin" data-show={show}>
                <Search />
                <Routes>
                    <Route path="/" element={<DashboardHome />} />
                    <Route path="/livreurs" element={<ShowLivreurs/>} />
                    <Route path="/users" element={<Admins/>} />
                    <Route
                        path="/AjouterProduit"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <AddProduct />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/produitmodifier/:id"
                        element={<ModifierProduit />}
                    />
                    <Route
                        path="/AjouterCategorie"
                        element={<AddCategorie />}
                    />
                    <Route
                        path="/Categoriemodifier/:id"
                        element={<ModifierCategorie />}
                    />
                    <Route path="/AjouterBrand" element={<AddBrand />} />
                    <Route
                        path="/Brandmodifier/:id"
                        element={<ModifierBrand />}
                    />
                    <Route path="/AjouterOption" element={<AjouterSpect />} />
                    <Route
                        path="/OptionModifier/:id"
                        element={<ModifierSpect />}
                    />
                    <Route
                        path="/ContentManagement"
                        element={<ContentManagement />}
                    />
                    <Route path="/Products" element={<Products />} />
                    <Route path='/categories' element={<Categories/>} />
                    <Route path='/brands' element={<Brands/>} />
                    <Route path='/spects' element={<Spects/>} />
                    <Route path="/collections" element={<Collection/>}/>
                    <Route path="/collections/:id" element={<EditeCollection/>}/>
                    <Route path="/addcollection" element={<AddCollection/>}/>
                    <Route path='/addShipping' element={<UploadShippingCity/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default AdminRoute;
