import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();
        if(!todo) return;
        // addTodo({id: Date.now(), todo: todo, completed: false});
        addTodo({todo, completed: false});      //date.now we are doing in functionality so no need of doing it, and new syntax, if key and value name are same then we can write once only
        setTodo("");
    }

    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={add}>
                Add
            </button>
        </form>
    );
}

export default TodoForm;

