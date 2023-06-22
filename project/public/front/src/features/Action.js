import "../styles/action.css";
export default function Action({ type }) {
    return <div className={`action ${type}`}>{type}</div>;
}
