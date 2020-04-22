import React from 'react';
import './person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>i am {props.name} & i am {age()} years old</p>
            <p>{props.children}</p>
            <input value={props.name} type="text" onChange={props.changed} />
        </div>
    )
};
const age = () => {
    return Math.floor(Math.random() * 30);
}

export default person;