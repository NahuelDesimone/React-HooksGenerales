import { shallow } from "enzyme"
import { HookApp } from "../HookApp"

describe('Pruebas en el archivo HookApp.test.js', () => {

    test('se prueba el snapshot', () => { 

        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();

     });
})