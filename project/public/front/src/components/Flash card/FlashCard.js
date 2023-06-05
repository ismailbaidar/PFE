import "../../styles/flashcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faCircleInfo,
    faCircleXmark,
    faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export default function FlashCard({ type, title, content ,toogle }) {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
            toogle(false)
        }, 5000);
    });
    return (
        <>
            {isVisible && (
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
                        <h3 className="title">{title}</h3>
                        <p className="description">{content}</p>
                    </div>
                </div>
            )}
        </>
    );
}
