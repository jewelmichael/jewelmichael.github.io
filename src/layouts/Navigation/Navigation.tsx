import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import Hammenu from "../../elements/Hammenu/menu";

class Navigation extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <span className={`${styles.navIconBox} ${styles.close}`}>
          <Hammenu />
        </span>
        <ul className={styles.navigation}>
          <li className={styles.navigation_item}>
            <Link
              className={styles.navigation_item_link}
              to="/"
            >home
            </Link>
          </li>
          <li className={styles.navigation_item}>
            <Link
              className={styles.navigation_item_link}
              to="/About"
            >about
            </Link>
          </li>
          <li className={styles.navigation_item}>
            <Link
              className={styles.navigation_item_link}
              to="/Work"
            >work
            </Link>
          </li>
          <li className={styles.navigation_item}>
            <Link
              className={styles.navigation_item_link}
              to="/Contact"
            >contact
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navigation;