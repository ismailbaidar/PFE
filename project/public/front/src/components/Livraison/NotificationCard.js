import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

export default function NotificationCard({
    status,
    date,
    title,
    content,
    setSingleNotificationVisible,
    setData,
}) {
    function cardClicked() {
        setData({ title, content, date });
        setSingleNotificationVisible(true);
    }
    return (
        <div className="notification-card" onClick={cardClicked}>
            <FontAwesomeIcon
                icon={status == "read" ? faEnvelopeOpen : faEnvelope}
            />
            <div className="info">
                <span className="date">{date}</span>
                <span className="title" data-title={status}>
                    {title.substring(0, 15)}...
                </span>
                <span>{content.substring(0, 25)}...</span>
            </div>
        </div>
    );
}
