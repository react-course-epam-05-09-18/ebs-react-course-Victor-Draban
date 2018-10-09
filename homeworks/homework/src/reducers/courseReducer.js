const initialState = {
        videocourses: [
                {
                        title:"Видеокурс1",
                        description: "asdfadsf23411",
                        createDate: '21.09.2013',
                        duration: 76, 
                        listOfAuthors: ['Иванов', 'Азонов'],
                },
                {
                        title:"Headerfrom",
                        description: "poinwerkqjwe",
                        createDate: '19.02.2017',
                        duration: 77, 
                        listOfAuthors: ['Азонов', 'Кин'],
                },
                {
                        title:"Header",
                        description: "mbmbnbnb,zm",
                        createDate: '28.05.2018',
                        duration: 78, 
                        listOfAuthors: ['Сидоров'],
                },
                {
                        title:"NewTitle",
                        description: "asdfadsf2341asdfasdf;lkkok1",
                        createDate: '28.05.2018',
                        duration: 99, 
                        listOfAuthors: ['Иванов', 'Петров', 'Сидоров'],
                }
        ]
}

export const reducerCourses = (state = initialState, action) => {
        switch (action.type) {
                case 'CREATE_NEW_COURSE' : {
                        console.log('CREATE_NEW_COURSE');
                        return {
                                ...state,
                                videocourses: [...state.videocourses, action.payload]
                        }
                }
                case 'DELETE_COURSE' : {
                        console.log('DELETE_COURSE');
                        return {
                                ...state,
                                videocourses : state.videocourses.filter(item => item !== state.videocourses[action.payload])
                        }
                }
                case 'UPDATE_COURSE' : {
                        console.log('UPDATE_COURSE');
                        state.videocourses[action.payload.id] = action.payload.content;
                        return {
                                ...state,
                        }
                }
                default: {
                        return state;
                }
        }
}
