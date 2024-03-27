import RestaurantCard from "./RestaurantCard";
import liveData from "../utils/dummyData";

const Body = () => {
    return (
        <div className="body">
            <div className="Search">
                <input type="text"></input>
                    <button>Search</button>
                </div>
            <div className="restaurant-container">
                {/* <RestaurantCard
                resName="Hotel Real Taste"
                cuisin="Chinease,Nort Indian"/> */}
                
                {liveData.map(ele  => (
                    <RestaurantCard key={ele.info.id} myData={ele}/>
                ))}

            </div>
        </div>
    );
}

export default Body;