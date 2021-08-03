import React from 'react';
import styles from './App.module.scss';
import { HashRouter, Route, Switch } from "react-router-dom";

import HomePage from './HomePage'
import Chatmode from './Chatmode'
import NoPage from './NoPage'

function App() {
  return (
    <HashRouter>
      <div className={styles.App}>
        <section className={styles.content}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Chatmode" exact component={Chatmode} />
            <Route component={NoPage} />
          </Switch>
        </section>
      </div>
    </HashRouter>

  );
}

export default App;
