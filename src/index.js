import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { createStore } from 'redux';

const defaultState = { checked: false };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, checked: !state.checked };
  }
  return state;
};

const store = createStore(reducer);

const App = () => {
  return (
    <h1>Hello, Scrumdog!</h1>
  );
};


ReactDOM.render((
  <App />
), document.getElementById('root'));
