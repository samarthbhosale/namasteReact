import {RESTAURANT_LOGO} from "../utils/links";

const RestaurantCard = (props) => {
    return (
        // <div className="restaurant-card" style={{styleCard}}>
        <div className="restaurant-card">
            {/* <img className="rest-card-image" src="https://5.imimg.com/data5/SELLER/Default/2023/3/EZ/GC/RA/31233852/portable-fast-food-stall-1000x1000.jpg" alt="./images/Swiggy_logo.png"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisin}</h4>
            <h4>4.5 Stars</h4> */}
            <img className="rest-card-image center" src={RESTAURANT_LOGO + props.myData.info.cloudinaryImageId}></img>
            <h3>{props.myData.info.name}</h3>
            <h4>{props.myData.info.cuisines.join(", ")}</h4>
            <h4>{props.myData.info.avgRating} Stars</h4>
        </div>
    );
};

export default RestaurantCard;