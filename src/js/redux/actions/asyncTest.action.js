// import all types as types, so you can access all types through an object called types
import * as types from './actionTypes'

// here you can see an example of an async change on redux state. You can test here an ajax request for example
const changeAsyncTest = () => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch({
                type:types.ASYNC_TEST
            })
        },2000)
    }
}

export default changeAsyncTest