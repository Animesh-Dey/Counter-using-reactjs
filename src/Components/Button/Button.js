import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div>
      <div className="button-container">
        <button type="button" class="btn btn-secondary" onClick={props.decrementHandler}>
          -
        </button>
        <button type="button" class="btn btn-secondary" onClick={props.incrementHandler}>
          +
        </button>
      </div>
    </div>
  );
}
