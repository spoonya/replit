import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/scss/style.scss';
import Home from './components/home/Home';
import Project from './components/project/Project';

export default function App() {
  return (
    <Router>
      <div className="page">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Project} />
        </Switch>
      </div>
    </Router>
  );
}