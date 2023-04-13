import React, { useState, useEffect, useRef } from 'react';
import { useTodoLayerValue } from './context/TodoContext';
import TodoList from './components/TodoList';
import './App.css';
//dispatch: Action fırlatan metod.

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    //console.log(content);
    event.preventDefault();

    if(!content && content.length < 1) return;

    const newTodo = {
       id: Math.floor(Math.random() * 428374324),
       content,
       isCompleted: false
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    //Bir action create etmem gerekiyor. Bu yüzden dispatch kullanıyorum.
    //Bu dispatch ettiğim action da reducer'i yakalayacak.
    setContent(' ');
  };

  //console.log(todos);
  
  return ( 
   <div className='container'>
      <form onSubmit={handleSubmit} className="todo-form">
          <input 
            type="text"
            className="todo-input"
            onChange={(event) => setContent(event.target.value)}
            value={content} 
            ref={inputRef}
          />
          <button className="todo-button">
            Ekle
          </button>
      </form>
      {/* Todo Listesi */}
      <TodoList todos={todos} />
   </div>
   
  )
};

export default App;