import { useState } from "react";

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // Emoji
    let emo = [];

    const emoji = (index) => {

      // Finfing Emoji
        if(index === 5){
          emo.push(<span className="star text-4xl lg:text-7xl">&#128526;</span>)
        }else if(index === 4){
          
          emo.push(<span className="star text-4xl lg:text-7xl">&#128537;</span>)
        }else if(index === 3){
          
          emo.push(<span className="star text-4xl lg:text-7xl">&#128513;</span>)
        }else if(index === 2){
          
          emo.push(<span className="star text-4xl lg:text-7xl">&#128557;</span>)
        } else if(index === 1){
          
          emo.push(<span className="star text-4xl lg:text-7xl">&#128561;</span>)
        }
    };

    return (
      <div className="star-rating text-center">
        {[...Array(5)].map((star, index) => {
          index += 1;

          // Calling Emoji Function
          emoji(index)

          return (
            <button
              type="button"
              key={index}
              className={index === (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              {emo[index - 1]}
            </button>
          );
        })}
        <input type="hidden" onChange={() => setRating(1)} value={rating} name="rating"/>
      </div>
    );
}
 
export default StarRating;