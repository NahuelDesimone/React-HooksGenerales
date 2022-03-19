import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: "Fernando",
        email: "fernando@gmail.com"
    };

    test('debe de regresar un formulario por defecto', () => { 

        const {result} = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, resetValues] = result.current

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof resetValues).toBe('function');

     })

    test('debe de cambiar el valor del formulario (cambiar name)', () => { 

        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange, resetValues] = result.current
        
        act (() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });
        });

        const [values] = result.current
        expect(values).toEqual({...initialForm, name: 'Melissa'});


     })

    test('debe de re-establecer el formulario con RESET', () => { 
        const {result} = renderHook(() => useForm(initialForm));
        const [,handleInputChange, resetValues] = result.current

        act (() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });

            resetValues();
        });

        const [values] = result.current
        expect(values).toEqual(initialForm);
    
     })

})