import "../../styles/specCard.css";
export default function SpecCard({ name, img, pivot }) {
    return (
        <div className="spec-card">
            <div className="image">
                <img src="../../images/spec.png" width={30} alt="" />
            </div>
            <div className="key-value-info">
                <div className="spec-key">{name}</div>
                <div className="spec-value">{pivot.value}</div>
            </div>
        </div>
    );
}
