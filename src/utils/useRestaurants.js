import { useState, useEffect } from "react";

// Custom Hook to fetch restaurant details
const useRestaurants = () => {
    const [listOfResturants, setListOfResturants] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("http://localhost:3001/restList");
        const json = await data.json();
        console.log(json);
        setListOfResturants(json);
    }

    return listOfResturants;
}

export default useRestaurants;