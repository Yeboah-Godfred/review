import Header from "./components/Header";
import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";


function App() {

  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header heading="Feedback & Ratings"/>
      <div className="container-app">
        <FeedbackItem />
      </div>
    </>
    
  );
}

export default App;
