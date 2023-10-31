import React, { useState } from "react";
import Todo from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  itemsLeft: Todo[];
  activeTodos: Todo[];
  completedTodos: Todo[];
  darkMode: boolean;
}

const aroundP = "text-[#9495A5] text-[1.4rem]";
const middleP = "text-[1.4rem] font-bold text-[#9495A5] cursor-pointer";

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  itemsLeft,
  activeTodos,
  completedTodos,
  darkMode,
}) => {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  return (
    <>
      <ul
        className="bg-white mt-[2.4rem] rounded-[5px] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.50)]"
        style={
          darkMode
            ? {
                backgroundColor: "#25273D",
                boxShadow: "0px 35px 50px -15px rgba(0, 0, 0, 0.50)",
              }
            : {}
        }
      >
        {all
          ? todos.map((todo) => (
              <SingleTodo
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                darkMode={darkMode}
              />
            ))
          : active
          ? activeTodos.map((todo) => (
              <SingleTodo
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                darkMode={darkMode}
              />
            ))
          : completed
          ? completedTodos.map((todo) => (
              <SingleTodo
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                darkMode={darkMode}
              />
            ))
          : null}
        <div className="flex justify-between px-[2.4rem] pt-[1.6rem] pb-[2rem] max-[549px]:px-[2rem] max-[549px]:pb-[2.2rem]">
          <p className={`${aroundP} max-[549px]:text-[1.2rem]`}>
            {itemsLeft.length} items left
          </p>
          <div className="flex gap-[1.9rem]">
            <p
              className={`${middleP} max-[549px]:hidden ${
                darkMode ? "hover:text-[#E3E4F1]" : "hover:text-[#494C6B]"
              }`}
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
              className={`${middleP} max-[549px]:hidden ${
                darkMode ? "hover:text-[#E3E4F1]" : "hover:text-[#494C6B]"
              }`}
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
              className={`${middleP} max-[549px]:hidden ${
                darkMode ? "hover:text-[#E3E4F1]" : "hover:text-[#494C6B]"
              }`}
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
            className={`cursor-pointer active:text-[#494c6b] hover:text-[#494c6b81] max-[549px]:text-[1.2rem] ${aroundP} ${
              darkMode ? "hover:text-[#E3E4F1]" : "hover:text-[#494C6B]"
            }`}
            onClick={() => {
              let filterTodos = todos.filter((todo) => todo.isDone === false);
              setTodos(filterTodos);
            }}
          >
            Clear Completed
          </p>
        </div>
      </ul>
      <div
        className="min-[550px]:hidden bg-white mt-[2.4rem] rounded-[5px] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.50)] flex justify-center gap-[1.9rem] pt-[1.5rem] pb-[1.9rem]"
        style={
          darkMode
            ? {
                backgroundColor: "#25273D",
                boxShadow: "0px 35px 50px -15px rgba(0, 0, 0, 0.50",
              }
            : {}
        }
      >
        <p
          className={`${middleP}`}
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
          className={`${middleP}`}
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
          className={`${middleP}`}
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
    </>
  );
};

export default TodoList;
