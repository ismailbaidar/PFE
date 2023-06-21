import React, { useEffect ,useState} from "react";
import AreaChartContent from "../components/Admin/AreaChartContent";
import CircleComponent from "../components/Admin/CircleComponent";
import ItemsState from "../components/Admin/ItemsState";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'

const DashboardHome = () => {
    const [data,setData]=useState();
    useEffect(()=>{
        (async()=>{
            axios.get('http://localhost:8000/api/getStates')
            .then(res=>setData(res.data.state))
        })()
    },[])
    return (
        <div className="HomeDashboard">
            <div className="FirstSectionDashbord">
                <AreaChartContent />
            </div>
            <div className="stateItems">
                <ItemsState
                    color={"#d33"}
                    name={"Users"}
                    num={data?.users}
                    icon={faUser}
                />
                <ItemsState
                    color={"rgb(51, 86, 221)"}
                    name={"Products"}
                    num={data?.products}
                    icon={faUser}
                />
                <ItemsState
                    color={"rgb(221, 123, 51)"}
                    name={"Orders"}
                    icon={faUser}
                    num={data?.orders}
                    />
                <ItemsState
                    color={"rgb(51, 221, 173)"}
                    name={"Total paiment"}
                    num={data?.paiment+'$'}
                    icon={faUser}
                />
            </div>
        </div>
    );
};

export default DashboardHome;
