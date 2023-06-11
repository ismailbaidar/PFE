import React, { useRef, useState } from "react";
import InfoAreaChart from "./InfoAreaChart";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const AreaChartContent = () => {
    const item = useRef();

    console.log(item);
    const data = [
        {
            name: "10",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "20",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "30",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "40",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "50",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "60",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "80",
            uv: 2880,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "90",
            uv: 2370,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "100",
            uv: 1790,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="AreaChartContent" ref={item}>
            <div className="HeadArea">
                <p>Vente Analyse</p>
                <select>
                    <option>Janvier</option>
                    <option>Fevrier</option>
                    <option>Mars</option>
                </select>
            </div>
            <div className="Analys">
                <InfoAreaChart />
                <InfoAreaChart />
                <InfoAreaChart />
            </div>
            <div className="charts">
                <ResponsiveContainer width={"100%"} height={300}>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 40,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="uv"
                            stroke="#4bd0ae"
                            fill="#63e8ca"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AreaChartContent;
