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

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div>
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
        </div>
      </Switch>
    </Router>
  );
}

export default App;
