import React from 'react';

const recipeItem = (props) => (
<p style={{margin: 0, textAlign: "left"}}>- <strong>{props.name}</strong> {props.quantity} {props.unit} {props.weight}g</p>
);
 
export default recipeItem;