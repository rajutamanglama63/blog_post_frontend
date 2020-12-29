import { combineReducers } from 'redux'
import {articleReducer} from './articles/reducers'

const rootReducer = combineReducers({
    article : articleReducer
});

export default rootReducer;