import authReducer from './reducers/AuthReducer'
import ProjectReducer from './reducers/projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer} from 'react-redux-firebase'

const rootReducer= combineReducers({
    auth:  authReducer,
    project: ProjectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;