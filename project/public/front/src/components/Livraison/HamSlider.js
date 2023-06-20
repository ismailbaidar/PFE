import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HamSlider({ hamVisible, setHamVisible }) {
    return (
        <div className="ham-slider" data-visible={hamVisible}>
            <FontAwesomeIcon
                icon={faX}
                className="close-ham"
                onClick={() => setHamVisible(false)}
            />
            <div className="image">
                <img src="" alt="" />
            </div>
            <div className="info">
                <span>Full Name</span>
                <span>Something where</span>
                <span>Email</span>
                <span>something@gmail.com</span>
            </div>
        </div>
    );
}
