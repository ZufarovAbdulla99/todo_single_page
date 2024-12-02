import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form({addTodo}) {
  // const [todo, setTodo] = useState({});
  const [todoText, setTodoText] = useState("");

  const addNotification = () =>
    toast.success("Todo qo'shildi", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  function handleSubmit(event) {
    event.preventDefault();
    // setTodo({ id: Date.now(), text: todoText, isDone: false });
    addTodo(todoText)
    setTodoText("");
    // setTodo(null);
    addNotification();
  }

  return (
    <div>
      <h2 className="text-yellow-600 text-6xl">Todo List</h2>
      <div className="flex">
        <form className=" py-2 px-4 flex gap-2 text-sm" onSubmit={handleSubmit}>
          <input
            className="bg-zinc-300 py-2 px-4 rounded-lg text-slate-900"
            type="search"
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
          />
          <button type="submit" disabled={todoText === ""}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
