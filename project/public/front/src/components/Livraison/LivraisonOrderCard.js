import "../../styles/livraison-order-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function LivraisionOrderCard({ id, image, address, name }) {
    return (
        <div className="livraison-order-card" key={id}>
            <div className="img">
                <img src="../../images/logored.png" width={30} alt="" />
            </div>
            <div className="info">
                <div className="product-name">
                    {"Something b394 DSK283".substring(0, 15)}...
                </div>
                <div className="address">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>{"Somewhere in the world".substring(0, 15)}...</span>
                </div>
            </div>
            <button className="delivered-button">Delivered</button>
        </div>
    );
}
