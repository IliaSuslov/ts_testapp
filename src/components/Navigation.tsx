import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Films from "../pages/Films";
import Test from "../pages/Test";


const Navigator = () => {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/">
              <Films />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default Navigator;
