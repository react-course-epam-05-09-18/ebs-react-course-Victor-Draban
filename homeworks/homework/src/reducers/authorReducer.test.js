import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { authorReducer } from './authorReducer';

const initialState = {
        autors: [
                'Иванов',
                'Петров',
                'Сидоров',
                'Пушкин',
                'Лермонтов',
                'Азонов',
                'Кин',
        ]
}

configure({ adapter: new Adapter() });

describe('Author Reducers', () => {
        it('properly captures a dispatch to change author state', () => {
                expect(authorReducer(initialState, "pass_param"))
                .toEqual({ autors: [
                        'Иванов',
                        'Петров',
                        'Сидоров',
                        'Пушкин',
                        'Лермонтов',
                        'Азонов',
                        'Кин',
                ] });
        });
})