import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { use, useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import UserContext from "../utils/userContext";
// import restList from "../utils/mockData";



const Body = () => {
    // Custom Hook to fetch restaurant details
    const listOfResturants = useRestaurants();
    const [filteredResturants, setFilteredResturants] = useState([]);
    const [searchText, setSearchText] = useState([""]);
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

    const { loggedInUser, setUserName } = useContext(UserContext);
    console.log(setUserName);


    useEffect(() => {
        setFilteredResturants(listOfResturants);
    }, [listOfResturants]);

    return (
        <div className="body">
            <button className="top-search" onClick={() => {
                const filteredList = listOfResturants.filter(
                    (restaurant) => restaurant.avgRating > 4
                );
                setFilteredResturants(filteredList);
            }}>Top Search</button>
            <h1>Logged In User is : {loggedInUser}</h1>
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button className="search-btn" onClick={() => {
                    const filterResults = listOfResturants.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));
                    // console.log(filterResults);
                    setFilteredResturants(filterResults);
                }}>Search</button>
            </div>

            <div className="search">
                <input type="text" className="search-box" value={loggedInUser} onChange={(e) => {
                    setUserName(e.target.value);
                }} />
            </div>

            <div className="restaurant-list">
                {filteredResturants.map((resturant) => (
                    <Link to={"/resturant/" + resturant.id} key={resturant.id}>
                        {resturant.isPromoted ? <PromotedRestaurantCard resData={resturant} /> : <RestaurantCard resData={resturant} />}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;