import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './Store/configureStore';
import App from './App';
import { getAllUsers, startUserAction } from './Actions/usersAction';

const store = ConfigureStore()
store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch(getAllUsers)
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


