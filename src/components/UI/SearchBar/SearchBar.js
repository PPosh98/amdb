import classes from "./SearchBar.module.css";

import searchIcon from "../../../icons/searchIcon.svg";

const SearchBar = () => {
  return (
    <form className={classes.searchbar}>
      <input
        id="search-input"
        className={classes["search-input-field"]}
        type="search"
        placeholder="Search here for a movie..."
      />
      <button className={classes["search-icon-btn"]}>
        <img className={classes["search-icon"]} src={searchIcon} />
      </button>
    </form>
  );
};

export default SearchBar;
