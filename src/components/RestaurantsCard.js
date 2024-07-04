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
      <div
        className="w-[270px] rounded-md mx-4 mb-4 bg-gray-50 hover:scale-105 ease-in duration-150"
      >
        <div className="w-full">
          <img
            className="rounded-t-md"
            alt="res-logo"
            src={`${CDN_URL}/${cloudinaryImageId}`}
          />
        </div>
        <div className="p-4">
          <h1 className="font-bold pb-2 text-lg">{name}</h1>
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
