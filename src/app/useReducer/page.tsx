"use client"
import TodoItem from "@/components/todoItem";
import { FormEvent, useReducer, useState } from "react"

export interface Todo {
    id: number;
    name: string;
    complete: boolean;
}

export const ACTION = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo",
}

function reducer(todos: Todo[], action: { type: any; payload: any; }): Todo[] {
    switch (action.type) {
        case ACTION.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTION.TOGGLE_TODO:
            return todos.map((todo) =>
                todo.id === action.payload.todoId ?
                    { ...todo, complete: !todo.complete } : { ...todo }
            )
        case ACTION.DELETE_TODO:
            return todos.filter((todo) =>
                todo.id !== action.payload.todoId)
        default:
            return todos;
    }
}

function newTodo(name: string): Todo {
    return { id: Date.now(), name: name, complete: false };
}

export default function Page() {
    const [name, setName] = useState('');
    const [todos, dispatch] = useReducer(reducer, []);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({
            type: ACTION.ADD_TODO,
            payload: {
                name: name,
            }
        });
        setName('');
    }

    return (
        <>
            <form
                onSubmit={onSubmit}
            >
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </form>
            {todos.map((todo) => <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />)}
        </>
    )
}