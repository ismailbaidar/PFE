import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

export default function HamSlider({ hamVisible, setHamVisible }) {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="ham-slider" data-visible={hamVisible}>
            <FontAwesomeIcon
                icon={faX}
                className="close-ham"
                onClick={() => setHamVisible(false)}
            />
            <div className="image">
                <img src="../../images/images.png" alt="" width={100} />
            </div>
            <div className="info">
                <span>Full Name</span>
                <span>{user.name}</span>
                <span>Email</span>
                <span>{user.email}</span>
            </div>
            <button className="logout" onClick={() => dispatch(logout())}>
                Logout
            </button>
        </div>
    );
}
