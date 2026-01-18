import { applyMiddleware, createStore } from 'redux'
import reducers from './reducers/index'
import { thunk } from 'redux-thunk'


//! У классического Redux функция createStore() выглядит так:
{/*
createStore(
  reducer,         // обязательно
  preloadedState?, // опционально
  enhancer?(middleware)        // опционально
)
 */}

// * N3 here we will store the data, and then you access that specific data through every single component inside of our application. To do this we have to wrap(обернуть) out component inside known as Provider.
const store = createStore(
    reducers,
    {}, 
    applyMiddleware(thunk)
)

export default store
