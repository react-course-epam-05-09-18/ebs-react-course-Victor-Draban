const initialState = {
        login: 'viktor' // put empty after
}

export const loginReducer = (state = initialState, action) => {
        switch (action.type) {
                case 'SAVE_LOGIN' : {
                        return {
                                ...state,
                                login : action.payload
                        }

                }
                default: {
                        return state;
                }
        }
}