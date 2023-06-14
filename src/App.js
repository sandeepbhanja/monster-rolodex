import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterMonster,setFilterMonster] = useState(monsters);
  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    setSearchField(search);
  };

  useEffect(() =>{
    const newFilterMonster = monsters.filter((monster)=>(
      monster.name.toLocaleLowerCase().includes(searchField)
    ));
    setFilterMonster(newFilterMonster);
  } , [monsters,searchField]);

  return (
    <div>
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="search-box"
        ></SearchBox>
        <CardList monsters={filterMonster} />
      </div>
    </div>
  );
};

export default App;
