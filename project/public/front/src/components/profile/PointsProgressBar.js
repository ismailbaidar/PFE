import { useEffect, useState, useRef } from "react";

export default function PointsProgressBar({ current, min, max }) {
    const [width, setWidth] = useState();
    const currentProgress = useRef();
    useEffect(() => {
        currentProgress.current.style.width = `${(current * 100) / max - min}%`;
    }, []);
    return (
        <div className="progress-bar-wrapper">
            <div className="points-interval">
                <span>{min}</span>
                <span>{max}</span>
            </div>
            <div className="progress-bar">
                <span className="current-progress" ref={currentProgress}></span>
            </div>
        </div>
    );
}
