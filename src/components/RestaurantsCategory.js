import ItemList from "./itemList";
import {useRef,useEffect } from "react";
const RestaurantsCategory = ({data,showStatus,setShowStatus}) =>{
    const ClickHandle = ()=>{
        setShowStatus();
       
    }
    return (
        <div className="m-2 p-5 border bottom-1 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={ClickHandle}>
                <span className="font-bold" >{data.title} ({data.itemCards.length})</span>
                <span>▼</span>
            </div> 
            <div className="mt-2">  
            { data.itemCards.map((item) =>(showStatus && <ItemList item={item}/>))}
            </div>
         </div>
    );

}
export default RestaurantsCategory;