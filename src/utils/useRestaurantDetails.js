import { useState, useEffect } from "react";

// Custom Hook to fetch restaurant details
const useRestaurantDetails = (resId) => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    //API Call to get the restaurant details
    const fetchMenu = async () => {
        const data = await fetch(`http://localhost:3001/restDetails?id=${resId}`);
        const json = await data.json();
        // console.log(json[0]);
        setRestInfo(json[0]);
    }

    return restInfo;
}

export default useRestaurantDetails;