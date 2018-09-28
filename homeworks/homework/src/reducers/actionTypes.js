export const createCourse = (payload) => {
        return {
                type : 'CREATE_NEW_COURSE',
                payload
        }
}

export const deleteCourse = (payload) => {
        return {
                type : 'DELETE_COURSE',
                payload
        }
}

export const saveLogin = (payload) => {
        return {
                type : 'SAVE_LOGIN',
                payload
        }
}
