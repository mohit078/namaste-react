import { useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../utils/UseRestaurantDetails";

const RestaurantDetails = () => {
    const { resId } = useParams();

    // Custom Hook to fetch restaurant details
    const restInfo = useRestaurantDetails(resId);


    return (restInfo &&
        <div className="menu">
            <h1>{restInfo.name}</h1>
            <h3>Menu</h3>
            <ul>
                {restInfo.cuisines.map((cuisine) => (
                    <li key={cuisine}>{cuisine}</li>
                ))}
            </ul>
            <h3>Recommended Items</h3>
            <ul>
                {restInfo?.description?.split(",").map((desc, index) => (
                    <li key={index}> {desc.trim()}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantDetails;