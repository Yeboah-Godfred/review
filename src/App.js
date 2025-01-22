import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";


function App() {

  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header heading="Feedback & Ratings"/>
      <div className="container-app">
        <FeedbackList feedback={feedback}/>
      </div>
    </>
    
  );
}

export default App;
