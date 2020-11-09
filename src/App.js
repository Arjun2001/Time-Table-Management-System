import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import CreateNew from './components/CreateNew';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="credentials">
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
    </div>
    <div className="mainP">
      <Route path='/home' component={Home} />
      <Route path='/createnew' component={CreateNew} />
    </div>
    </div>
  );
}

export default App;
