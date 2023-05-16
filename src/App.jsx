import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Meanings from './components/Meanings';
import Header from './components/Header';


function App() {
  const [wordInfo, setWordInfo] = useState([]);
  const [wordSearched, setWordSearched] = useState("Hello")
  const [font, setFont] = useState("Roboto")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.newWord.value)
    setWordSearched(e.target.newWord.value)
  }

  const handleChangeFont = (e) => {setFont(e.target.value)}


  useEffect(() => {
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearched}`
    axios
      .get(URL)
      .then((res) => setWordInfo(res.data))
      .catch((err) => console.log(err))

  }, [wordSearched])


  return (
    <div className="App" style={{ fontFamily: font }}>

      {/*---------------------------------------HEADER----------------------------*/}
      <Header handleChangeFont={handleChangeFont}/>

      {/*-----------------------------------INPUT DE TEXTO--------------------------------*/}
      <form onSubmit={handleSubmit}>
        <input id='newWord' type="text" placeholder='Search for any word...' />
        <button >Search</button>
      </form>

      {/*------------------------------PALABRA BUSCADA Y SU PRONUNCIACION---------------------*/}
      <section>
        <div>
          <h1>{wordInfo[0]?.word}</h1>
          <h2>{wordInfo[0]?.phonetics[2].text}</h2>
        </div>
        <div>
          PLAY SOUND
        </div>
      </section>

      {/*----------------------------SIGNIFICADO Y TIPOS DE USO------------------------*/}
      <Meanings wordInfo={wordInfo} key={wordInfo}/>
      {/*----------------------------------FUENTE--------------------------------------*/}
      <footer>
        <h4>Source</h4>
        <a href="">{wordInfo[0]?.sourceUrls}</a>
      </footer>

    </div>
  )
}

export default App
