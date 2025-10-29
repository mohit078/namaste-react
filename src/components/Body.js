import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restList from "../utils/mockData";



const Body = () => {
    const [listOfResturants, setListOfResturants] = useState(restList)

    return (
        <div className="body">
            <button className="top-search" onClick={() => {
                const filteredList = listOfResturants.filter(
                    (restaurant) => restaurant.avgRating > 4
                );
                setListOfResturants(filteredList);
            }}>Top Search</button>
            <div className="search">
                <input type="text" className="search-box" />
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurant-list">
                {listOfResturants.map((resturant) => (
                    <RestaurantCard key={resturant.id} resData={resturant} />
                ))}
            </div>
        </div>
    )
}

export default Body;