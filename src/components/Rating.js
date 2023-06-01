import { useState } from "react";
import {
  Textarea
} from "@material-tailwind/react";

const StarRating = ({TextArea}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // For Advice
    const [advice, setAdvice] = useState('');

    // For required
    const [required, setRequired] = useState(false);

    const handleChange = event => {
        // Set New Advice Value
        setAdvice(event.target.value);
    };

    // Emoji
    let emo = [];

    const emoji = (index) => {

      // Finding Emoji
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

    // Event when emoji is clicked
    const emojiClick = (index) => {

      // Set Rating Score
      setRating(index)

      // Set Required Level for Advice
      if(index < 3){
        setRequired(true)
      }else{
        setRequired(false)
      }
    }

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
              onClick={() => emojiClick(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              {emo[index - 1]}
            </button>
          );
        })}

        {/* Hidden */}
        <input type="hidden" onChange={() => setRating(1)} value={rating} name="rating"/>

        {/* Advice */}
        <div className="mt-6">
            <Textarea required={required} onChange={handleChange} className="text-black" name="advice" value={advice} color="blue" variant="outlined" label="Kritik/Saran"/>
        </div>
      </div>
    );
}
 
export default StarRating;