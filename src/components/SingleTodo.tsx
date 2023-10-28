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
    <li className="flex justify-between text-[1.8rem] items-center pt-[2rem] pb-[1.9rem] px-[2.4rem] border-b-[1px] border-b-[#E3E4F1] max-[549px]:py-[1.6rem] max-[549px]:px-[2rem]">
      <p
        style={
          todo.isDone
            ? { color: "#D1D2DA", textDecoration: "line-through" }
            : {}
        }
        className="flex gap-[2.4rem] text-[#494C6B] tracking-[-0.25px] max-[549px]:text-[1.2rem]"
      >
        <input
          type="checkbox"
          className="w-[2.4rem] h-[2.4rem] cursor-pointer max-[549px]:w-[2rem] max-[549px]:h-[2rem]"
          checked={todo.isDone}
          onChange={() => checboxHandler(todo.id)}
        />
        {todo.text}
      </p>
      <img
        src={cross}
        onClick={() => removeTodo(todo.id)}
        className="cursor-pointer lg:opacity-0"
      />
    </li>
  );
};

export default SingleTodo;
