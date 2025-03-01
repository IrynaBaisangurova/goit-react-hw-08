import { useId } from "react";
import { changeFilter } from "../../redux/filters/slice";
import c from "./SearchBox.module.css";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const id = useId();

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={c.searchContainer}>
      <label className={c.searchText} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        onChange={handleSearch}
        className={c.input}
        name="value"
        id={id}
        type="text"
      />
    </div>
  );
};

export default SearchBox;
