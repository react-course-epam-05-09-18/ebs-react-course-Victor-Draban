import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { loginReducer } from './loginReducer';
import { saveLogin } from '../reducers/actionTypes';

const initialState = {
        login: 'viktor'
}

configure({ adapter: new Adapter() });

describe('Login Reducers', () => {
        it('properly captures a dispatch to change authenticated state', () => {
          expect(loginReducer(initialState, saveLogin('anton')))
            .toEqual({ login: 'anton' });
        });
})