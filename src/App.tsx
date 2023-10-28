import { useState } from "react";
import TodoList from "./components/TodoList";
import Todo from "./model";
import moon from "/icon-moon.svg";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [checkedIsDone, setCheckedIsDone] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const itemsLeft = todos.filter((todo) => todo.isDone === false);
  const activeTodos = todos.filter((todo) => todo.isDone === false);
  const completedTodos = todos.filter((todo) => todo.isDone === true);

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
    <main className="max-w-[540px] mx-auto mt-[7rem] max-[549px]:max-w-[327px] ">
      <div className="flex items-center justify-between">
        <h1 className="text-[#fff] text-[40px] font-bold tracking-[15px] cursor-default max-[549px]:text-[2.7rem]">
          TODO
        </h1>
        <img src={moon} alt="app mode" className="max-[549px]:w-[2rem]" />
      </div>
      <form className="mt-[4.8rem] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.50)] max-[549px]:mt-[4rem]">
        <div className="w-full flex gap-[2.4rem] bg-white pl-[2.4rem] rounded-[5px] items-center h-[6.4rem] max-[549px]:h-[4.8rem] max-[549px]:pl-[2rem]">
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
          />
        </div>
        <button type="submit" onClick={handleAdd} className="hidden">
          go
        </button>
      </form>
      <div className="bg-white mt-[2.4rem] rounded-[5px] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.50)]">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          itemsLeft={itemsLeft}
          activeTodos={activeTodos}
          completedTodos={completedTodos}
        />
      </div>
    </main>
  );
}

export default App;
