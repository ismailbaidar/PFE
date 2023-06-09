import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import Login from "../login/Login";
export default function PreventDirectAccess({ type, children }) {
    const token = useSelector((state) => state.userReducer.token);
    const navigate = useNavigate();
    console.log("token", token);
    return type == "login" ? (
        token == null ? (
            children
        ) : (
            <Navigate to="/" />
        )
    ) : token != null ? (
        children
    ) : (
        <Login />
    );
}
