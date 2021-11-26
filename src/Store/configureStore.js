import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'


const ConfigureStore = () => {
    const store = createStore(combineReducers({
        admin: adminReducers,
        users: userReducer
    }), applyMiddleware(thunk))
    return store
}
export default ConfigureStore