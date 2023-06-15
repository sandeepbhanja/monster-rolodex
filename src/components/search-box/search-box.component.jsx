import "./search-box.style.css";

const SearchBox = (props) => {
  return (
    <div className="SearchBox">
      <input
        className={props.className}
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
