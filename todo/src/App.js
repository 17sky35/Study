import logo from './logo.svg';
import React,{useState} from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList],input)
  }

  return (
    <div>
      <input value={input} onChange={(event) => setInput(event.target.value)} type='text'/>
      <button onClick={addItem}>추가</button>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
