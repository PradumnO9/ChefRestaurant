import { CDN_URL } from "../utils/constant";

const ReataurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
    cloudinaryImageId,
    sla,
  } = resData;

  return (
    <div>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={`${CDN_URL}/${cloudinaryImageId}`}
        />
        <div className="res-card_essential">
          <h1>{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <h3>{avgRating} stars</h3>
          <h3>{costForTwo}</h3>
          <h3>Location: {areaName}</h3>
          <h4>Delivery time: {sla?.slaString}</h4>
        </div>
      </div>
    </div>
  );
};

export default ReataurantCard;
