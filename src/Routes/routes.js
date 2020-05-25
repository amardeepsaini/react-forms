import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SingleStep from "../Containers/single-step"
import Homepage from "../Containers/homepage"

const RouterHandler = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/single-step" component={SingleStep} />
        <Route exact path="/homepage" component={Homepage} />
        <Route path="*" component={SingleStep} ><Redirect to="/homepage"/></Route>
      </Switch>
    </Router>
  );
};

export default RouterHandler;
