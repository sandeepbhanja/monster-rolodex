import {Component} from 'react';

class Card extends Component {
    render(){
        const {monster} = this.props;
        return (
          <div className="card-container" key={monster.id}>
            <img
              src={`https://robohash.org/${monster.name}?set=set2&size=180x180`}
              alt={monster.name}
            />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>
        );
    }
}

export default Card;