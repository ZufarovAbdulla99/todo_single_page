import { NavLink } from "react-router-dom"

function Header() {
    return <div>
        <ul className="flex gap-4 justify-center bg-zinc-700 text-white">
            <NavLink to='/add' className="text-3xl hover:bg-slate-300 hover:text-slate-900 p-3">Add Todo</NavLink>
            <NavLink to='/todos' className="text-3xl hover:bg-slate-300 hover:text-slate-900 p-3">All Todos</NavLink>
        </ul>
    </div>
}

export default Header