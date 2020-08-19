import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import ClassComp from './pages/ClassComp';
import TodoList from './pages/TodoList';
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/cc" component={ClassComp}/>
      <Route path="/todolist" component={TodoList}/>
    </Switch>
  );
}