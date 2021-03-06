import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/todosSlice";


const AddTodo = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        if(value.trim().length === 0)
        {
            alert("Enter a task before adding !!");
            setValue("");
            return;
        }

        dispatch(
            addTodo({
                todo: value
            })
        );

        setValue("");
    };

    return (
        <div className="add-todo">
            <input
                type="text"
                placeholder="Add task"
                value={value}
                onChange={(event) => setValue(event.target.value)}/>
            <button onClick={onSubmit}>
                Save
            </button>
        </div>
    );
};

export default AddTodo;