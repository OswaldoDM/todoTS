
import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onRemoveTodo: (id:Todo['id']) => void;
  onToggleCompleted: (id:Todo['id'], completed:Todo['completed']) => void;
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleted }) => {
  return (
    <>
      <ul className="todo-list">
      {todos.map((todo) => (
        <li 
        key={todo.id} 
        className={`${todo.completed ? 'completed' : ''}`}>
            <TodoItem
                key={todo.id} 
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onRemoveTodo={onRemoveTodo}
                onToggleCompleted={onToggleCompleted}
            />
        </li>
      ))}
      </ul>
    </>
  );
};

export default Todos;
