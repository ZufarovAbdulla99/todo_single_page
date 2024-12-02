import Form from "../components/Form"

function NewTodo({addTodo}) {
    return <div>
        <Form addTodo={addTodo}/>
    </div>
}

export default NewTodo