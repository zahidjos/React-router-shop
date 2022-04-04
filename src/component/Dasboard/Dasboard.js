
import React, { useEffect, useState } from 'react';
import { Line, LineChart,Tooltip, XAxis, YAxis,Legend,Cell,Bar,BarChart,CartesianGrid } from 'recharts';

const Dasboard = () => {
    const[data,setdata]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(arr=>setdata(arr))
    },[])
    return (
        <div>
            <h1>I am dasboard</h1>
            <LineChart width={400} height={400} data={data}>
               <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
               <XAxis dataKey="month"></XAxis>
               <YAxis></YAxis>
               <Tooltip></Tooltip>
            </LineChart>
            
            <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" fill="#8884d8" />
          
        </BarChart>
        </div>
    );
};

export default Dasboard;