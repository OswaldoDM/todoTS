import React from "react"
import { Todo } from "../types"

interface Props extends Todo {   
    onRemoveTodo: (id:Todo['id']) => void;
    onToggleCompleted: (id:Todo['id'], completed:Todo['completed']) => void;
}

const TodoItem: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleted}) => {
  return (
    <div className="view">
        <input
        className="toggle" 
        type="checkbox"
        checked={completed}
        onChange={(event) => onToggleCompleted(id, event.target.checked)}       
        />
        <label >{title}</label>
        <button 
        className="destroy"
        onClick={() => onRemoveTodo(id)}       
        >
             
        </button>
    </div>
  )
}

export default TodoItem