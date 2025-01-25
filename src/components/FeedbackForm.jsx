import React from 'react'
import Card from '../shared/Card'
import { useState } from 'react'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({select}) {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {

        if(message === ""){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== "" && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage("Message should be at least 10 characters")
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

  return (
   <Card>
    <form>
        <h2>Rate your service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
            <input onChange={handleTextChange} type='text' placeholder='Write a Review' value={text}></input>
            <Button type='submit' version='primary' isDisabled={btnDisabled}>
                Submit
            </Button>
        </div>
        {message && <div className='message'>{message}</div>}
    </form>
   </Card>
  )
}

export default FeedbackForm
