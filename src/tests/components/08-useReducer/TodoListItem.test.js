import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import {demoTodos} from '../../fixtures/demoTodos'


describe('Pruebas en el <TodoListItem />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem 
        todo = {demoTodos[0]}
        index = {0}
        handleDelete = {handleDelete}
        handleToggle = {handleToggle}
    />)

    test('debe de mostrarse correctamente', () => {     
        expect(wrapper).toMatchSnapshot()
     });

     test('debe de llamar la funcion handleDelete', () => { 
         // jest.function
         // toHaveBeenCalledWith

         wrapper.find('button').simulate('click');
         expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)

      });

      test('debe de llamar la funcion handleToggle', () => { 
        // jest.function
        // toHaveBeenCalledWith
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
     });

     test('debe de mostrar el texto correctamente', () => { 
        // contenido del parrafo
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(`1. ${ demoTodos[0].desc }`)

     });

     test('debe de tener la clase complete si el done esta en true', () => { 

        const todo = demoTodos[0]
        todo.done = true;

        const wrapper = shallow(<TodoListItem 
            todo = {todo}
        />)

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

     });



})