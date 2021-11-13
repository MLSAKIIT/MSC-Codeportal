import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login Page/Login";
import Dashboard from "./components/Dashboard/Landing";
import QuestionList from "./components/Dashboard/QuestionList";
import DashboardQ from "./components/Dashboard/DashboardQ";
import DashboardSheet from "./components/Dashboard/DashboardSheet";
import ProgressCard from "./components/Dashboard/ProgressCard";
import {
  getData,
  updateDBData,
  resetDBData,
  exportDBData,
  importDBData,
} from "./services/dbServices";
import { saveAs } from "file-saver";
import IDE from "./components/IDE/IDE";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [questionData, setquestionData] = useState([]);

  useEffect(() => {
    localStorage.removeItem("cid");
    // ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    // ReactGA.pageview(window.location.pathname + window.location.search);
    getData((QuestionData) => {
      setquestionData(QuestionData);
    });
  }, []);
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
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/(ide)"
            component={IntegratedDevelopmentEnvironment}
          />
          {/* <Route component={Qode} /> */}
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact>
                <Landing />
                {/* <About />
                <Features /> */}
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/ds">
                <DashboardQ />
              </Route>
              <Route
                path="/dashboard-set"
                children={
                  <ProgressCard questionData={questionData}></ProgressCard>
                }
              ></Route>
              <Route path="/dashboard-sheet">
                <DashboardSheet />
              </Route>
            </Switch>
          </Router>
        </Switch>
        {/* TOPIC ROUTE */}
        <Route
          path="/array"
          children={
            <QuestionList data={questionData[0]} updateData={updateData} />
          }
        />
        <Route
          path="/matrix"
          children={
            <QuestionList data={questionData[1]} updateData={updateData} />
          }
        />
        <Route
          path="/string"
          children={
            <QuestionList data={questionData[2]} updateData={updateData} />
          }
        />
        <Route
          path="/search_sort"
          children={
            <QuestionList data={questionData[3]} updateData={updateData} />
          }
        />
        <Route
          path="/linked_list"
          children={
            <QuestionList data={questionData[4]} updateData={updateData} />
          }
        />
        <Route
          path="/binary_trees"
          children={
            <QuestionList data={questionData[5]} updateData={updateData} />
          }
        />
        <Route
          path="/bst"
          children={
            <QuestionList data={questionData[6]} updateData={updateData} />
          }
        />
        <Route
          path="/greedy"
          children={
            <QuestionList data={questionData[7]} updateData={updateData} />
          }
        />
        <Route
          path="/backtracking"
          children={
            <QuestionList data={questionData[8]} updateData={updateData} />
          }
        />
        <Route
          path="/stacks_queues"
          children={
            <QuestionList data={questionData[9]} updateData={updateData} />
          }
        />
        <Route
          path="/heap"
          children={
            <QuestionList data={questionData[10]} updateData={updateData} />
          }
        />
        <Route
          path="/graph"
          children={
            <QuestionList data={questionData[11]} updateData={updateData} />
          }
        />
        <Route
          path="/trie"
          children={
            <QuestionList data={questionData[12]} updateData={updateData} />
          }
        />
        <Route
          path="/dynamic_programming"
          children={
            <QuestionList data={questionData[13]} updateData={updateData} />
          }
        />
        <Route
          path="/bit_manipulation"
          children={
            <QuestionList data={questionData[14]} updateData={updateData} />
          }
        />
      </Router>
    </div>
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

// function Qode() {
//   return (
//     <div>
//       <Router>
//         <Navbar />
//         <Switch>
//           <Route path="/" exact>
//             <Landing />
//             {/* <About />
//             <Features /> */}
//           </Route>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//           <Route path="/questions">
//             <QuestionList />
//           </Route>
//           <Route path="/dashboard-set">
//             <DashboardQ />
//           </Route>
//           <Route path="/dashboard-sheet">
//             <DashboardSheet />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

export default App;
