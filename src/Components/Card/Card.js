import React from 'react';
import './Card.css';
import Show from '../Show/Show';
import Button from '../Button/Button';

export default function Card(props) {
    return (
        <div className="card">
            <Show value={props.value} />
            <Button incrementHandler={props.incrementHandler} decrementHandler={props.decrementHandler} />
        </div>
    )
}
