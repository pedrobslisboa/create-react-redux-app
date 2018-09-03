import {createStore,applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import initialState from './initialState'
import thunk from 'redux-thunk'

// compose for REDUX Dev Tools 
// FOR THIS PLEASE INSTALL REDUX DEV TOOL EXTENSION
// compose para REDUX Dev Tools 
// PARA ISSO, POR FAVOR INSTALE A EXTENSÃO REDUX DEV TOOL
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

// enhancer for Redux thunk of async aplication, here you can add how many middlewares you want
// enhancer para Redux thunk em aplicação async, aqui você pode aplicar quantos middlewares quiser
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

// create the store
// criação da store
const store = createStore(reducers, initialState, enhancer)

export default store