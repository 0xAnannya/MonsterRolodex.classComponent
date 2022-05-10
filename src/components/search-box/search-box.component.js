import "./search-box.styles.css";

const SearchBox = (className, onChangeHandler) => {
  return (
    <input
      className={`search-box ${className}`}
      placeholder="search monsters"
      type="search"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
