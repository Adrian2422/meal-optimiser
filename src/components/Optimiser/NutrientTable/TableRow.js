import React from 'react';
import styles from '../../../css/TableRow.module.css'

const TableRow = (props) => {
  return (
    <tr>
      <td className={styles.alignLeft}>{props.name}</td>
      <td className={styles.alignRight}>{props.value.toFixed(2)} <span>{props.suffix}</span></td>
    </tr>
  );
}
 
export default TableRow;