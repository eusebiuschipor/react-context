import React from 'react';

const Input = (props) => {
    return (
        <>
            <label htmlFor={props.name}>
                {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
            </label>
            <input
                id={props.name}
                type={props.type}
                value={props.value}
                name={props.name}
                onChange={props.onChange}
            />
        </>
    );
}

export default Input;