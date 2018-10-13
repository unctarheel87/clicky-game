import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ClickCards from './components/ClickCards';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';
import characters from './simpsons';

class App extends Component {
  state = {
    username: 'John',
    score: 0,
    characters: characters.map((character, i) => {
      return {...character, id: i, hasClicked: false}
    })
  }
  shuffleCards = () => {
    const charactersCopy = this.state.characters.slice();
    let currentIndex = charactersCopy.length;
    let randIndex, tempValue
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      tempValue = charactersCopy[currentIndex];
      charactersCopy[currentIndex] = charactersCopy[randIndex];
      charactersCopy[randIndex] = tempValue;
    }
    this.setState({ characters: charactersCopy })
  }
  turn = (id) => {
    this.setState({characters: this.state.characters.map((character, i) => {
      if(i === id) {
        character.hasClicked = true
        return character
      }
        return character
      }), score: this.state.score + 1 })
  }
  resetGame = () => {
    this.setState({ score: 0, characters })
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Navbar state={this.state} />
          <ClickCards characters={this.state.characters} 
                      shuffleCards={this.shuffleCards} 
                      resetGame={this.resetGame}
                      turn={this.turn}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
