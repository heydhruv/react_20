import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css'
export default function StarRating ({numberOfStars = 5}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleRating (ratingValue) {
        setRating(ratingValue)
    }
    function handleHoverEnter (hoverValue) {
        setHover(hoverValue)
    }
    function handleHoverLeave (hoverValue) {
        setHover(rating)
    }

    return (
        <div>
        {
            [...Array(numberOfStars)].map((_,index) => {
                index += 1
                return <FaStar
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                key={index}
                onClick={() => handleRating(index)}
                onMouseEnter={() => handleHoverEnter(index)}
                onMouseLeave={() => handleHoverLeave(index)}
                />
            })
        }
    </div>
    )
}