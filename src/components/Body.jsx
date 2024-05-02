import RestaurantCard from "./RestaurantCard";
import liveData from "../utils/dummyData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"

const Body = () => {
    // const [restaurantList, setRestaurantList] = useState(liveData);
    // const [filteredrestaurantList, setFilteredRestaurantList] = useState(liveData);
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredrestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        // console.log("useEffect Hook Called and rendered!");

        fetchData();
    }, []);

    const fetchData = async () => {
        const myData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await myData.json();
        
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // getting dynamic restaurant data through swiggys API and rendering
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Shimmer UI /  Conditional Rendering
    if(restaurantList === 0){
        return <Shimmer></Shimmer>;
    }

    return (
        <div className="body">
            <div className="Search">
                <button className="filter-button" onClick={() => {
                    let filteredData = restaurantList.filter(ele => ele.info.avgRating > 4);
                    console.log("size of filtered"+filteredData.length);
                    console.log("size of filtered"+filteredData);

                    setRestaurantList(filteredData);

                    // filteredData.map(ele => (
                    //     <RestaurantCard key={ele.info.id} myData={ele}/>
                    // ));
                    // console.log(liveData);
                }}>Filter</button>
                <input type="text" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}></input>
                    <button onClick={() => {
                        console.log(searchText);
                        let searchedData = restaurantList.filter(ele => ele.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                        setFilteredRestaurantList(searchedData);
                    }}>Search</button>
                </div>
            <div className="restaurant-container">
                {/* <RestaurantCard
                resName="Hotel Real Taste"
                cuisin="Chinease,Nort Indian"/> */}
                
                {/* setLiveData(liveData); */}
                {filteredrestaurantList.map(ele  => (
                    <RestaurantCard key={ele.info.id} myData={ele}/>
                ))}

            </div>
        </div>
    );
}

export default Body;