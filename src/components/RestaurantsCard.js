import { CDN_URL } from "../utils/constant";

const ReataurantCard = ({ resData }) => {
  return (
    <div>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={`${CDN_URL}/${resData.cloudinaryImageId}`}
        />
        <h1>{resData.name}</h1>
        <p>{resData.cuisines.join(", ")}</p>
        <h3>{resData.avgRating} stars</h3>
        <h3>{resData.costForTwo} cost for two</h3>
        <h3>Location: {resData.areaName}</h3>
      </div>
    </div>
  );
};

export default ReataurantCard;
