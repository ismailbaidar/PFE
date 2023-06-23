import "../../styles/livraison-order-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default function LivraisionOrderCard({
    id,
    image,
    address,
    name,
    shipping_adress,
    setOrders,
}) {
    function changeStatus() {
        axios.patch(`http://localhost:8000/api/changeOrderStatus/${id}`);
        axios
            .get(
                `http://localhost:8000/api/getLivreurOrders/${localStorage.getItem(
                    "UID"
                )}`
            )
            .then((res) => setOrders(res.data))
            .catch((err) => console.log(err));
    }
    return (
        <div className="livraison-order-card" key={id}>
            <div className="img">
                <img
                    src={`http://localhost:8000/storage/images/${image}`}
                    width={30}
                    alt=""
                />
            </div>
            <div className="info">
                <div className="product-name">#{id}</div>
                <div className="address">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>{shipping_adress.substring(0, 15)}...</span>
                </div>
            </div>
            <button onClick={() => changeStatus()} className="delivered-button">
                Delivered
            </button>
        </div>
    );
}
