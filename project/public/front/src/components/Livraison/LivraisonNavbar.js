import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import "../../styles/livraison-navbar.css";
export default function LivraisonNavbar({
    setHamVisible,
    setNotificationVisible,
}) {
    return (
        <div className="livraison-navbar">
            <div className="icon ham-icon">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setHamVisible(true)}
                ></FontAwesomeIcon>
            </div>
            <div>
                <img src="../../images/logored.png" alt="" width={60} />
            </div>
            <div className="icon icon-bell">
                <FontAwesomeIcon
                    icon={faBell}
                    onClick={() => setNotificationVisible(true)}
                ></FontAwesomeIcon>
                <span></span>
            </div>
        </div>
    );
}
