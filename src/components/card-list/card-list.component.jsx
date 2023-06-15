import "./card-list.style.css";
import "./card.style.css";
import Card from "../card/card.component";

const CardList = (props) => {
  const {monsters} = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster}></Card>
      ))}
    </div>
  );
};

export default CardList;
