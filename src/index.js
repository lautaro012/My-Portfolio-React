import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contactme from './component/contactme/contactme';

ReactDOM.render(
  <React.StrictMode>
 
   {/*<Router>
      <Routes>
        <Route exact path='/' element={<App/>}>
          <App/>
        </Route>
        <Route path='/portfolio'>
          <Contactme/>
        </Route> 
      </Routes>
    </Router> 
    */
  }
  <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
