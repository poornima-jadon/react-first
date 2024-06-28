import { useEffect, useState } from "react";
const useRestaurantsList = () =>{
    const [listofRes, setListofres] = useState([]);
    const [listofFilterRes, setListofFilterres] = useState([]);
    
    useEffect(() =>{
        fetchDataRes();

    },[]);
    const fetchDataRes = async() =>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.5980718&lng=78.0492265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        //optional chaining
        
        const gridResList = json?.data?.cards.filter((reslist)=>reslist?.card?.card?.id==="restaurant_grid_listing");
        setListofres(gridResList[0].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListofFilterres(gridResList[0].card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }
    const resList = {
        listofRes,
        listofFilterRes
    }
    return resList;
}
export default useRestaurantsList;