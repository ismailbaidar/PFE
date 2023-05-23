import "../../styles/flashcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faCircleInfo,
    faCircleXmark,
    faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
export default function FlashCard({ type, title, content }) {
    return (
        <div className="flash-card-wrapper" data-type={type}>
            <div className="icon">
                {type == "success" ? (
                    <FontAwesomeIcon icon={faCircleCheck} />
                ) : type == "error" ? (
                    <FontAwesomeIcon icon={faCircleXmark} />
                ) : type == "info" ? (
                    <FontAwesomeIcon icon={faCircleInfo} />
                ) : (
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                )}
            </div>
            <div className="content">
                <h3 className="title">Lorem, ipsum dolor.</h3>
                <p className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Non, quaerat!
                </p>
            </div>
        </div>
    );
}
