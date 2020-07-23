import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {
    const el = todos.map( (item) => {
        const { id, ...itemProps  } = item;
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem {...itemProps}/>
            </li>
        );
    } )
return (
    <ul className="list-group todo-list">
        { el }
    </ul>
    );
};

export default TodoList;