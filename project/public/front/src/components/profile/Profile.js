import "../../styles/profile.css";
import StatsSideBar from "./StatsSideBar";
import NavigationSidebar from "./NavigationSideBar";
export default function Profile() {
    return (
        <div className="profile">
            <NavigationSidebar></NavigationSidebar>
            <StatsSideBar />
        </div>
    );
}
