import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../05-useLayoutEffect/layout.css'

export const Layout = () => {

    const { counter, increment } = useCounter(1);


    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0]; //Si data no es null entonces extrae la posicion 0 de data

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {

        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect </h1>
            <hr />

            <blockquote className='blockquote text-end'>
                <p className='mb-0'
                    ref={pTag}>
                    {quote}
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize,null,3)}
            </pre>

            <button className='btn btn-primary' onClick={increment}>
                Siguiente quote
            </button>
        </div>
    )
}
