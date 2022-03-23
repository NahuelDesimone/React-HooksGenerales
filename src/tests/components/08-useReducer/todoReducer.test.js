import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {

    test('debe de retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    })

    test('debe de agregar un TODO', () => {

        const nuevoTodo = {
            id: 3,
            desc: 'Aprender Python',
            done: false
        }

        const action = {
            type: 'add',
            payload: nuevoTodo
        }

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, nuevoTodo]);
    })

    test('debe de borrar un TODO', () => { 
        //action.payload es el id del todo

        const actionDelete = {
            type: 'delete',
            payload: 2
        }

        const state = todoReducer(demoTodos, actionDelete);

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[0]]);

     })

     test('debe de cambiar el valor de un TODO (toogle)', () => { 
        //action.payload es el id del todo

        const actionToggle = {
            type: 'toggle',
            payload: 2
        }

        const state = todoReducer(demoTodos, actionToggle);
        // const [{done}] = state.filter(todo => todo.id === 2)

        expect(state[1].done).toBe(true);
        expect([state[0]]).toEqual([demoTodos[0]]);

     })
})