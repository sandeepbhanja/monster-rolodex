import { Component } from "react";
import './search-box.style.css';
class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <input
          className={this.props.className}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
