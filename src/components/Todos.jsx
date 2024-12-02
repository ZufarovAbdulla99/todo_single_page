import { useEffect, useState } from "react";
import { CheckCircleIcon } from "lucide-react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Todos({todos, setTodos}) {
  const [editId, setEditId] = useState();
  const [editTodoText, setEditTodoText] = useState("");
  const [selectOrder, setSelectOrder] = useState("all");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(savedTodos)
  }, [])

  function handleEdit(todoId) {
    setEditId(todoId);
  }

  function handleDelete(todoId) {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    deleteNotification();
  }

  function editTodo(id, text) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setEditId();
    setEditTodoText("");
    editNotification();
  }

  function handleIsDone(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const deleteNotification = () =>
    toast.warn("Todo o'chirildi", {
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

  const editNotification = () =>
    toast.info("Todo o'zgartirildi", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  return (
    <div className="p-4 flex flex-col">
      <select
        name="isDone"
        className=" w-fit bg-zinc-500 text-white my-2 rounded-lg px-4 py-2 items-end"
        onChange={(event) => setSelectOrder(event.target.value)}
      >
        <option value="all">
          Hammasi
        </option>
        <option value="done">Bajarilgan</option>
        <option value="not done">Bajarilmagan</option>
      </select>
      <ul className="grid grid-cols-1 gap-4">
        {todos
          .filter((todo) => {
            if (selectOrder === "done") {
              return todo.isDone === true;
            }
            if (selectOrder === "not done") {
              return todo.isDone === false;
            }
            return true;
          })
          .map((todo) =>
            todo.id === editId ? (
              <div key={todo.id} className="flex items-center justify-center gap-2">
                <input
                  type="text"
                  className="flex bg-zinc-300 py-2 px-4 rounded-lg text-slate-900 w-fit"
                  value={editTodoText}
                  onChange={(event) => setEditTodoText(event.target.value)}
                />
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md" onClick={() => editTodo(editId, editTodoText)}>
                  Ok
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => setEditId()}>Cancel</button>
              </div>
            ) : (
              <li
                key={todo.id}
                className={`grid grid-cols-4 gap-2 place-items-center p-4 rounded-lg shadow-lg ${
                    todo.isDone ? "bg-emerald-400" : "bg-slate-400"
                  }`}
              >
                <strong
                  className={`col-span-3 py-2 px-4 text-center text-white text-lg ${todo.isDone && "line-through"}`}
                >
                  {todo.text}
                </strong>
                <div className="flex gap-2 justify-end">
                  <button
                    className={`${todo.isDone ? "bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md" : "bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"}`}
                    onClick={() => handleIsDone(todo.id)}
                  >
                    <CheckCircleIcon className="h-8 w-8" />
                  </button>
                  <button
                    className="bg-cyan-500 hover:bg-cyan-700 py-2 px-4 w-fit rounded-lg text-white text-xl"
                    onClick={() => {
                      handleEdit(todo.id);
                      setEditTodoText(todo.text);
                    }}
                  >
                    Edit
                  </button>
                  <button className="bg-rose-500 hover:bg-rose-700 py-2 px-4 w-fit rounded-lg text-white text-xl"
                  onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
              </li>
            )
          )}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default Todos;
