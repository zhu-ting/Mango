import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Group02(){
  return <h1>Group02</h1>
}

function Group03(){
  return <h1>Group03</h1>
}

ReactDOM.render(
   <BrowserRouter>
     <div>
       <ul>
         <li><Link to='/'>Group01</Link></li>
         <li><Link to='/Group02'>Group02</Link></li>
         <li><Link to='/Group03'>Group03</Link></li>
       </ul>
       <Route path='/' exact component={App}></Route>
       <Route path='/Group02' component={Group02}></Route>
       <Route path='/Group03' component={Group03}></Route>
     </div>
   </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();
