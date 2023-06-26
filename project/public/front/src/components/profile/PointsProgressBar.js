import { useEffect, useState, useRef } from "react";

export default function PointsProgressBar({ current, min, max }) {
    const currentProgress = useRef();
    useEffect(() => {
        const width = (current * 100) / max - min;
        console.log(width, "width");
        currentProgress.current.style.width = `${width}%`;
    }, [current]);
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
