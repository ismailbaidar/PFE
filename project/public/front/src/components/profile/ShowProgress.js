import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
export default function ShowProgress({ data,currentPoints, setVisible }) {
    function getCoupon(level,check){
        if(!check){
            const form = new FormData()
            form.append('level',level)
            axios.post('http://localhost:8000/api/GetCoupon',form)

        }
    }
    return (
        <div className="show-progress-wrapper">
            <div className="show-progress-modal">
                <FontAwesomeIcon
                    icon={faX}
                    className="close-progress-modal"
                    onClick={() => setVisible(false)}
                />
                <div className="title">
                    <h1>GET DISCOUNT</h1>
                    <div>Your Points {currentPoints}</div>
                </div>
                <div className="levels">
                    <div className="level">
                        <span>
                            Level 1{" "}
                            <span className="level-points">(500pts)</span>
                        </span>
                        <button onClick={()=>getCoupon(500,data?.points<=500 || data?.point_level[0].used)} disabled={data?.points<=500 || data?.point_level[0].used} className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 2{" "}
                            <span className="level-points">(750pts)</span>
                        </span>
                        <button onClick={()=>getCoupon(750,data?.points<=750 || data?.point_level[1].used)}  disabled={data?.points<=750 || data?.point_level[1].used} className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 3{" "}
                            <span className="level-points">(1000pts)</span>
                        </span>
                        <button onClick={()=>getCoupon(1000,data?.points<=1000 || data?.point_level[2].used)} disabled={data.points<=1000 || data.point_level[2].used} className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 4{" "}
                            <span className="level-points">(1500pts)</span>
                        </span>
                        <button  onClick={()=>getCoupon(1500,data?.points<=1500 || data?.point_level[3].used)} disabled={data.points<=1500 || data.point_level[3].used} className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 5{" "}
                            <span  className="level-points">(2000pts)</span>
                        </span>
                        <button onClick={()=>getCoupon(2000,data?.points<=2000 || data?.point_level[4].used)}  disabled={data.points<=2000 || data.point_level[4].used} className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 6{" "}
                            <span className="level-points">(4000pts)</span>
                        </span>
                        <button  onClick={()=>getCoupon(4000,data?.points<=4000 || data?.point_level[5].used)} disabled={data.points<=4000 || data.point_level[5].used} className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 7{" "}
                            <span className="level-points">(5000pts)</span>
                        </span>
                        <button  onClick={()=>getCoupon(5000,data?.points<=5000 || data?.point_level[6].used)} disabled={data.points<=5000 || data.point_level[6].used} className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 8{" "}
                            <span className="level-points">(10000pts)</span>
                        </span>
                        <button  onClick={()=>getCoupon(10000,data?.points<=10000 || data?.point_level[7].used)} disabled={data.points<=10000 || data.point_level[7].used} className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 9{" "}
                            <span className="level-points">(20000pts)</span>
                        </span>
                        <button  onClick={()=>getCoupon(20000,data?.points<=20000 || data?.point_level[8].used)}  disabled={data.points<=20000 || data.point_level[8].used} className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 10{" "}
                            <span className="level-points">(50000pts)</span>
                        </span>
                        <button onClick={()=>getCoupon(50000,data?.points<=50000 || data?.point_level[9].used)}  disabled={data.points<=50000 || data.point_level[9].used} className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 11{" "}
                            <span className="level-points">(100000pts)</span>
                        </span>
                        <button  onClick={()=>getCoupon(100000,data?.points<=100000 || data?.point_level[10].used)}  disabled={data.points<=100000 || data.point_level[10].used} className="get-button">GET</button>
                    </div>
                    <div className="level">
                        <span>
                            Level 12{" "}
                            <span className="level-points">(1000000pts)</span>
                        </span>
                        <button  onClick={()=>getCoupon(1000000,data?.points<=1000000 || data?.point_level[11].used)}  disabled={data.points<=1000000 || data.point_level[10].used} className="get-button">GET</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
