import React, {Component} from "react";
import PageWrapper from "./Components/PageWrapper";
import Audios from "./Components/Pages/Audios";
import Topics from "./Components/Pages/Topics";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopicDetails from "./Components/Pages/TopicDetails";

function App(){
  return (
    <Router>
      <PageWrapper>
        
          <Route 
            exact = {true}
            path ="/"
            component = {Audios}
          />
        
          <Route 
            path = "/topics"
            component = {Topics}
          />

          <Route 
            path = "/topicDetails"
            component = {TopicDetails}
          />
        
      </PageWrapper>
    </Router>
  );
}

export default App;
