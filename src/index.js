import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ConfigureStore from "./Store/ConfigureStore"
import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom';
import "./App.css"

const store=  ConfigureStore()

store.subscribe(()=>{
  console.log("subscribe", store.getState());
})


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
      <App/>
  </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);


