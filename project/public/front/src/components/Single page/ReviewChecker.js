import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ReviewChecker() {
    return (
        <div className="review-checker">
            <div className="review-part">
                <span>
                    5<FontAwesomeIcon icon={faStar} />
                </span>
                <span>3</span>
            </div>
            <div className="review-part">
                <span>
                    4<FontAwesomeIcon icon={faStar} />
                </span>
                <span>3</span>
            </div>
            <div className="review-part">
                <span>
                    3<FontAwesomeIcon icon={faStar} />
                </span>
                <span>3</span>
            </div>
            <div className="review-part">
                <span>
                    2<FontAwesomeIcon icon={faStar} />
                </span>
                <span>3</span>
            </div>
            <div className="review-part">
                <span>
                    1<FontAwesomeIcon icon={faStar} />
                </span>
                <span>3</span>
            </div>
        </div>
    );
}
