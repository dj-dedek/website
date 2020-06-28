/* eslint-disable */
import React, { Fragment } from 'react';
import PageWrapper from './components/PageWrapper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// PAGES
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    // <Fragment>
      <Router>
        <PageWrapper>
            <Route 
              exact={true}
              path="/"
              component={Home}
            />
            <Route 
              path="/about"
              component={About}
            />
            <Route 
              path="/contact"
              component={Contact}
            />
        </PageWrapper>
      </Router>
    // </Fragment>
  );
}

export default App;
