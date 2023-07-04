import { useState } from "react";
import {
  Textarea,
  Tooltip
} from "@material-tailwind/react";
import InfoModal from '../components/InfoModal';

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
          emo.push(
            <Tooltip content="Sangat Puas">
              <span className="star text-4xl lg:text-7xl">&#128526;</span>
            </Tooltip>
          )
        }else if(index === 4){
          emo.push(
            <Tooltip content="Memuaskan">
              <span className="star text-4xl lg:text-7xl">&#128537;</span>
            </Tooltip>
          )
        }else if(index === 3){
          emo.push(
            <Tooltip content="Cukup Puas"> 
              <span title="Sesuai Janji" className="star text-4xl lg:text-7xl">&#128513;</span>
            </Tooltip>
          )
        }else if(index === 2){
          emo.push(
            <Tooltip content="Tidak Puas"> 
              <span title="Tidak Puas" className="star text-4xl lg:text-7xl">&#128557;</span>
            </Tooltip>
          )
        } else if(index === 1){
          emo.push(
            <Tooltip content="Sangat Tidak Puas"> 
              <span title="Kriminal" className="star text-4xl lg:text-7xl">&#128561;</span>
            </Tooltip>
          )
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
            <InfoModal />
            <Textarea required={required} onChange={handleChange} className="text-black" name="advice" value={advice} color="blue" variant="outlined" label="Kritik/Saran"/>
        </div>
      </div>
    );
}
 
export default StarRating;