import React from "react";
import TableRow from "./TableRow/TableRow";
import styles from "../../../css/Optimiser/ProductDetails.module.css";

const productDetails = (props) => {
  const generateRows = () =>
    props.nutrients.map((item) => (
      <TableRow
        key={item.key}
        name={item.name}
        value={item.value}
        suffix={item.suffix}
      />
    ));

  return (
    <div className={styles.Container}>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th colSpan="2" className={styles.Table__header}>
              Full nutrients of {props.name} in {props.weight}g
            </th>
          </tr>
        </thead>
        <tbody>{generateRows()}</tbody>
      </table>
    </div>
  );
};

export default productDetails;
