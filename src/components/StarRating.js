import { useState } from "react";

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className="star-rating lg:text-center">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star text-4xl lg:text-7xl">&#9733;</span>
            </button>
          );
        })}
        <input type="hidden" onChange={() => setRating(1)} value={rating} name="rating"/>
      </div>
    );
}
 
export default StarRating;