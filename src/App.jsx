import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [wordInfo, setWordInfo] = useState([]);
  const [wordSearched, setWordSearched] = useState("Hello")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.newWord.value)
    setWordSearched(e.target.newWord.value)
  }
  console.log(wordInfo)
  useEffect(() => {
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearched}`
    axios
      .get(URL)
      .then((res) => setWordInfo(res.data))
      .catch((err) => console.log(err))

  }, [wordSearched])


  return (
    <div className="App">
      <header>
        <img src="/logo.svg" alt="" />
        <div>
          <select name='fonts' id='fonts'>
            <option value="serif">Serif</option>
            <option value="Roboto">Roboto</option>
            <option value="Quicksand">Quicksand</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Lato">Lato</option>
          </select>
          <button></button>
        </div>
      </header>
      <nav>
        <form onSubmit={handleSubmit}>
          <input id='newWord' type="text" placeholder='Search for any word...' />
          <button >Search</button>
        </form>
      </nav>

      <section>
        <div>
          <h1>{wordInfo[0]?.word}</h1>
          <h2>{wordInfo[0]?.phonetics[2].text}</h2>
        </div>
        <div>PLAY BTN</div>
      </section>
      <section>
        {
          wordInfo[0]?.meanings.map(Meaning => (
            <section>     
              <h2>{Meaning?.partOfSpeech}</h2>
              <h3>Meaning</h3>
              <ul>
              {Meaning?.definitions.map(definition => (
                <li>{definition?.definition}</li>
              ))}
              </ul>
              <h3>Synonyms</h3>
              <p>{Meaning?.synonyms[0]}</p>
              </section>
          ))
        }
      </section>

      <footer>
        <h4>Source</h4>
        <a href="">{wordInfo[0]?.sourceUrls}</a>
      </footer>

    </div>
  )
}

export default App
