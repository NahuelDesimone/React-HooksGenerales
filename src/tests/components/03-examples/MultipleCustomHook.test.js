import { shallow } from "enzyme"
import React from "react"
import { MultipleCustomHook } from "../../../components/03-examples/MultipleCustomHook"
import { useCounter } from "../../../hooks/useCounter"
import { useFetch } from "../../../hooks/useFetch"

jest.mock("../../../hooks/useFetch")
jest.mock("../../../hooks/useCounter")

describe('Pruebas en MultipleCustomHook', () => {

    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
    })


    test('debe de mostrarse correcamente', () => { 

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHook />)

        expect(wrapper).toMatchSnapshot();

     })

     test('debe de mostrar la informacion', () => { 

        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHook />)

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Fernando')

      })
})