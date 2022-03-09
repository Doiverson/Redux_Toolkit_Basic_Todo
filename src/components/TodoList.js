import React, { useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import {deleteTodo, editTodo} from "../redux/todosSlice";

import EditForm from "./EditForm";
import Modal from "./Modal"


const TodoList = () => {

    const [ modalOpen, setModalOpen ] = useState(false);
    const [ modalDefaultValue, setModalDefaultValue ] = useState("");
    const [ editIndex, setEditIndex ] = useState(null);

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onHandleDelete = (index) => {
        dispatch(deleteTodo({ index }))
    }

    const onHandleEdit = (value) => {
        dispatch(editTodo({
            index: editIndex,
            todo: value
        }))
    }

    const onClickEdit = (defaultValue, index) => {
        setEditIndex(index);
        setModalDefaultValue(defaultValue)
        setModalOpen(true);
    }

    return (
        <>
            <ul className="tasks-list">
                {todos.map((todo, index) => (
                    <div>
                        <h1>{todo}</h1>
                        <button onClick={() => onHandleDelete(index)}>Delete</button>
                        <button onClick={() => onClickEdit(todo, index)}>Edit</button>
                    </div>
                ))}
            </ul>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <EditForm value={modalDefaultValue} onClick={onHandleEdit} onClose={() => setModalOpen(false)}/>
            </Modal>
        </>
    );
};

export default TodoList;