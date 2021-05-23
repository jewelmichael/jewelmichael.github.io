import { Route, Switch } from "react-router-dom";
import HomePage from "../page/Home";
import AboutPage from "../page/About";
import WorkPage from "../page/Work";
import ContactPage from "../page/Contact";
import Navigation from "./Navigation/Navigation";
import React from 'react';
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`${styles.pageWrapper}`}>
      <aside className={styles.pageNavWrapper}>
        <Navigation />
      </aside>
      <section className={styles.pageContentWrapper}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/About" component={AboutPage} />
          <Route path="/Work" component={WorkPage} />
          <Route path="/Contact" component={ContactPage} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
