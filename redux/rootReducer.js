import {combineReducers} from 'redux'
import countryReducer from './countries/countryReducer'
import sortReducer from './Sort/sortReducer'
const rootReducer = combineReducers({
    sort:sortReducer,
    country:countryReducer
})

export default rootReducer;
