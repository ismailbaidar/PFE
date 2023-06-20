import "../../styles/livraison-stats-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuildingCircleCheck,
    faBuildingCircleArrowRight,
    faBuildingCircleExclamation,
    faBuildingCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
export default function LivraisonStatesCard({ type, count }) {
    return (
        <div className={`livraison-stats-card ${type}`}>
            <div className="icon">
                <FontAwesomeIcon
                    icon={
                        type === "delivered"
                            ? faBuildingCircleCheck
                            : type === "canceled"
                            ? faBuildingCircleXmark
                            : type === "returned"
                            ? faBuildingCircleArrowRight
                            : faBuildingCircleExclamation
                    }
                />
            </div>
            <div className="text">
                {type === "delivered"
                    ? "Complet Delivery"
                    : type === "canceled"
                    ? "Canceled Delivery"
                    : type === "returned"
                    ? "Returned Delivery"
                    : "Pending Delivery"}
            </div>
            <div className="stat">{count}</div>
        </div>
    );
}
