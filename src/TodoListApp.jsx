import './todolist.css'
// import Button from './components/Button';
// import TodoItemEmpty from './components/TodoItemEmpty.jsx';
import TodoHeader from './components/TodoHeader.jsx';
// import Checkbox from './components/Checkbox.jsx';
import TodoAdder from './components/TodoAdder.jsx';
// import TodoItem from './components/TodoItem.jsx';
import TodoList from './components/TodoList.jsx';
import { useState } from 'react';

class Todo{
    constructor(text){
        this.id = Date.now();     // 할 일 고유 id, new Data().get
        this.text = text;         // 할 일 내용
        this.isCompleted = false; // 완료 여부: 기본값 false
    }
}

function TodoListApp(){
    const [todos, setTodos] = useState([]); // 할 일 목록: 기본값 빈 리스트
    const addTodo = (text) => [
      
    ];
    return(
        <div className="todo">
            <TodoHeader/>
            <TodoAdder/>
            <TodoList/>
        </div>
    )
}

export default TodoListApp;