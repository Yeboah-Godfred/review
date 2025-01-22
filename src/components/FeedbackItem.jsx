import React from 'react'
import { useState } from 'react'

function FeedbackItem() {

  const [rating, setRating] = useState(5);
  const [text, setText] = useState("The product was very good");

  const handleAddRating = () => {
    setRating((rate) => {
        return rate + 1
    })
  }

  const handleSubRating = () => {
    setRating((rate) => {
        return rate - 1
    })
  }

  return (
    <div className='card'>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button style={{marginRight:"30px"}} onClick={handleAddRating}>Increase rating</button>
      <button onClick={handleSubRating}>Reduce rating</button>
    </div>
  )
}

export default FeedbackItem
