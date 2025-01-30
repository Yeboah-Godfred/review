import React,{ createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({Children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:"This is from Context",
            rating:7
        }
    ])

    return <FeedbackContext.Provider value={{
        feedback,
    }}>
        {Children}
    </FeedbackContext.Provider>
}

export default FeedbackContext