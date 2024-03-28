import RestaurantCard from "./RestaurantCard";
import liveData from "../utils/dummyData";
import { useState } from "react";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(liveData);
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