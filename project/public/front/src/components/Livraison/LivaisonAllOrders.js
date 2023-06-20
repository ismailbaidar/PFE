import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LivraisionOrderCard from "./LivraisonOrderCard";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function LivraisonAllOrders({ setAllOrdersVisible }) {
    return (
        <div className="all-orders">
            <FontAwesomeIcon
                icon={faX}
                className="close-all-orders"
                onClick={() => setAllOrdersVisible(false)}
            />
            <div className="all-orders-container">
                <LivraisionOrderCard />
                <LivraisionOrderCard />
                <LivraisionOrderCard />
                <LivraisionOrderCard />
                <LivraisionOrderCard />
                <LivraisionOrderCard />
                <LivraisionOrderCard />
                <LivraisionOrderCard />
                <LivraisionOrderCard />
            </div>
        </div>
    );
}
