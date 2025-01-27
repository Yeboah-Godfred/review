import Header from "./components/Header";
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";


function App() {

  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete?")){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Header heading="Feedback & Ratings"/>
      <div className="container-app">
        <Routes>
           <Route exact path="/">
            <FeedbackForm handleAdd={addFeedback}/>     
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
          </Route> 
        
          <Route path="/about" Component={AboutPage}/>
        </Routes>

      </div>
    </Router>
    
  );
}

export default App;
