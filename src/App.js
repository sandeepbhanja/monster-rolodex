import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users, filterMon: users }));
  }

  onSearchChange = (event) => {
    let s = event.target.value;
    this.setState({ searchString: s });
  };

  render() {
    const filtermonster = this.state.monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(this.state.searchString.toLowerCase());
    });
    return (
      <div className="App">

        <h1 className='app-title'>Monster Rolodex</h1>

        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder="Search Monsters"
          className="search-box"
        ></SearchBox>
        <CardList monsters={filtermonster} />
      </div>
    );
  }
}

export default App;
