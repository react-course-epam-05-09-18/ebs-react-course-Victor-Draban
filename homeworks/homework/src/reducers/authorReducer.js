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

export const authorReducer = (state = initialState, action) => {
        switch (action.type) {
                default: {
                        return state;
                }
        }
}