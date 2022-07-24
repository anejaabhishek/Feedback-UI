import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import feedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header textColor="white" bgColor="#202942" />
        <div className="container">
          {/* <Routes> */}
          <Route exact path="/">
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </Route>
          <Route path="/about">{AboutPage}</Route>
          {/* </Routes> */}
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
