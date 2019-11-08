import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import api from './dataStore/stubAPI';
import localCache from "./localCache";
import './index.css';
import App from './App';
import Statistics from './components/statistics';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Router extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="jumbotron">
          <div className="container-fluid">
            <Switch>
              <Route path="/statistics" component={Statistics} />
              <Route exact path="/" component={App} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById("root"));