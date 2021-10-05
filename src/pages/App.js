import React from 'react';
import styles from './App.module.scss';
import { HashRouter, Route, Switch } from "react-router-dom";

import HomePage from './HomePage'
import Chatmode from './Chatmode'
import SearchPerson from './Chatmode/SearchPerson';
import ChatPsw from './ChatPsw'
import PswSearchPerson from './ChatPsw/PswSearchPerson'
import Chat from './Chat';
import TestPage from './TestPage'
import NoPage from './NoPage'

function App() {
  const chatRoute = {
    path: '/Chat/:chatroomType'
  }

  return (
    <HashRouter>
      <div className={styles.App} style={{backgroundColor: '#353F67'}}>
        <section className={styles.content}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Chatmode" exact component={Chatmode} />
            <Route path="/ChatPsw" exact component={ChatPsw} />
            <Route path="/SearchPerson" exact component={SearchPerson} />
            <Route path="/TestPage" exact component={TestPage} />
            <Route path={chatRoute.path} exact component={Chat} />
            <Route path="/ChatPsw/PswSearchPerson" exact component={PswSearchPerson} />
            <Route component={NoPage} />
          </Switch>
        </section>
      </div>
    </HashRouter>
  );
}

export default App;
