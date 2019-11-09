import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom';
import api from './dataStore/stubAPI';
import localCache from "./localCache";
import './index.css';
import App from './App';
import Statistics from './components/statistics';
import ExternalLinks from './components/externallinks';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Router extends Component {
  constructor() {
    super();
  }

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
                <Route path="/external/playlist-:playlistid/song-:songid" component={ExternalLinks} />
                <Redirect from="*" to="/" />
              </Switch>
            </React.Fragment>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById("root"));