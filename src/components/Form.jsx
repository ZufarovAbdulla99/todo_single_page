import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form({addTodo}) {
  const [todoText, setTodoText] = useState("");
  const navigate = useNavigate();

  const addNotification = () =>
    toast.success("Todo qo'shildi", {
      position: "bottom-center",
      autoClose: 1000,
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
    addTodo(todoText)
    setTodoText("");
    addNotification();
    // navigate("/todos")

    // // Add notification ko'rinishi uchun keyingi pagega o'tish kechiktirildi
    setTimeout(() => {
      navigate("/todos");
    }, 1500);
  }

  return (
    <div className="grid place-items-center my-4">
      <h2 className="text-yellow-600 text-6xl">Todo List</h2>
      <div className="flex m-4">
        <form className="py-2 px-4 flex gap-2 text-2xl" onSubmit={handleSubmit}>
          <input
            className="bg-zinc-300 py-2 px-4 rounded-lg text-slate-900"
            type="search"
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
          />
          <button className="bg-teal-500 p-4 w-32 rounded-lg text-white hover:bg-teal-700" type="submit" disabled={todoText === ""}>
            Add
          </button>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default Form;
