import React from "react";
import Todo from "../model";
import cross from "/icon-cross.svg";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checboxHandler = (id: number) => {
    const newArr = todos.slice();
    const indexOfObj = newArr.findIndex((todo) => todo.id === id);
    if (indexOfObj >= 0) {
      newArr[indexOfObj].isDone = !newArr[indexOfObj].isDone;
      console.log(newArr[indexOfObj]);
    }
    setTodos(newArr);
  };
  return (
    <li className="flex justify-between text-[1.8rem] items-center pt-[2rem] pb-[1.9rem] px-[2.4rem] border-b-[1px] border-b-[#E3E4F1]">
      <p className="flex gap-[2.4rem] text-[#494C6B] tracking-[-0.25px]">
        <input
          type="checkbox"
          className="w-[2.4rem] h-[2.4rem] checkbox-round"
          checked={todo.isDone}
          onChange={() => checboxHandler(todo.id)}
        />
        {todo.text}
      </p>
      <img
        src={cross}
        onClick={() => removeTodo(todo.id)}
        className="cursor-pointer"
      />
    </li>
  );
};

export default SingleTodo;
