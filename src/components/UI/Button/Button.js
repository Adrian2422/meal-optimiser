import React from "react";

const button = (props) => (
<button onClick={props.click} className={props.class}>{props.name}</button>
);

export default button;
