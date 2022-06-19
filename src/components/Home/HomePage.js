import { Fragment } from "react";

import classes from "./HomePage.module.css";

import SearchBar from "../UI/SearchBar/SearchBar";

import harryPoster from "../../assets/HarryPotterPoster.jpg";
import NavLinks from "./NavLinks";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

import menuIcon from "../../icons/menuIcon.svg";

const HomePage = () => {
  return (
    <Fragment>
      <header>
        <nav>
          <div className={classes["menu-icon-container"]}>
            <img className={classes["menu-icon"]} src={menuIcon} />
          </div>
          <span className={classes.logo}>AMDb</span>
          <Navigation className={classes.navigation} />
          <MobileNavigation className={classes["mobile-navigation"]} />
          <a className={classes.login} href="#">
            Login
          </a>
        </nav>
      </header>
      <main>
        <SearchBar className={classes.searchbar} />
        <section className={classes.posters}>
          <img className={classes.poster} src={harryPoster} />
          <img className={classes.poster} src={harryPoster} />
          <img className={classes.poster} src={harryPoster} />
          <img className={classes.poster} src={harryPoster} />
          <img className={classes.poster} src={harryPoster} />
          <img className={classes.poster} src={harryPoster} />
          <img className={classes.poster} src={harryPoster} />
          <img className={classes.poster} src={harryPoster} />
        </section>
      </main>
    </Fragment>
  );
};

export default HomePage;
