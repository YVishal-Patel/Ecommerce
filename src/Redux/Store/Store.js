import { applyMiddleware, createStore }    from "redux";
import allReducer from "../Reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig,allReducer )

   export let store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)))
  export  let persistor = persistStore(store)
  

//   export let store = createStore(
//     persistedReducer,
// );
// export let persistor = persistStore(store);
// const store = createStore(
    // composeWithDevTools(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // )

// export default store;   