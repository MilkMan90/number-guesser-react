import React, { Component } from 'react';

export default class UserInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userGuess: '',
      min: '',
      max: ''
    };
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(this.state.userGuess)
    this.setState({userGuess: ''})
  }
  changeRange(e){
    e.preventDefault();
    this.props.handleNewRange(this.state.min, this.state.max)
    this.setState({min:'', max:''})
  }
  render() {
    return(
      <div>
      <input type='number' min={this.props.min} max={this.props.max} value ={this.state.userGuess} className = 'user-input-field' placeholder='Make Your Guess' onChange={(e)=> this.setState({userGuess: e.target.value})}/>
      <button className = 'user-input-button' onClick={this.handleSubmit.bind(this)}>Submit</button>
      <button className = 'clear-button' onClick={(e) => this.setState({userGuess: ''})}>Clear</button>
      <button className = 'new-game-button' onClick={this.props.newGame}>Reset Game</button>
        <div className = 'min-max-wrapper'>
          <p className = 'current-range'> Current Range: {this.props.min} - {this.props.max}</p>
          <input type='number' value ={this.state.min} className = 'min-input-field' placeholder='Min' onChange={(e)=> this.setState({min: e.target.value})}/>
          <input type='number' value ={this.state.max} className = 'max-input-field' placeholder='Max' onChange={(e)=> this.setState({max: e.target.value})}/>
          <button className = 'set-range-button' onClick={this.changeRange.bind(this)}>Set New Range</button>
        </div>
      </div>
    )
  }
}
