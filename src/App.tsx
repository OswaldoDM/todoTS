import { useState } from "react";
import { FilterValue } from "./types";
import { TODO_FILTERS } from "./const";
import { mockTodos } from "./utils/mockTodos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todos from "./components/Todos";

function App () {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

  const handleRemove = (id:string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleCompleted = (id:string, completed:boolean) => {
    setTodos( prevTodos => prevTodos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      })
    );
  };

  const handleFilterChange = (filter:FilterValue) => {
    setFilterSelected(filter);
  };

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleAddTodo = (title:string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;

  const completedCount = todos.length - activeCount;

  return (
    <>
      <div className='todoapp'>
        <Header onAddTodo={handleAddTodo} />
        <Todos
          todos={filteredTodos}
          onRemoveTodo={handleRemove}
          onToggleCompleted={handleCompleted}
        />
        <Footer
          onClearCompleted={handleRemoveAllCompleted}
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          handleFilterChange={handleFilterChange}
        />
      </div>
    </>
  );
};

export default App;
