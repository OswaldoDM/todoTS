import { useState } from "react";
import Todos from "./components/Todos";
import Footer from "./components/Footer";

import { FilterValue, Todo } from "./types";
import { TODO_FILTERS } from "./const";
import Header from "./components/Header";


const mockTodos = [
  {
    id: '1',
    title: 'Learn Typescript',
    completed: true,
  },
  {
    id: '2',
    title: 'Learn Java',
    completed: false,
  },
  {
    id: '3',
    title: 'Learn Python',
    completed: false,
  },
]

const App: React.FC = () => {

  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = (id:Todo['id']) => {   
    setTodos( prevTodos => prevTodos.filter( todo => todo.id !== id))
  }

  const handleCompleted = (id:Todo['id'], completed:Todo['completed']) => {
    setTodos( prevTodos => prevTodos.map( todo => {
      if( todo.id === id){
        return {
          ...todo,
          completed
        }
      }

      return todo;
    }))
  }

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter( todo => !todo.completed)
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter( todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = (title: Todo['title']) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    setTodos( prevTodos => [...prevTodos, newTodo])
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  return (
    <>
      <div className="todoapp">
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
