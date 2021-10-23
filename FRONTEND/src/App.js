// import logo from './logo.svg';
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
import IDE from "./components/IDE/IDE";

import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
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
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/questions">
              <QuestionList />
            </Route>
            <Route path="/dashboard-set">
              <DashboardQ />
            </Route>
            <Route path="/dashboard-sheet">
              <DashboardSheet />
            </Route>
        </Switch>
        <Route path="/ide" exact>
          <IDE />
        </Route>
      </Router>

    </div>
  );
}

export default App;
