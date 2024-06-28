import { useEffect, useState } from "react";
import {MENU_API} from "./constants.js"
const useRestaurantsMenu = (resId) =>{
    const [resInfo,useResInfo] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async() =>{    
      const data = await fetch(MENU_API+resId);
      const json = await data.json();
      useResInfo(json.data);
    }
    return resInfo;
}
export default useRestaurantsMenu;