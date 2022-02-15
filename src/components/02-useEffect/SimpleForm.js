import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    

    const { name, email } = formState;

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    //Se ejecuta solamente cuando cambia el formState
    useEffect(() => {
        // console.log('formState cambio')
    },[formState])

    //Se ejecuta solamente cuando cambia el email
    useEffect(() => {
        // console.log('email cambio')
    },[email])


    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>

                <input
                    type="text"
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}></input>
            </div>

            <div className='form-group'>

                <input
                    type="text"
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}></input>
            </div>

            { (name === '123') && <Message />}

        </>
    )
}
