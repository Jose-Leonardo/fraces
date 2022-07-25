import { useState } from 'react'
import './App.css'
import QuoteBox from "./components/QuoteBox"
import quotes from './json/quotes.json'
const colors = ["#ff6961","#77dd77 ","#fdfd96 ","#84b6f4 ","#fdcae1 ","#000"]

function App() {

  const getRandomElement = arr => {
    const random = Math.floor(Math.random() * arr.length)
    return arr[random]
  }
  let userRandom = getRandomElement(quotes)
  let colorRandom = getRandomElement(colors)
  
  const [randomUser, setRadomUser] = useState(userRandom)
  const [randomcolor, setRandomcolor] = useState(colorRandom)

  const bagraunramdon = {
    backgroundColor: randomcolor
  }
  const getRandomAll = () => {
    userRandom = getRandomElement(quotes)
    colorRandom = getRandomElement(colors)

    setRadomUser(userRandom)
    setRandomcolor(colorRandom)
  }
  return (
    <div className="App" style={bagraunramdon}>
      <QuoteBox
      randomusuario={randomUser} 
      randomcolores={randomcolor}
      getRandomAll2={getRandomAll}
      /> 
    </div>
  )
}

export default App
