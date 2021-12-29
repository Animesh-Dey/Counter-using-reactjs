import React from "react";
import "./Show.css";

export default function Show(props) {
  return (
    <div className="show">
      <div className="show-result">{props.value}</div>
    </div>
  );
}
