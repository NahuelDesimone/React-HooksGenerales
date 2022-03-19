import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../hooks/useCounter"

describe('Pruebas en el useCounter', () => {

    test('debe de retornar los valores por defecto', () => { 

        const {result} = renderHook(() => useCounter()); //Con el renderHook se renderiza el hook useCounter

        expect(result.current.counter).toBe(10);
        expect(typeof(result.current.increment)).toBe('function');
        expect(typeof(result.current.decrement)).toBe('function');
        expect(typeof(result.current.reset)).toBe('function');
     })

     test('debe de tener el counter en 100', () => { 

        const {result} = renderHook(() => useCounter(100)); //Con el renderHook se renderiza el hook useCounter

        expect(result.current.counter).toBe(100);
     })


     test('debe de incrementar el counter en 1', () => { 

        const {result} = renderHook(() => useCounter(100)); //Con el renderHook se renderiza el hook useCounter
        const {increment} = result.current;

        act( () => {
            increment();
        });

        const {counter} = result.current;
        expect(counter).toBe(101);
     })

     test('debe de decrementar el counter en 1', () => { 

        const {result} = renderHook(() => useCounter(100)); //Con el renderHook se renderiza el hook useCounter
        const {decrement} = result.current;

        act( () => {
            decrement();
        });

        const {counter} = result.current;
        expect(counter).toBe(99);
     })

     test('debe de resetear el counter a su valor original', () => { 

        const {result} = renderHook(() => useCounter(100)); //Con el renderHook se renderiza el hook useCounter
        const {increment,reset} = result.current;

        act( () => {
            increment();
            increment();
            reset();
        });

        const {counter} = result.current;
        expect(counter).toBe(100);
     })

})