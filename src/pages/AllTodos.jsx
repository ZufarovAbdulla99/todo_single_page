import Todos from "../components/Todos"

function AllTodos({todos, setTodos}) {
    return <div>
        <Todos todos={todos} setTodos={setTodos}/>
    </div>
}

export default AllTodos