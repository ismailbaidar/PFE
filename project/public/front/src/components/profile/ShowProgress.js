import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShowProgress({ currentPoints, setVisible }) {
    return (
        <div className="show-progress-wrapper">
            <div className="show-progress-modal">
                <FontAwesomeIcon
                    icon={faX}
                    className="close-progress-modal"
                    onClick={() => setVisible(false)}
                />
                <div className="title">
                    <h1>GET DISCOUNT</h1>
                    <div>Your Points {currentPoints}</div>
                </div>
                <div className="levels">
                    <div className="level">
                        <span>
                            Level 1{" "}
                            <span className="level-points">(500pts)</span>
                        </span>
                        <button className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 2{" "}
                            <span className="level-points">(750pts)</span>
                        </span>
                        <button className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 3{" "}
                            <span className="level-points">(1000pts)</span>
                        </span>
                        <button className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 4{" "}
                            <span className="level-points">(1500pts)</span>
                        </span>
                        <button className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 5{" "}
                            <span className="level-points">(2000pts)</span>
                        </span>
                        <button className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 6{" "}
                            <span className="level-points">(4000pts)</span>
                        </span>
                        <button className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 7{" "}
                            <span className="level-points">(5000pts)</span>
                        </span>
                        <button className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 8{" "}
                            <span className="level-points">(10000pts)</span>
                        </span>
                        <button className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 9{" "}
                            <span className="level-points">(20000pts)</span>
                        </span>
                        <button className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 10{" "}
                            <span className="level-points">(50000pts)</span>
                        </span>
                        <button className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 11{" "}
                            <span className="level-points">(100000pts)</span>
                        </span>
                        <button className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 12{" "}
                            <span className="level-points">(1000000pts)</span>
                        </span>
                        <button className="get-button">GET</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
