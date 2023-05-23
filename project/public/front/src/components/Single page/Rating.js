import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function Rating({ rate }) {
    return (
        <div className="rating">
            <FontAwesomeIcon
                data-active={rate >= 1}
                className="icon"
                icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
                data-active={rate >= 2}
                className="icon"
                icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
                data-active={rate >= 3}
                className="icon"
                icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
                data-active={rate >= 4}
                className="icon"
                icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
                data-active={rate >= 5}
                className="icon"
                icon={faStar}
            ></FontAwesomeIcon>
        </div>
    );
}
