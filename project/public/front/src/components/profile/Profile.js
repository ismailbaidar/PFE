import "../../styles/profile.css";
import StatsSideBar from "./StatsSideBar";
import NavigationSidebar from "./NavigationSideBar";
import ProfileNavbar from "./ProfileNavbar";
export default function Profile() {
    return (
        <div className="profile">
            <NavigationSidebar></NavigationSidebar>
            <div>

                <ProfileNavbar></ProfileNavbar>
            </div>
            <StatsSideBar />
        </div>
    );
}
