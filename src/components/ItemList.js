import { CDN_URL } from "../utils/constants";
const ItemList = ({item}) => {
    return (
      <div className="flex border-2 p-5 justify-between">
                     <div className="text-left">
                        <h3 className="font-bold">
                        {item.card.info.name}
                        </h3>
                      Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}
                     {item.card.info.ratings.aggregatedRating.rating ? <p>Rating: {item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})</p> : ''}
                      <p className="text-slate-400">{item.card.info.description}</p>
                     </div>
                     <div className="text-right">
                      { item.card.info.imageId ? <img src={CDN_URL+item.card.info.imageId} className="w-32" /> : '' } 
                     </div>
                    </div>
    );
}
export default ItemList;