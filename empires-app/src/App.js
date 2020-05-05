import React from 'react';
import {
  Switch,
  Route,
  HashRouter as Router
} from 'react-router-dom';

import './App.css';

import Provider from './Provider';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import New from './pages/New/New';
import Settings from './pages/Settings/Settings';
import Extra from './pages/Extra/Extra';

function App() {
  return (
    <Provider>
      <Router>
        <Layout>
          <Switch>
            <Route path='/extra'>
              <Extra />
            </Route>
            <Route path='/settings'>
              <Settings />
            </Route>
            <Route path='/new'>
              <New />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
