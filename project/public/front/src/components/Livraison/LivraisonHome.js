import "../../styles/livraison-home.css";
import LivraisonStatesCard from "./LivraisionStatsCard";
import LivraisonNavbar from "./LivraisonNavbar";
import LivraisionOrderCard from "./LivraisonOrderCard";
import HamSlider from "./HamSlider";
import { useState } from "react";
import LivraisonNotification from "./LivraisonNotification";
import LivraisonAllOrders from "./LivaisonAllOrders";
export default function LivraisonHome() {
    const [allOrdersVisible, setAllOrdersVisible] = useState(false);
    const [hamVisible, setHamVisible] = useState(false);
    const [notificationVisible, setNotificationVisible] = useState(false);
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
                <LivraisonStatesCard type="delivered" count={12} />
                <LivraisonStatesCard type="canceled" count={0} />
                <LivraisonStatesCard type="pending" count={3} />
                <LivraisonStatesCard type="returned" count={3} />
            </div>
            <div className="orders-part-wrapper">
                <div className="title-control">
                    <div className="title">Orders</div>
                    <div
                        className="control"
                        role="button"
                        onClick={() => setAllOrdersVisible(true)}
                    >
                        SHOW ALL
                    </div>
                </div>
                <div className="order-cards-container">
                    <LivraisionOrderCard />
                    <LivraisionOrderCard />
                </div>
            </div>
        </div>
    );
}
