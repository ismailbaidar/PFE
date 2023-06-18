import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import Login from "../login/Login";
export default function PreventDirectAccess({ type, children }) {
    return type == "login" ? (
        localStorage.getItem("AUTH_TOKEN") == "null" ? (
            children
        ) : (
            <Navigate to="/" />
        )
    ) : localStorage.getItem("AUTH_TOKEN") != "null" ? (
        children
    ) : (
        <Login />
    );
}
