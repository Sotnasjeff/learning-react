import { useState, useCallback, useEffect } from 'react'
import './App.css'
import StartScreen from './components/StartScreen'
import { wordList } from './data/words'
import Game from './components/Game'
import End from './components/End'

const stage = [
  {id: 1, name:"start"},
  {id: 2, name:"game"},
  {id: 3, name:"end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stage[0].name)
  const [words] = useState(wordList)
  

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const wordPicked = words[category][Math.floor(Math.random() * words[category].length)]

    return { wordPicked, category }
  }, [words])

  const startGame = useCallback(() => {
    clearLetterStates()
    const { wordPicked, category } = pickWordAndCategory()

    let wordLetters = wordPicked.toLowerCase().split("")

    setPickedWord(wordPicked)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stage[1].name)
  }, [pickWordAndCategory])

  const verifyLetter = (letter) => {
    letter = letter.toLowerCase()

    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)){
      return 
    }

    if(letters.includes(letter)){
      setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, letter])
    } else {
      setWrongLetters((actualWrongLetters) => [...actualWrongLetters, letter])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }

  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if(guesses === 0){
      clearLetterStates()
      setGameStage(stage[2].name)
    }

  }, [guesses])

  useEffect(() => {
    if (letters.length === 0) return; 
    const uniqueLetters = [...new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => (actualScore += 100))
      setGuesses(3)
      startGame()
    }

  }, [guessedLetters, letters, startGame])

  const retry = () => {
    setScore(0)
    setGuesses(3)
    setGameStage(stage[0].name)
  }
  console.log(gameStage)
  return (
    <>
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && 
        (<Game 
           verifyLetter={verifyLetter} 
           pickedWord={pickedWord} 
           pickedCategory={pickedCategory} 
           letters= {letters} 
           guessedLetters={guessedLetters} 
           wrongLetters={wrongLetters} 
           guesses={guesses}
           score = {score}
        />)}
      {gameStage === 'end' && <End retry={retry} score={score}/>}
    </>
  )
}

export default App
