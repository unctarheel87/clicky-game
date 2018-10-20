import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ClickCards from './components/ClickCards';
import Header from './components/Header'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';
import theme from './theme';
import characters from './simpsons';

const gameChars = () => characters.filter((c, i) => i < 12).map((character) => {
  return {...character, hasClicked: false}
})

class App extends Component {
  state = {
    headerText: "Click on an image to earn points, but don't click on any more than once!",
    winText: "",
    message: 'Click an image to play',
    disableClick: false,
    error: '',
    topScore: 0,
    score: 9,
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
    //win logic
    if(this.state.score === 11) {
      this.setState({
        winText: "YOU WIN!!!",
        headerText: "",
        message: "Correct!",
        topScore: 0,
        newGame: false,
        score: 0,
        winState: true
      })
      const audio = new Audio()
      audio.src = "/simpsons.mp3"
      audio.currentTime = 10;
      audio.play()
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 10;
        this.setState({
          characters: gameChars(),
          headerText: "Click on an image to earn points, but don't click on any more than once!",
          newGame: true,
          winState: false,
          winText: "",
          message: 'Click an image to play'
        })}, 15000)
      
    } else {
      this.setState({
        error: '',
        message: 'Correct!',
        newGame: false,
        score: this.state.score + 1, 
        characters: this.state.characters.map(character => {
        if(character._id === id) {
          character.hasClicked = true
          return character
        }
          return character
        })
      })
      this.shuffleCards();
    }
  }  
  resetGame = () => {
    this.setState({ 
      error: 'shake',
      message: 'Incorrect...',
      topScore: this.state.score > this.state.topScore ? this.state.score : this.state.topScore, 
      score: 0,
      disableClick: true
    })
    setTimeout(() => {
      this.setState({
        characters: gameChars(),
        disableClick: false
      })}, 1000)
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Navbar state={this.state} />
          <Header state={this.state} />
          {!this.state.winState ? 
          <ClickCards characters={this.state.characters}
                      error={this.state.error}
                      disableClick={this.state.disableClick}
                      shuffleCards={this.shuffleCards} 
                      resetGame={this.resetGame}
                      turn={this.turn}
          /> :
          <Typography variant="h4"><p className="winGame">Enjoy the Music...</p></Typography>}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
