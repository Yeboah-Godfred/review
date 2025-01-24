import React from 'react'
import Card from '../shared/Card'
import { useState } from 'react'

function FeedbackForm() {

    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

  return (
   <Card>
    <form>
        <h2>Rate your service with us</h2>
        <div className="input-group">
            <input onChange={handleTextChange} type='text' placeholder='Write a Review' value={text}></input>
            <button type="submit">Submit</button>
        </div>
    </form>
   </Card>
  )
}

export default FeedbackForm
