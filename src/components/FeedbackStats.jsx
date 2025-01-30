import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext)

    const totalRatings = feedback.length

    let average = feedback.reduce((sum, value) => {
        return sum + value.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

  return (

    <div className='feedback-stats'>
      <h3>
        {totalRatings} ratings
      </h3>
      <h3>
        Average rating : {isNaN(average) ? 0:average}
      </h3>
    </div>
  )
}

export default FeedbackStats
