import React, { useState } from "react";
import Todo from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  itemsLeft: Todo[];
  activeTodos: Todo[];
  completedTodos: Todo[];
}

const aroundP = "text-[#9495A5] text-[1.4rem] cursor-pointer";
const middleP =
  "text-[1.4rem] font-bold text-[#9495A5] hover:text-[#3A7CFD] cursor-pointer";

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  itemsLeft,
  activeTodos,
  completedTodos,
}) => {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  return (
    <ul>
      {all
        ? todos.map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))
        : active
        ? activeTodos.map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))
        : completed
        ? completedTodos.map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))
        : null}
      <div className="flex justify-between px-[2.4rem] pt-[1.6rem] pb-[2rem]">
        <p className={aroundP}>{itemsLeft.length} items left</p>
        <div className="flex gap-[1.9rem]">
          <p
            className={middleP}
            onClick={() => {
              setAll(true);
              setActive(false);
              setCompleted(false);
            }}
            style={all ? { color: "#3A7CFD" } : {}}
          >
            All
          </p>
          <p
            className={middleP}
            onClick={() => {
              setActive(true);
              setAll(false);
              setCompleted(false);
            }}
            style={active ? { color: "#3A7CFD" } : {}}
          >
            Active
          </p>
          <p
            className={middleP}
            onClick={() => {
              setCompleted(true);
              setActive(false);
              setAll(false);
            }}
            style={completed ? { color: "#3A7CFD" } : {}}
          >
            Completed
          </p>
        </div>
        <p
          className={aroundP}
          onClick={() => {
            let filterTodos = todos.filter((todo) => todo.isDone === false);
            setTodos(filterTodos);
          }}
        >
          Clear Completed
        </p>
      </div>
    </ul>
  );
};

export default TodoList;
