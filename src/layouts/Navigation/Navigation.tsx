import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import Hammenu from "../../elements/Hammenu/menu";

class Navigation extends React.Component {
  public render() {
    return (
      <React.Fragment>
        {window.innerWidth < 640 &&
          <span className={`${styles.navIconBox} ${styles.close}`}>
            <Hammenu />
          </span>
        }
        <ul className={styles.navigation}>
          <li className={styles.navigation_item}>
            <NavLink
              className={styles.navigation_item_link}
              activeClassName={styles.isActive}
              to="/"
              exact
            >home
            </NavLink>
          </li>
          <li className={styles.navigation_item}>
            <NavLink
              className={styles.navigation_item_link}
              activeClassName={styles.isActive}
              to="/About"
            >about
            </NavLink>
          </li>
          <li className={styles.navigation_item}>
            <NavLink
              className={styles.navigation_item_link}
              activeClassName={styles.isActive}
              to="/Work"
            >work
            </NavLink>
          </li>
          <li className={styles.navigation_item}>
            <NavLink
              className={styles.navigation_item_link}
              activeClassName={styles.isActive}
              to="/Contact"
            >contact
            </NavLink>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navigation;