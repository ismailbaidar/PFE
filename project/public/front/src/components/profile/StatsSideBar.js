import "../../styles/statssidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
export default function StatsSideBar() {
    return (
        <div className="stats-sidebar">
            <span className="logout-icon">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </span>
            <div className="image-name-email">
                <span className="image"></span>
                <span className="name">Something</span>
                <span className="email">something@gmail.com</span>
            </div>
            <div className="stats-wrapper">
                <div className="first-part">
                    <div className="stats">
                        <div className="stat-title blue">something</div>
                        <span className="stats-count">999</span>
                    </div>
                    <div className="stats">
                        <div className="stat-title green">something</div>
                        <span className="stats-count">999</span>
                    </div>
                    <div className="stats">
                        <div className="stat-title red">something</div>
                        <span className="stats-count">999</span>
                    </div>
                    <div className="stats">
                        <div className="stat-title purple">something</div>
                        <span className="stats-count">999</span>
                    </div>
                </div>
                <div className="second-part success">
                    <span className="title">Your points</span>
                    <span className="value">999pts</span>
                </div>
            </div>
        </div>
    );
}
