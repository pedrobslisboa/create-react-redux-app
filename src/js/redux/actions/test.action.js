// import all types as types, so you can access all types through an object called types
import * as types from './actionTypes'

// here you can see an example of a change on redux state.
const changeTest = () => {
    return {
        type: types.TEST
    }
}

export default changeTest