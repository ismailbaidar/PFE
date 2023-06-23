import "../../styles/livraison-home.css";
import LivraisonStatesCard from "./LivraisionStatsCard";
import LivraisonNavbar from "./LivraisonNavbar";
import LivraisionOrderCard from "./LivraisonOrderCard";
import HamSlider from "./HamSlider";
import { useEffect, useState } from "react";
import LivraisonNotification from "./LivraisonNotification";
import LivraisonAllOrders from "./LivaisonAllOrders";
import axios from "axios";
export default function LivraisonHome() {
    const [allOrdersVisible, setAllOrdersVisible] = useState(false);
    const [hamVisible, setHamVisible] = useState(false);
    const [notificationVisible, setNotificationVisible] = useState(false);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const data = new FormData();
        data.append("id", localStorage.getItem("UID"));
        axios
            .get(
                `http://localhost:8000/api/getLivreurOrders/${localStorage.getItem(
                    "UID"
                )}`
            )
            .then((res) => setOrders(res.data))
            .catch((err) => console.log(err));
    }, []);
    console.log(orders);
    return (
        <div className="livraison-home-wrapper">
            <LivraisonNavbar
                setHamVisible={setHamVisible}
                setNotificationVisible={setNotificationVisible}
            />
            <HamSlider
                setHamVisible={setHamVisible}
                hamVisible={hamVisible}
            ></HamSlider>
            <LivraisonNotification
                notificationVisible={notificationVisible}
                setNotificationVisible={setNotificationVisible}
            />
            {allOrdersVisible && (
                <LivraisonAllOrders setAllOrdersVisible={setAllOrdersVisible} />
            )}
            <div className="stats-cards">
                <LivraisonStatesCard
                    type="delivered"
                    count={
                        orders.filter((o) => o.order.status == "delivered")
                            .length
                    }
                />
                <LivraisonStatesCard
                    type="canceled"
                    count={
                        orders.filter((o) => o.order.status == "cancel").length
                    }
                />
                <LivraisonStatesCard
                    type="pending"
                    count={
                        orders.filter((o) => o.order.status == "pending").length
                    }
                />
                <LivraisonStatesCard
                    type="returned"
                    count={
                        orders.filter((o) => o.order.status == "returned")
                            .length
                    }
                />
            </div>
            <div className="orders-part-wrapper">
                <div className="title-control">
                    <div className="title">Orders</div>
                </div>
                <div className="order-cards-container">
                    {orders.map((o) => {
                        console.log(o);
                        return (
                            o.order.status != "delivered" && (
                                <LivraisionOrderCard
                                    {...o.order}
                                    shipping_adress={
                                        o.order.shipping.shipping_adress
                                    }
                                    setOrders={setOrders}
                                />
                            )
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
