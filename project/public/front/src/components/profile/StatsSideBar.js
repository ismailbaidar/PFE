import "../../styles/statssidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { getUserOrders } from "../../features/orderSlice";
import PointsProgressBar from "./PointsProgressBar";
import {useMemo} from 'react'
import ShowProgress from "./ShowProgress";
import axios from 'axios'
export default function StatsSideBar({ setVisible }) {
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orderReducer.orders) || [];
    const wishlist =useSelector((state) => state.wishlistReducer.wishlist) || [];
    const [data,setData]=useState() 
    useEffect(() => {
        dispatch(getUserOrders());
        (async()=>{
            axios.post('http://localhost:8000/api/getUserPoints')
            .then(res=>setData(res.data.points))
        })()
    }, []);
    const minV=useMemo(()=>data? data?.point_level.find(e=>e.used==1):null,[data])
    const maxV =useMemo(()=>data ? data?.point_level.find((e,i)=>{if(e.used==1){
        let r = data.point_level[i+1]
        console.log('max',r)
        return r
    }}):null,[data]) 
    console.log(data,minV,maxV,'888')
    return (
        <div className="stats-sidebar">
            <span className="logout-icon">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </span>
            <div className="image-name-email">
                <span className="image"></span>
                <span className="name">{user.name}</span>
                <span className="email">{user.email}</span>
            </div>
            <div className="stats-wrapper">
                <div className="first-part">
                    <div className="stats">
                        <div className="stat-title blue">browsed items</div>
                        <span className="stats-count">999</span>
                    </div>
                    <div className="stats">
                        <div className="stat-title green">order count</div>
                        <span className="stats-count">{orders.length}</span>
                    </div>
                    <div className="stats">
                        <div className="stat-title red">loved items</div>
                        <span className="stats-count">{wishlist.length}</span>
                    </div>
                    <div className="stats">
                        <div className="stat-title purple">reviewed</div>
                        <span className="stats-count">999</span>
                    </div>
                </div>
                <div className="second-part success">
                    <span className="title">Your points</span>
                    <PointsProgressBar min={minV?.level?minV.level:0} max={maxV?.level?maxV.level:500} current={data?.points?data?.points:0} />
                    <button
                        className="show-progress"
                        onClick={() => setVisible(true)}
                    >
                        show progress
                    </button>
                </div>
            </div>
        </div>
    );
}
