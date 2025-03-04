import { ACTION, Todo } from "@/app/useReducer/page";
import { ActionDispatch } from "react";

export default function TodoItem({
    todo,
    dispatch,
}: {
    todo: Todo;
    dispatch: ActionDispatch<[action: { type: any, payload: any }]>
}) {
    const onClickToggle = () => {
        dispatch({
            type: ACTION.TOGGLE_TODO,
            payload: { todoId: todo.id }
        })
    }

    const onClickDelete = () => {
        dispatch({
            type: ACTION.DELETE_TODO,
            payload: {
                todoId: todo.id,
            }
        })
    }
    return (
        <div>
            <span style={{ color: todo.complete ? `#AAA` : `#000` }}>
                {todo.name}
            </span>
            <button onClick={onClickToggle}>toggle</button>
            <button onClick={onClickDelete}>delete</button>
        </div>
    )
}