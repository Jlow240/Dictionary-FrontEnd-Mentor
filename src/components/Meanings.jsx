import React from 'react'

const Meanings = ({wordInfo}) => {
    return (
        <section>
        {
          wordInfo[0]?.meanings.map(Meaning => (
            <section >
              <h2>{Meaning?.partOfSpeech}</h2>
              <h3>Meaning</h3>
              <ul>
                {Meaning?.definitions.map(definition => (
                  <li >{definition?.definition}</li>
                ))}
              </ul>
              <h3>Synonyms</h3>
              <p>{Meaning?.synonyms[0]}</p>
            </section>
          ))
        }
      </section>
    )
}

export default Meanings