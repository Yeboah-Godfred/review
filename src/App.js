import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
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
