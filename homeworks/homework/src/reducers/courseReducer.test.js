import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { reducerCourses } from './courseReducer';

const initialState = {
        videocourses: [
                {
                        id: 1,
                        title:"Видеокурс1",
                        description: "asdfadsf23411",
                        createDate: '21.09.2013',
                        duration: 76, 
                        listOfAuthors: ['Иванов', 'Азонов'],
                },
                {
                        id: 2,
                        title:"Headerfrom",
                        description: "poinwerkqjwe",
                        createDate: '19.02.2017',
                        duration: 77, 
                        listOfAuthors: ['Азонов', 'Кин'],
                },
                {
                        id: 3,
                        title:"Header",
                        description: "mbmbnbnb,zm",
                        createDate: '28.05.2018',
                        duration: 78, 
                        listOfAuthors: ['Сидоров'],
                },
                {
                        id: 4,
                        title:"NewTitle",
                        description: "asdfadsf2341asdfasdf;lkkok1",
                        createDate: '28.05.2018',
                        duration: 99, 
                        listOfAuthors: ['Иванов', 'Петров', 'Сидоров'],
                }
        ]
}

configure({ adapter: new Adapter() });

describe('Videocourses Reducers', () => {
        it('properly captures a dispatch to change videocourses state', () => {
                expect(reducerCourses(initialState, "pass_param"))
                .toEqual({ videocourses : initialState.videocourses });
        });
})