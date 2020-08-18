import {combineReducers} from 'redux'
import UserReducer from './reduceruser'
import AnotherUserReducer from './reduceranotheruser'
import FriendLikes from './frndlikes'

const allReducers = combineReducers({
    users:UserReducer,
    anotheruserreducer:AnotherUserReducer,
    friendlikes: FriendLikes
})

export default allReducers;