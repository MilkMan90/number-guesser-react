import React from 'react'

export const GuessFeedback = ({lastGuess, gameStatus, min, max}) => {
  let feedback;

  console.log(lastGuess)

  switch(gameStatus){
    case 'new':
    feedback = 'Its a new game!'
    break
    case 'lower':
    feedback = 'Guess Lower'
    break
    case 'higher':
    feedback = 'Guess Higher'
    break
    case 'won':
    feedback = 'You WON! Its a new game - but harder this time'
    break
    case 'invalid':
    feedback = `INVALID GUESS - Please make a guess between ${min} and ${max}`
    break
    default :
    feedback = test;
  }
    let lastGuessInfo

    if(lastGuess){
    lastGuessInfo = (
              <div>
              <div> Your Last Guess Was: </div>
              <p className = 'last-guess'>{lastGuess}</p>
              </div>)
    }
    return (
    <div>
      {lastGuessInfo}
      <p>{feedback}</p>
    </div>
  )
}
