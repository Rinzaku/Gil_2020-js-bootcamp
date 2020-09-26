import React from 'react';
import './App.css';
import AddTodo from './features/todos/AddTodo'
import VisibleTodoList from './components/VisibleTodoList'
import TodoList from './features/todos/TodoList';
import Link from './features/filters/Link';
import Footer from './features/filters/Footer';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoList/>
      <VisibleTodoList/>
      <Link/>
      <Footer/>
    </div>
  );
}

export default App;
