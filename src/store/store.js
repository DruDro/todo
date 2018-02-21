import { createStore, combineReducers } from 'redux';

const signin = (state = {loggedIn: false}, action) => {
  switch (action.type) {
    case 'LOG_IN': {
      const loggedIn = { loggedIn: true, user: action.user };
      return loggedIn;
    }
    case 'LOG_OUT': {
      const loggedIn = { loggedIn: false };
      return loggedIn;
    }
  }
  return state;
};

const reducers = combineReducers({ signin });

export const store = createStore(reducers);

