import { shallow } from "enzyme"
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd"

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn()

    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo={handleAddTodo}
        />
    
        )

    test('debde de mostrarse correctamente', () => { 

        expect(wrapper).toMatchSnapshot();
     })

     test('no debe de llamar handleAddTodo', () => { 

        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
      })

      test('debe de llamar la funcion handleAddTodo', () => { 
          // simular una manipulacion en el input 

          const value = 'Aprender React';

          const handleInputChange = wrapper.find('input').prop('onChange');
          const formSubmit = wrapper.find('form').prop('onSubmit')

          handleInputChange({
              target: {
                  name: 'description',
                  value: value
              }
            });

          formSubmit({preventDefault(){}});
          expect(handleAddTodo).toHaveBeenCalled();
          expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
       })
})