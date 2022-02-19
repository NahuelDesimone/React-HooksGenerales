import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const estaMontado = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            estaMontado.current = false;
        }
    }, []);


    useEffect(() => {

        setState({
            ...state,
            loading: true
        })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (estaMontado.current) {
                    setTimeout(() => {
                        setState({
                            ...state,
                            loading: false,
                            error: null,
                            data
                        })
                    }, 1000)
                }
                else{
                    console.log("SetState no se llamo");
                }
            })
    }, [url])

    return state;
}
