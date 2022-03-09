import {useEffect, useState} from "react";

const EditForm = (props) => {

    const [ value, setValue ] = useState('');

    useEffect(() => {
        setValue(props.value);
    }, [props.value])

    const onClick = () => {
        props.onClick(value);
        props.onClose();
    }

    return (
        <>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={onClick}>OK</button>
        </>
    )
}

export default EditForm;