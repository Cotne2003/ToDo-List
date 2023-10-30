import { useState } from "react";
import TodoList from "./components/TodoList";
import Todo from "./model";
import moon from "/icon-moon.svg";
import sun from "/icon-sun.svg";
import desktopLight from "/bg-desktop-light.jpg";
import desktopDark from "/bg-desktop-dark.jpg";
import mobileLight from "/bg-mobile-light.jpg";
import mobileDark from "/bg-mobile-dark.jpg";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [checkedIsDone, setCheckedIsDone] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const itemsLeft = todos.filter((todo) => todo.isDone === false);
  const activeTodos = todos.filter((todo) => todo.isDone === false);
  const completedTodos = todos.filter((todo) => todo.isDone === true);

  document.body.style.backgroundColor = darkMode ? "#171823" : "#FAFAFA";

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, isDone: checkedIsDone },
      ]);
      setInputValue("");
    }
    setCheckedIsDone(false);
  };

  return (
    <>
      <img
        src={darkMode ? desktopDark : desktopLight}
        alt=""
        className="desktopImg max-[549px]:hidden"
      />
      <img
        src={darkMode ? mobileDark : mobileLight}
        alt=""
        className="mobileImg min-[550px]:hidden"
      />
      <main className="max-w-[540px] mx-auto mt-[7rem] max-[549px]:max-w-[327px] max-[549px]:mt-[4.8rem]">
        <div className="flex items-center justify-between">
          <h1 className="text-[#fff] text-[40px] font-bold tracking-[15px] cursor-default max-[549px]:text-[2.7rem]">
            TODO
          </h1>
          <img
            src={darkMode ? sun : moon}
            alt="app mode"
            className="max-[549px]:w-[2rem] cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          />
        </div>
        <form
          className="mt-[4.8rem] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.50)] max-[549px]:mt-[4rem]"
          style={
            darkMode
              ? { boxShadow: "0px 35px 50px -15px rgba(0, 0, 0, 0.50)" }
              : {}
          }
        >
          <div
            className="w-full flex gap-[2.4rem] bg-white pl-[2.4rem] rounded-[5px] items-center h-[6.4rem] max-[549px]:h-[4.8rem] max-[549px]:pl-[2rem]"
            style={darkMode ? { backgroundColor: "#25273D" } : {}}
          >
            <input
              type="checkbox"
              className="w-[2.4rem] h-[2.4rem] checkbox-round cursor-pointer max-[549px]:w-[2rem] max-[549px]:h-[2rem]"
              onChange={() => setCheckedIsDone(!checkedIsDone)}
              checked={checkedIsDone}
            />
            <input
              className="h-full w-full py-[2.3rem] rounded-[5px] border-none outline-none caret-[#3A7CFD] placeholder:text-[1.8rem] text-[1.8rem] text-[#393A4B] max-[549px]:py-[1.8rem] max-[549px]:placeholder:text-[1.2rem] max-[549px]:text-[1.2rem]"
              type="input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Create a new todo…"
              style={
                darkMode ? { backgroundColor: "#25273D", color: "#C8CBE7" } : {}
              }
            />
          </div>
          <button type="submit" onClick={handleAdd} className="hidden">
            go
          </button>
        </form>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            itemsLeft={itemsLeft}
            activeTodos={activeTodos}
            completedTodos={completedTodos}
            darkMode={darkMode}
          />
        </div>
      </main>
    </>
  );
}

export default App;
