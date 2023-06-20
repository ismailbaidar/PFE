import React from "react";
import AreaChartContent from "../components/Admin/AreaChartContent";
import CircleComponent from "../components/Admin/CircleComponent";
import ItemsState from "../components/Admin/ItemsState";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const DashboardHome = () => {
    return (
        <div className="HomeDashboard">
            <div className="FirstSectionDashbord">
                <AreaChartContent />
            </div>
            <div className="stateItems">
                <ItemsState
                    color={"#d33"}
                    name={"Users"}
                    Low
                    prc={"-10%"}
                    icon={faUser}
                />
                <ItemsState
                    color={"rgb(51, 86, 221)"}
                    name={"Users"}
                    prc={"-10%"}
                    icon={faUser}
                />
                <ItemsState
                    color={"rgb(221, 123, 51)"}
                    name={"Users"}
                    Low
                    prc={"-10%"}
                    icon={faUser}
                />
                <ItemsState
                    color={"rgb(51, 221, 173)"}
                    name={"Users"}
                    prc={"-10%"}
                    icon={faUser}
                />
            </div>
        </div>
    );
};

export default DashboardHome;
