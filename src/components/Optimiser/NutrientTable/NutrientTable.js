import React from "react";
import TableRow from "./TableRow/TableRow";
import styles from "../../../css/NutrientTable.module.css";

const NutrientTable = (props) => {
  const generateRows = () => props.nutrients.map((item) => 
      <TableRow 
      key={item.key} 
      name={item.name} 
      value={item.value}
      suffix={item.suffix}
      />
    );

  return (
    <div className={styles.ntable__container}>
      <table className={styles.ntable__table}>
        <thead >
          <tr>
            <th colSpan="2" className={styles.ntable__header}>Main nutrients</th>
          </tr>
        </thead>
        <tbody>
          {generateRows()}
        </tbody>
      </table>
    </div>
  );
};

export default NutrientTable;
