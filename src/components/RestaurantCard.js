import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData);
    return (
        <div className="restaurant-card">
            <img
                src={CDN_URL + resData.cloudinaryImageId}
                className="restaurant-logo"
                alt="restaurant-logo" />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating} Stars</h4>
            {/* {resData.isPromoted && (<h4 className="promoted">Promoted</h4>)} */}
            <h4>30 Minutes</h4>
        </div>
    )
}

// Higher Order Component (HOC) to add "Promoted" label
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <h4 className="promoted">Promoted</h4>
                <RestaurantCard {...props} />
            </div>
        )
    }
}



export default RestaurantCard;