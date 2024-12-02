import { NavLink } from "react-router-dom"

function Header() {
    return <div>
        <ul className="flex gap-4 justify-center">
            <NavLink to='/add'>Add Todo</NavLink>
            <NavLink to='/todos'>All Todos</NavLink>
        </ul>
    </div>
}

export default Header