import React, { useState } from "react";
import Todo from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  countTodo: number;
  setCountTodo: React.Dispatch<React.SetStateAction<number>>;
}

const aroundP = "text-[#9495A5] text-[1.4rem] cursor-pointer";
const middleP =
  "text-[1.4rem] font-bold text-[#9495A5] hover:text-[#3A7CFD] cursor-pointer";

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  countTodo,
  setCountTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
      <div className="flex justify-between px-[2.4rem] pt-[1.6rem] pb-[2rem]">
        <p className={aroundP}>{countTodo} items left</p>
        <div className="flex gap-[1.9rem]">
          <p className={middleP}>All</p>
          <p className={middleP}>Active</p>
          <p className={middleP}>Completed</p>
        </div>
        <p className={aroundP}>Clear Completed</p>
      </div>
    </ul>
  );
};

export default TodoList;
