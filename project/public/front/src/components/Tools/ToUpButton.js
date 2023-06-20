import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ToUpButton() {
    return (
        <span className="scroll-up-button">
            <a href="#top">
                <FontAwesomeIcon icon={faArrowUp} />
            </a>
        </span>
    );
}
