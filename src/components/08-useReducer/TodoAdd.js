import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {

    const [{ descripcion }, handleInputChange, resetValues] = useForm({
        descripcion: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();


        if (descripcion.trim().length <= 1) {
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            descripcion: descripcion,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        handleAddTodo( newTodo );
        resetValues()
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='descripcion'
                    placeholder='Aprender...'
                    autoComplete='off'
                    value={descripcion}
                    className='form-control'
                    onChange={handleInputChange}
                />
                <button className='btn btn-outline-primary mt-1 btn-block' type='submit'>
                    Agregar
                </button>
            </form>
        </>
    )
}
