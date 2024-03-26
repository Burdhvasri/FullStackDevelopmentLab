import React from "react";
import TableView from './TableView.js';
import './index.css';
const App=()=>{
  const data=[
    {ID:1,Name:"TCS",Age:100},
    {ID:2,Name:"WIPRO",Age:55},
    {ID:3,Name:"CTS",Age:32},
    {ID:4,Name:"INFOSYS",Age:21},
    {ID:5,Name:"IBM",Age:21},
  ];
  return(
    <div>
      <h1 style={{textAlign:'center',borderBottom:'2px solid blue',paddingTop:'20px',marginBottom:'100px'}}>Array of Objects-Table View</h1>
      <TableView data={data}/>
    </div>
  );
};
export default App;