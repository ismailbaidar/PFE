import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotificationCard from "./NotificationCard";
import { faX } from "@fortawesome/free-solid-svg-icons";
import LivraisonSingleNotification from "./LivraisonSingleNotification";
import { useState } from "react";

export default function LivraisonNotification({
    notificationVisible,
    setNotificationVisible,
}) {
    const [singleNotificationVisible, setSingleNotificationVisible] =
        useState(false);
    const [data, setData] = useState({ title: "", content: "", date: "" });

    return (
        <div
            className="livraison-notification"
            data-visible={notificationVisible}
        >
            {singleNotificationVisible && (
                <LivraisonSingleNotification
                    {...data}
                    setSingleNotificationVisible={setSingleNotificationVisible}
                />
            )}
            <FontAwesomeIcon
                icon={faX}
                className="close-notification"
                onClick={() => setNotificationVisible(false)}
            />
            <div className="upper-part">
                {" "}
                <span>INBOX</span> <span>81 inbox</span>
            </div>
            <div className="notifications-wrapper">
                <NotificationCard
                    status="read"
                    title="somethukhiuhiuing"
                    content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, possimus in placeat sunt asperiores nemo reprehenderit pariatur ullam. Cupiditate ducimus sunt sed aperiam doloribus iste esse vitae, illo deserunt facere?"
                    date="09-08-2023 12:23:12"
                    setSingleNotificationVisible={setSingleNotificationVisible}
                    setData={setData}
                />

                <NotificationCard
                    status="s"
                    title="something"
                    content="something in here about something"
                    date="09-08-2023 12:23:12"
                    setSingleNotificationVisible={setSingleNotificationVisible}
                    setData={setData}
                />
                <NotificationCard
                    status="read"
                    title="something"
                    content="something in here about something"
                    date="09-08-2023 12:23:12"
                    setSingleNotificationVisible={setSingleNotificationVisible}
                    setData={setData}
                />
            </div>
        </div>
    );
}
