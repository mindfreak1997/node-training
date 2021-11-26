const initialState = ''

export const adminReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'adminName': {
            return action.payload
        }
        default: {
            return state
        }
    }
}