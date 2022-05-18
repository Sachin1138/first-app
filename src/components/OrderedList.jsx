import React from "react";
import { dummydata } from "../constant";
const OrderedList = () => {
  return (
    dummydata.map((res,key)=>{
return <div key={key}>
<h3>{res.title}</h3>
<ul>
{res.listarr.map((arr,i)=> <li key={i}>{arr}</li>)}
  
</ul>
</div>
    })
  );
};
export default OrderedList;
