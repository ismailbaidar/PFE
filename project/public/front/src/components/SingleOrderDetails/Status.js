import "../../styles/status.css";
export default function Status({ word, type }) {
    return <div className={`status ${type}`}>{word}</div>;
}
