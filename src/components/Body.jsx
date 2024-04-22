import RestaurantCard from "./RestaurantCard";
import liveData from "../utils/dummyData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(liveData);

    useEffect(() => {
        // console.log("useEffect Hook Called and rendered!");

        // fetchData();
    }, []);

    const fetchData = async () => {
        const myData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await myData.json();
        
        console.log(json.data.cards[2].data.data.card);
    }

    // Shimmer UI
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
                <input type="text"></input>
                    <button>Search</button>
                </div>
            <div className="restaurant-container">
                {/* <RestaurantCard
                resName="Hotel Real Taste"
                cuisin="Chinease,Nort Indian"/> */}
                
                {/* setLiveData(liveData); */}
                {restaurantList.map(ele  => (
                    <RestaurantCard key={ele.info.id} myData={ele}/>
                ))}

            </div>
        </div>
    );
}

export default Body;