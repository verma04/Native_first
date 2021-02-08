// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer from "./reducers";

// const initialState = {};
// const middlewares = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middlewares))
// );

// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

// const composeEnhancers = composeWithDevTools({
//   // options like actionSanitizer, stateSanitizer
// });
// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));

// export default store;


// import { compose, createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import reducers from '../reducers';

// const middleware = [thunk];
// // eslint-disable-next-line no-underscore-dangle
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default store(reducers, composeEnhancers(applyMiddleware(...middleware)));


import { createStore, applyMiddleware  ,compose } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
const middlewares = [thunk];
import thunk from "redux-thunk";
import rootReducer from "./reducers";


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
    
    const enhancer =  composeWithDevTools(
      applyMiddleware(...middlewares),
      // other store enhancers if any
    );
    const store = createStore(rootReducer, enhancer);

export default  store;