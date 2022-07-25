import React from 'react'

const  QuoteBox = ({randomusuario, randomcolores, getRandomAll2}) => {

  const colorramdon = {
    color:randomcolores
  }
  const bagraunramdon = {
    backgroundColor:randomcolores
  }
  return (
    <article style={colorramdon}>
        <div className='author_art'>
            <i class="fa-solid fa-quote-left"></i>
            <h2>{randomusuario.quote}</h2>
        </div>
        <p>{randomusuario.author} </p>
            <div className='author'>
                <button style={bagraunramdon} onClick={getRandomAll2}>&#62;</button>
            </div>
            
    </article>
    
  )
}

export default QuoteBox