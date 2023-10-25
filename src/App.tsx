import { useState } from "react";
import TodoList from "./components/TodoList";
import Todo from "./model";
import moon from "/icon-moon.svg";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [checkedIsDone, setCheckedIsDone] = useState(false);
  const [countTodo, setCountTodo] = useState(0);

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
    todos.map((todo) => {
      if (todo.isDone) {
        setCountTodo(countTodo);
      } else {
        setCountTodo(countTodo + 1);
      }
      return countTodo;
    });
  };

  return (
    <main className="max-w-[540px] mx-auto mt-[7rem] ">
      <div className="flex items-center justify-between">
        <h1 className="text-[#fff] text-[40px] font-bold tracking-[15px]">
          TODO
        </h1>
        <img src={moon} alt="app mode" />
      </div>
      <form className="mt-[4rem] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.50)]">
        <div className="w-full flex gap-[2.4rem] bg-white pl-[2.4rem] rounded-[5px] items-center h-[6.4rem]">
          <input
            type="checkbox"
            className="w-[2.4rem] h-[2.4rem] checkbox-round"
            onChange={() => setCheckedIsDone(!checkedIsDone)}
            checked={checkedIsDone}
          />
          <input
            className="h-full w-full py-[2.3rem] rounded-[5px] border-none outline-none caret-[#3A7CFD] placeholder:text-[1.8rem] text-[1.8rem] text-[#393A4B]"
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
          countTodo={countTodo}
          setCountTodo={setCountTodo}
        />
      </div>
    </main>
  );
}

export default App;
