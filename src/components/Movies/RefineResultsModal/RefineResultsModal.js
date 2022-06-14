import classes from "./RefineResultsModal.module.css";

import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";

const RefineResultsModal = () => {
  const statusCheckboxes = [
    "Most Popular",
    "Highest Rated",
    "Coming Soon",
    "Showing Now",
    "Latest",
    "All"
  ];

  const genreCheckboxes = [
    "Horror",
    "Adventure",
    "Romance",
    "Mystery",
    "Family",
    "Animation",
    "Documentary",
    "Thriller",
    "Sci-fi",
    "Crime",
    "Fantasy",
    "TV Movie",
    "Comedy",
    "Drama",
    "History",
    "War",
    "Action",
    "Music",
    "Western",
    "All"
  ];

  return (
    <Modal>
      <form>
        <h1>Refine Results</h1>
        <h2>Status</h2>
        <div className={classes["container-status"]}>
          {statusCheckboxes.map((checkbox) => (
            <Input
              className={classes.input}
              label={checkbox}
              input={{
                type: "checkbox"
              }}
            />
          ))}
        </div>
        <hr />
        <h2>Genre</h2>
        <div className={classes["container-genre"]}>
          {genreCheckboxes.map((checkbox) => (
            <Input
              className={classes.input}
              label={checkbox}
              input={{
                type: "checkbox"
              }}
            />
          ))}
        </div>
        <div className={classes["container-btns"]}>
          <button className={classes["btn-confirm"]}>CONFIRM</button>
          <button className={classes["btn-cancel"]}>CANCEL</button>
        </div>
      </form>
    </Modal>
  );
};

export default RefineResultsModal;
