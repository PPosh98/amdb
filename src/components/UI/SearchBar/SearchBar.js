import classes from "./SearchBar.module.css";

import searchIcon from "../../../icons/searchIcon.svg";

const SearchBar = (props) => {
  return (
    <form
      autocomplete="off"
      className={`${classes.searchbar} ${props.className}`}
    >
      <input
        id="search-input"
        className={classes["search-input-field"]}
        type="search"
        placeholder="Search for a movie..."
      />
      <button className={classes["search-icon-btn"]}>
        <img className={classes["search-icon"]} src={searchIcon} />
      </button>
    </form>
  );
};

export default SearchBar;
