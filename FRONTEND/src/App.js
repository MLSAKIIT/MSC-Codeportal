import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login Page/Login";
import Dashboard from "./components/Dashboard/Landing";
import QuestionList from "./components/Dashboard/QuestionList";
import DashboardSheet from "./components/Dashboard/DashboardSheet";
import ProgressCard from "./components/Dashboard/ProgressCard";
import { getData, updateDBData } from "./services/dbServices";
// import { getData2, updateDBData2 } from "./services/dbServices2";
import IDE from "./components/IDE/IDE";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [questionData, setquestionData] = useState([]);
  // const [questionData2, setquestionData2] = useState([]);

  useEffect(() => {
    // localStorage.removeItem("cid");

    getData((QuestionData) => {
      setquestionData(QuestionData);
    });
  }, []);
  // useEffect(() => {
  //   localStorage.removeItem("cid");

  //   // getData((QuestionData) => {
  //   //   setquestionData(QuestionData);
  //   // });
  //   getData2((QuestionData2) => {
  //     setquestionData2(QuestionData2);
  //     console.log("2 : ", questionData2);
  //   });
  // }, [questionData2]);

  // console.log("question data : ", questionData[0]);
  //to update progress in '/' route and also update DB
  function updateData(key, topicData, topicPosition) {
    let reGenerateUpdatedData = questionData.map((topic, index) => {
      if (index === topicPosition) {
        updateDBData(key, topicData);
        return {
          topicName: topic.topicName,
          position: topic.position,
          ...topicData,
        };
      } else {
        return topic;
      }
    });
    setquestionData(reGenerateUpdatedData);
  }

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/(ide)"
          component={IntegratedDevelopmentEnvironment}
        />

        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/getstarted">
              <Dashboard />
            </Route>
            <Route path="/dashboard-sheet">
              <DashboardSheet />
            </Route>
          </Switch>
        </Router>
      </Switch>
    </Router>
  );
}

function IntegratedDevelopmentEnvironment() {
  return (
    <div>
      <Route exact path="/ide" render={() => <Redirect to="/ide" />} />
      <Route path="/ide" component={IDE} />
    </div>
  );
}

export default App;
