import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/style.scss';
import Footer from './components/home/Footer';
import Header from './components/home/Header';
import Home from './components/home/Home';

export default function App() {
  return (
    <Router>
      <div className="page">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
