import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({
    todos, onDeleted, onToggleImportant, onToggleDone
     }) => {
    const el = todos.map( (item) => {
        const { id, ...itemProps  } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                onDeleted = { () => onDeleted(id)}
                onToggleImportant={ () => onToggleImportant(id)}
                onToggleDone={()=> onToggleDone(id)}
                />
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