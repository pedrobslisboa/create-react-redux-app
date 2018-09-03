import initialState from './initialState'
import * as types from './actions/actionTypes'

const reducers = (state = initialState,action)=>{
    switch(action.tipe){

        // turn test in true
        case types.TEST:
            return Object.assign({},state,{
                test:true
            })

        default:
            return state
    }
}

export default reducers