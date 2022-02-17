import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHook = () => {

  const {counter, increment} = useCounter(1);


  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {author,quote} = !!data && data[0]; //Si data no es null entonces extrae la posicion 0 de data

  return (
    <div>
      <h1>Breaking Bad quotes </h1>
      <hr />

      {
        loading
          ?
          (
            <div className='alert alert-info text-center'>
              Loading...
            </div>
          )
          :
          (
            <blockquote className='blockquote text-end'>
              <p className='mb-0'> {quote}</p>
              <br></br>
              <footer className='blockquote-footer'>{author}</footer>
            </blockquote>
          )
      }

      <button className='btn btn-primary' onClick={increment}>
        Siguiente quote
      </button>
    </div>
  )
}
