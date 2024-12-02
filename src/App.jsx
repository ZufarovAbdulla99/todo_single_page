import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import NewTodo from './pages/NewTodo'
import AllTodos from './pages/AllTodos'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(savedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function addTodo(newTodoText) {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodoText, isDone: false },
    ];
    setTodos(updatedTodos);
  }

  return (
    <>
      <Header />
        <Routes>
          <Route path='/add' element={<NewTodo addTodo={addTodo}/>} />
          <Route path='/todos' element={<AllTodos todos={todos} setTodos={setTodos}/>} />
        </Routes>
    </>
  )
}

export default App
