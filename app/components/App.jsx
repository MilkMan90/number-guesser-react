import React, { Component } from 'react'
import { render } from 'react-dom';
import UserInput from './UserInput'
import {GuessFeedback} from './GuessFeedback'

class App extends Component {
  constructor() {
    super()
    this.state = {
      min: 0,
      max: 100,
      lastGuess: '',
      randomNumber: null,
      gameStatus: 'new'
    };
  }
  componentDidMount(){
    this.generateRandomNumber();
  }
  generateRandomNumber(){
    this.setState({randomNumber: Math.floor(Math.random() * (+this.state.max - +this.state.min + 1)) + +this.state.min})
  }
  evaluateGuess(guess){

    this.setState({lastGuess: guess})

    if(this.checkValidGuess(guess)){
      if ( guess > this.state.randomNumber ) {
          this.setState({gameStatus: 'lower'})
        } else if ( guess < this.state.randomNumber) {
          this.setState({gameStatus: 'higher'})
        } else {
          this.setState({gameStatus: 'won', lastGuess: ''})
          this.increaseMinMax();
          this.generateRandomNumber();
        }
    } else{
      this.setState({gameStatus: 'invalid'})
    }
  }
  checkValidGuess(guess){
    return (guess < this.state.max && guess > this.state.min)
  }
  setNewRange(min, max){
    this.setState({min: min, max: max, gameStatus:'new'}, ()=>{this.resetGame()})
  }
  increaseMinMax(){
    this.setState({min: +this.state.min-10, max: +this.state.max+10})
  }
  resetGame(){
    this.generateRandomNumber();
    this.setState({gameStatus: 'new', lastGuess: ''})
  }
  render() {
    console.log(this.state.randomNumber);
    console.log(this.state.min)
    console.log(this.state.max);
    return(
      <div className = 'app-container'>
        <h1>Number Guesser</h1>

        <GuessFeedback lastGuess = {this.state.lastGuess} gameStatus = {this.state.gameStatus} min = {this.state.min} max = {this.state.max}/>
        <UserInput className = 'user-input-field' min = {this.state.min} max = {this.state.max} handleSubmit={this.evaluateGuess.bind(this)} handleNewRange = {this.setNewRange.bind(this)} newGame = {this.resetGame.bind(this)}/>

      </div>
    )
  }
}

render( <App />, document.getElementById('application'))

module.exports = App
