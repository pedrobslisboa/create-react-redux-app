import initialState from './initialState'
import * as types from './actions/actionTypes'

const reducers = (state = initialState,action) =>{
    switch(action.type){

        // turn test in true
        case types.TEST:
            return Object.assign({},state,{
                test:!state.test
            })
        // turn test in true after async request
        case types.ASYNC_TEST:
            return Object.assign({},state,{
                asyncTest:!state.asyncTest
            })
        // reset test and assyncTest
        case types.RESET:
            return Object.assign({},state,{
                test:false,
                asyncTest:false
            })

        default:
            return state
    }
}

export default reducers