import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import './css/Common.css';

//Router
import './App.css';
import Home from './path/Home';
import ComponentPage from './path/ComponentPage'



function App() {
  return (
    <div>
      <ul className="router_list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to ="/ComponentPage">ComponentPage</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/ComponentPage" component={ComponentPage} />
    </div>
  );
}

export default App;