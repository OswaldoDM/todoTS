
import React, { useState } from "react";

interface Props {
  onAddTodo: (title: string) => void;
}

const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAddTodo(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        type="text"
        onChange={(e) => {setInputValue(e.target.value)}}
        value={inputValue}
        placeholder="Enter a new task"
        autoFocus
      />
    </form>
  );
};

export default CreateTodo;
