import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const initialRef = useRef();


    const handleClick = () => {
        initialRef.current.select();
        console.log(initialRef);
    }
  return (
    <div>
        <h1>FocusScreen</h1>
        <hr />
        
        <input
            ref={initialRef}
            className='form-control'
            placeholder='Su nombre'
        />

        <button 
            className='btn btn-outline-primary mt-5'
            onClick={handleClick}
        >
            Focus
        </button>
        
    </div>
  )
}
