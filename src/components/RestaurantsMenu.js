import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurantsCategory from "./RestaurantsCategory";
import { useState} from "react";

const RestaurantsMenu = () =>{
    const {resId} = useParams();
    const resInfo = useRestaurantsMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
   if(resInfo.length ==0) return <Shimmer/>;
   const {name,costForTwoMessage,cuisines,avgRating,totalRatingsString,areaName,sla,expectationNotifiers} = resInfo?.cards[2]?.card?.card?.info;
   const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   const itemCategory = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
   ((cat)=>cat?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   const toggleShowIndex = (index) => {
    setShowIndex(prevIndex1 => prevIndex1 === index ? null : index); // Toggle logic
    };
   
  return (
        <div className="mt-5 mx-auto text-center max-w-[900px] min-h-[600px]">
            <h1 className="text-left mb-3 px-5 py-2 font-extrabold text-xl">{name}</h1>
            <div className="border-2 border-gray-200 shadow-2xl shadow-slate-600 min-h-14 rounded-xl text-left px-5 py-2 mb-2">
             <p className="mt-5 font-bold">{avgRating} ({totalRatingsString}) . {costForTwoMessage}</p>
             <p className="mt-1 text-red-600">{cuisines.join(', ')}</p>
             <p className="mt-1 text-sm"><span className="font-bold">Outlet</span> <span className="text-slate-400">{areaName}</span></p>
             <p className="mt-1 font-bold text-sm">{sla.minDeliveryTime
             }-{sla.maxDeliveryTime
             } mins</p>
             <hr className="bottom-1 border-slate-300 border-solid my-3" />
            { expectationNotifiers ? <p className="mt-1 text-slate-400">{expectationNotifiers[0].text
             }</p>: ''}
            </div>
            
            <div className="mt-10 p-2">
                {itemCategory.map((item,index)=>(
                    <RestaurantsCategory data={item.card.card} key = {item.card.card.id}
                     showStatus={ index===showIndex ? true : false} setShowStatus={()=>toggleShowIndex(index)}/>
                    ))}
            </div>
        </div>
    );
}
export default RestaurantsMenu;