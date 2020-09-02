import React, {Component} from 'react';
import Header from './Header'
import Player from './Player'
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }
  
  /* Using map returns a new array, so it keeps your data immutable.*/
  handleScoreChange = (i, delta) => {
    this.setState( prevState => ({
      score: prevState.players.map((player, index) => {
        if (i === index) {
          player.score += delta
        }
      return player
      }),
    }))
  }

  //player id counter
  prevPlayerId = 4;
  
  handleAddPlayer = (name) => {
    let newPlayer = {
      name,
      score: 0,
      id: this.prevPlayerId += 1
    };
    this.setState( prevState => ({
      players: prevState.players.concat(newPlayer)
    }));
  }


  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index = {index}
            changeScore = {this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}
        <AddPlayerForm
          addPlayer={this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default App;



