import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store";
import Landing from "./components/layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Header />
      {
        //Public Routes
      }
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
      {
        //Private Routes
      }
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
    </Router>
    </Provider>
  );
}

export default App;
