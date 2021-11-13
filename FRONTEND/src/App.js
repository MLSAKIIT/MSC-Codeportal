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
import { getData2, updateDBData2 } from "./services/dbServices2";
import IDE from "./components/IDE/IDE";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [questionData, setquestionData] = useState([]);
  const [questionData2, setquestionData2] = useState([]);

  useEffect(() => {
    // localStorage.removeItem("cid");

    getData((QuestionData) => {
      setquestionData(QuestionData);
    });
    // getData2((QuestionData2) => {
    //   setquestionData2(QuestionData2);
    //   console.log("2 : ", questionData2);
    // });
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

  // function updateData2(key, topicData, topicPosition) {
  //   let reGenerateUpdatedData2 = questionData2.map((topic, index) => {
  //     if (index === topicPosition) {
  //       updateDBData2(key, topicData);
  //       return {
  //         topicName: topic.topicName,
  //         position: topic.position,
  //         ...topicData,
  //       };
  //     } else {
  //       return topic;
  //     }
  //   });
  //   setquestionData2(reGenerateUpdatedData2);
  // }

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
              <About />
              <Features />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/getstarted">
              <Dashboard />
            </Route>

            <Route
              path="/dashboard"
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
      {/*--------------- TOPIC ROUTE-1---------------- */}
      <Route
        path="/sheet1/array"
        children={
          <QuestionList data={questionData[0]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/matrix"
        children={
          <QuestionList data={questionData[1]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/string"
        children={
          <QuestionList data={questionData[2]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/search_sort"
        children={
          <QuestionList data={questionData[3]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/linked_list"
        children={
          <QuestionList data={questionData[4]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/binary_trees"
        children={
          <QuestionList data={questionData[5]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/bst"
        children={
          <QuestionList data={questionData[6]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/greedy"
        children={
          <QuestionList data={questionData[7]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/backtracking"
        children={
          <QuestionList data={questionData[8]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/stacks_queues"
        children={
          <QuestionList data={questionData[9]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/heap"
        children={
          <QuestionList data={questionData[10]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/graph"
        children={
          <QuestionList data={questionData[11]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/trie"
        children={
          <QuestionList data={questionData[12]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/dynamic_programming"
        children={
          <QuestionList data={questionData[13]} updateData={updateData} />
        }
      />
      <Route
        exact
        path="/sheet1/bit_manipulation"
        children={
          <QuestionList data={questionData[14]} updateData={updateData} />
        }
      />
      {/* ---------------TOPIC ROUTE-2 ---------------*/}
      {/* <Route
          path="sheet2/array"
          children={
            <QuestionList data={questionData2[0]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/matrix"
          children={
            <QuestionList data={questionData2[1]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/string"
          children={
            <QuestionList data={questionData2[2]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/search_sort"
          children={
            <QuestionList data={questionData2[3]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/linked_list"
          children={
            <QuestionList data={questionData2[4]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/binary_trees"
          children={
            <QuestionList data={questionData2[5]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/bst"
          children={
            <QuestionList data={questionData2[6]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/greedy"
          children={
            <QuestionList data={questionData2[7]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/backtracking"
          children={
            <QuestionList data={questionData2[8]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/stacks_queues"
          children={
            <QuestionList data={questionData2[9]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/heap"
          children={
            <QuestionList data={questionData2[10]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/graph"
          children={
            <QuestionList data={questionData2[11]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/trie"
          children={
            <QuestionList data={questionData2[12]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/dynamic_programming"
          children={
            <QuestionList data={questionData2[13]} updateData={updateData2} />
          }
        />
        <Route
          path="sheet2/bit_manipulation"
          children={
            <QuestionList data={questionData2[14]} updateData={updateData2} />
          }
        /> */}
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
