import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Spinner from "react-bootstrap/Spinner";
import QuestionList from "./components/Dashboard/QuestionList";
import ProgressCard from "./components/Dashboard/ProgressCard";
import { getData, updateDBData } from "./services/dbServices";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  // setting state for data received from the DB
  const [questionData, setquestionData] = useState([]);

  useEffect(() => {
    localStorage.removeItem("cid");

    getData((QuestionData) => {
      setquestionData(QuestionData);
    });
  }, []);

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
      <Navbar />
      <div className="App">
        {questionData.length === 0 ? (
          // load spinner until data is fetched from DB
          <div className="d-flex justify-content-center">
            <Spinner animation="grow" variant="success" />
          </div>
        ) : (
          <>
            <Route
              exact
              path="/"
              children={
                <ProgressCard questionData={questionData}></ProgressCard>
              }
            />

            {/* QuestionListROUTE */}

            <Route
              path="/sheet2/array"
              children={
                <QuestionList data={questionData[0]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/dynamic_programming"
              children={
                <QuestionList data={questionData[1]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/string"
              children={
                <QuestionList data={questionData[2]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/maths"
              children={
                <QuestionList data={questionData[3]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/greedy"
              children={
                <QuestionList data={questionData[4]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/dfs"
              children={
                <QuestionList data={questionData[5]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/binary_trees"
              children={
                <QuestionList data={questionData[6]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/hash_table"
              children={
                <QuestionList data={questionData[7]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/binary_search"
              children={
                <QuestionList data={questionData[8]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/bfs"
              children={
                <QuestionList data={questionData[9]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/two_pointer"
              children={
                <QuestionList data={questionData[10]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/backtracking"
              children={
                <QuestionList data={questionData[11]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/stacks_queues"
              children={
                <QuestionList data={questionData[12]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/design"
              children={
                <QuestionList data={questionData[13]} updateData={updateData} />
              }
            />

            <Route
              path="/sheet2/graph"
              children={
                <QuestionList data={questionData[14]} updateData={updateData} />
              }
            />
            <Route
              path="/sheet2/linked_list"
              children={
                <QuestionList data={questionData[15]} updateData={updateData} />
              }
            />
            <Route
              path="/sheet2/heap"
              children={
                <QuestionList data={questionData[16]} updateData={updateData} />
              }
            />
            <Route
              path="/sheet2/sliding_window"
              children={
                <QuestionList data={questionData[17]} updateData={updateData} />
              }
            />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
