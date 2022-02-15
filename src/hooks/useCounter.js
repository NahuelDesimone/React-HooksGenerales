import { useState } from "react"

export const useCounter = (initialState = 10) => {

    const [state, setState] = useState(initialState); // 10

    const increment = (factor = 2) => {//El factor es cada 
        setState(state + factor);
    }

    const decrement = (factor = 2) => { //El factor es cada cuanto se va a decrementar
        setState(state - factor);
    }

    const reset = () => {
        setState(initialState);
    }

    return{
        state,
        increment,
        decrement,
        reset
    }
}
