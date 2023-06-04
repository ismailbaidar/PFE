import "../../styles/miniloading.css";
export default function MiniLoading({ type = "black" }) {
    return <span className={`mini-loading ${type}`}></span>;
}
