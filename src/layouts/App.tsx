import { Route, Switch } from "react-router-dom";
import HomePage from "../page/Home/Home";
import AboutPage from "../page/About/About";
import WorkPage from "../page/Work/Work";
import ContactPage from "../page/Contact/Contact";
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
        <div className={styles.container}>
          <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/About" component={AboutPage} />
            <Route path="/Work" component={WorkPage} />
            <Route path="/Contact" component={ContactPage} />
          </Switch>
        </div>
      </section>
    </div>
  );
}

export default App;
