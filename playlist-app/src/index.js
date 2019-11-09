import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom';
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

/*
<ul class="nav navbar-nav mr-auto">
  <li class="nav-item">
    <a class="nav-link" href="/index.php">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/about.php">About</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" id="scan-dropdown" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Scan</a>
    <div class="dropdown-menu" aria-labelledby="scan-dropdown">
      <a class="dropdown-item" href="/scan-server.php">Server</a>
      <a class="dropdown-item" href="/scan-friends.php">Friends List</a>
      <a class="dropdown-item" href="/scan-group.php">Steam Group</a>
    </div>
  </li>
  <li class="nav-item" id="get-premium">
    <a class="btn btn-outline-success" href="/premium.php">Get Premium</a>
  </li>
</ul>
*/

  render() {
    return (
      <BrowserRouter>
            <React.Fragment>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Playlist App</Link>
                <ul className="navbar-nav list-inline navigation-ul">
                  <li className="nav-item">
                    <Link to="/">
                      <button className="btn btn-secondary">
                        Home
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/statistics">
                      <button className="btn btn-secondary">
                        Stats
                      </button>
                    </Link>
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path="/statistics" component={Statistics} />
                <Route exact path="/" component={App} />
                <Redirect from="*" to="/" />
              </Switch>
            </React.Fragment>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById("root"));