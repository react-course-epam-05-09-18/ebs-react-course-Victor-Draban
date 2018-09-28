const initialState = {
        videocourses: [
                {
                        title:"Видеокурс 1",
                        createDate:"yes yes yes",
                        duration: 76, 
                        listOfAuthors:"author1 authorEast authorSouth",
                },
                {
                        title:"Header from ...",
                        createDate:"yes yes",
                        duration: 77, 
                        listOfAuthors:"author1 authorEast",
                },
                {
                        title:"Header ...",
                        createDate:"yes",
                        duration: 78, 
                        listOfAuthors:"author1",
                },
                {
                        title:"...",
                        createDate:"...",
                        duration: 99, 
                        listOfAuthors:"...",
                }
        ]
}

export const reducerCourses = (state = initialState, action) => {
        switch (action.type) {
                case 'CREATE_NEW_COURSE' : {
                        console.log('CREATE_NEW_COURSE');
                        return {
                                ...state,
                                videocourses: state.videocourses.concat(action.payload)
                        }
                }
                case 'DELETE_COURSE' : {
                        console.log('DELETE_COURSE');
                        return {
                                ...state,
                                videocourses : state.videocourses.filter(item => item !== state.videocourses[action.payload])
                        }
                }
                default: {
                        return state;
                }
        }
}