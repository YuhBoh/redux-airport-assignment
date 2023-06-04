import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

/** TODO: Add REDUCERS */
const airlines = (state=['Ryan Air', 'Spirit', 'Sun Country'], action) => {
  if (action.type === 'ADD_AIRLINE') {
    const airlineName = action.payload;


    return [...state, airlineName];

    // // 1. Make  a copy of state.
    // const copyOfState = [...state];
    // // 2. Modify the copy of state.
    // copyOfState.push(airlineName);
    // // 3. Return the modified copy of state.
    // return copyOfState;
  }
  return state
}

/** TODO: Create store */
const airlineStore = createStore(
  combineReducers({
    airlines
  }),
  applyMiddleware(
    logger
  )
)


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={airlineStore}>
        <App />
      </Provider>
    </React.StrictMode>
);