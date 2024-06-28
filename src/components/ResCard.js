import { CDN_URL } from "../utils/constants";
const ResCard = ({resData}) =>{
    const {name,cloudinaryImageId,locality,areaName,costForTwo,cuisines,avgRating} = resData?.info;
    return (
        <div className="w-[300px] m-5 p-5 bg-gray-200 rounded-lg shadow-lg hover:bg-gray-400 transition-all ">
            <img className="rounded-sm object-cover h-40 w-96" src={CDN_URL+cloudinaryImageId} alt ="res card"/>
            <h3 className="font-bold py-2">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{locality+', '+areaName}</h4>
            <h4>{costForTwo}</h4>
            <span>{avgRating} Stars</span>
        </div>
    );
}

// higher order compontent
export const offerLabelRes = (ResCard) =>{
    return (props) => {
        const {resData} = props;
        return(
            <div>
                <label className="relative bg-black text-white m-0 p-2 rounded-md">{resData.info.aggregatedDiscountInfoV3.header} {resData.info.aggregatedDiscountInfoV3.subHeader}</label>
                <ResCard {...props}/>
            </div>
        );

    }
}
export default ResCard;