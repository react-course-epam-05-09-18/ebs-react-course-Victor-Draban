import * as R  from 'ramda';

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

const videocoursesLens = R.lensProp('videocourses');
const searchById = R.propEq('id');

export const reducerCourses = (state = initialState, action) => {
        switch (action.type) {
                case 'CREATE_NEW_COURSE' : {
                        console.log('CREATE_NEW_COURSE');
                        return {
                                ...R.set(videocoursesLens, R.append(action.payload, state.videocourses), state)
                        }
                }
                case 'DELETE_COURSE' : {
                        console.log('DELETE_COURSE');
                        return {
                                ...R.set(videocoursesLens, state.videocourses.filter(item => !searchById(action.payload, item)), state)
                        }
                }
                case 'UPDATE_COURSE' : {
                        console.log('UPDATE_COURSE');
                        const index = state.videocourses.findIndex(searchById(action.payload.id));
                        return {
                                ...R.set(videocoursesLens, R.update(index, action.payload.content, state.videocourses), state)
                        }
                }
                default: {
                        return state;
                }
        }
}
