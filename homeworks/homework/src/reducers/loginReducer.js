import * as R  from 'ramda';

const initialState = {
        login: 'viktor' // put empty after
}

const loginLens = R.lensProp('login');

export const loginReducer = (state = initialState, action) => {
        switch (action.type) {
                case 'SAVE_LOGIN' : {
                        return {
                                ...R.set(loginLens, action.payload, state)
                        }

                }
                default: {
                        return state;
                }
        }
}