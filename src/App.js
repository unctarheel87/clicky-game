import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ClickCards from './components/ClickCards';
import Header from './components/Header'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';
import characters from './simpsons';

const gameChars = () => characters.filter((c, i) => i < 12).map((character) => {
  return {...character, hasClicked: false}
})

class App extends Component {
  state = {
    message: 'Click an image to play',
    error: '',
    topScore: 0,
    score: 0,
    characters: gameChars()
  }
  shuffleCards = () => {
    const charactersCopy = this.state.characters.slice();
    let currentIndex = charactersCopy.length;
    let randIndex, tempValue
    while (0 !== currentIndex) {
      randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      //swap
      tempValue = charactersCopy[currentIndex];
      charactersCopy[currentIndex] = charactersCopy[randIndex];
      charactersCopy[randIndex] = tempValue;
    }
    this.setState({ characters: charactersCopy })
  }
  turn = (id) => {
    this.setState({
      message: 'Correct!',
      score: this.state.score + 1, 
      characters: this.state.characters.map(character => {
      if(character._id === id) {
        character.hasClicked = true
        return character
      }
        return character
      })
    })
  }  
  resetGame = () => {
    this.setState({ 
      error: 'shake',
      message: 'Incorrect...',
      topScore: this.state.score > this.state.topScore ? this.state.score : this.state.topScore, 
      score: 0, 
      characters: gameChars() 
    })
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Navbar state={this.state} />
          <Header />
          <ClickCards characters={this.state.characters}
                      error={this.state.error}
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
