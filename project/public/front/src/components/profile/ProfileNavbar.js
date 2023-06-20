import "../../styles/profile-navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart,faBell } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
export default function ProfileNavbar(){
    return <div className="profile-navbar">
        <span className="notification-partie"><FontAwesomeIcon icon={faBell}/></span>
        <span className="cart-partie"> <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> cart</Link></span>
        <span className="profile-partie">
            <div className="image-profile"></div>
            Hello ,profile</span>
    </div>
}
