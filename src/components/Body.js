import ResCard, {offerLabelRes} from "./ResCard";
import {useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantsList from "../utils/useRestaurantsList";
import UserContext from "../utils/UserContext";

const Body = () =>{
    const [searchTxt,setSearchTxt] =  useState("");
    const {listofRes,listofFilterRes} = useRestaurantsList();
    const OfferRes = offerLabelRes(ResCard);
    const {loggedInUser,setUserName} =  useContext(UserContext);
  
    if(listofRes==null){
        return <Shimmer/>;
    }
    return (
          <div>
            <div className="">
            <div className="flex m-5 px-5 justify-center">
            <input  className="border-2 border-gray-100 px-1 rounded-lg w-60" type="text" placeholder="Please search here" value={searchTxt}  onChange={(e)=>{
              setSearchTxt(e.target.value);
            }}/>
            <button className="bg-green-200 m-2 px-5 py-3 rounded-lg" onClick={()=>{
                const searchFilterList = listofRes.filter((res)=>res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                setListofFilterres(searchFilterList);
             }}>Search</button>
            <button className="bg-blue-200 m-2 px-5 py-3 rounded-lg" onClick={()=>{
                const listofRes1 = listofRes.filter((res)=>res.info.avgRating >4);
                setListofFilterres(listofRes1);
             }} >Filter top rated</button>
           </div>
           <div className="flex m-5 px-5 justify-center">
            <label>UserName: </label>
            <input  className="border-2 border-gray-100 px-1 rounded-lg w-60" type="text"  value={loggedInUser}  onChange={(e)=>{
              setUserName(e.target.value);
            }}/>
            </div>
           </div>
            <div className="flex flex-wrap mx-10 border-2 border-slate-200 shadow-md">
                {
                   listofFilterRes.map((restaurant) =>(<Link to={"restaurants/"+restaurant.info.id}>
                    { restaurant.info.aggregatedDiscountInfoV3 ? <OfferRes resData={restaurant}/> : <ResCard key ={restaurant.info.id} resData={restaurant}/>}
                    
                   
                    </Link>))
                }
        
            </div>
          </div>
    );

}
export default Body;