// import initialState
import initialState from './initialState'
// import all types as types, so you can access all types through an object called types
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

        default:
            return state
    }
}

export default reducers