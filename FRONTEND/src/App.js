// import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Features from './components/Features/Features';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login Page/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div>
          <Route path="/" exact>
            <Landing/>
            <About/>
            <Features/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </div>
      </Switch>
    </Router>
    
  );
}

export default App;