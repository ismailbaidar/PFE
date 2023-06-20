import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LivraisonSingleNotification({
    date,
    title,
    content,
    setSingleNotificationVisible,
}) {
    return (
        <div className="single-notification">
            <FontAwesomeIcon
                className="close-single-notification"
                icon={faX}
                onClick={() => setSingleNotificationVisible(false)}
            />
            <div className="date">{date}</div>
            <div className="title">{title}</div>
            <div className="content">{content}</div>
        </div>
    );
}
