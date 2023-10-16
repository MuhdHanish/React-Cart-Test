import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import PropTypes from "prop-types";


const StarRating  = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex w-full sm:w-1/2 h-fit justify-start items-center">
      <div className="flex flex-wrap w-fit h-fit text-md font-normal">
        {[...(Array  (fullStars))].map((_, index) => (
          <span key={index}>
            <RiStarSFill style={{ fontSize: "18px", color: "#B59410" }} />
          </span>
        ))}
        {hasHalfStar && (
          <span>
            <RiStarSFill style={{ fontSize: "18px", color: "#B59410" }} />
          </span>
        )}
        {[...(Array( 5 - fullStars - (hasHalfStar ? 1 : 0)))].map(
          (_, index) => (
            <span key={index}>
              <RiStarSLine style={{ fontSize: "18px", color: "#B59410" }} />
            </span>
          )
        )}
      </div>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};
export default StarRating;
