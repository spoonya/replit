import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/scss/style.scss';
import Home from './components/home/Home';
import Page404 from './components/Page404';
import Project from './components/project/Project';

export default function App() {
  return (
    <Router>
      <div className="page">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Project} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}
