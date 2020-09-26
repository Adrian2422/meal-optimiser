import React from "react";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";
import Aux from "../hoc/Auxilliary";
import Button from "../components/UI/Button/Button";
import styles from "../css/ShoppingList.module.css";

const recipe = (props) => {
  const printDocument = () => {
    const input = document.getElementById("shoppingList");
    domtoimage.toPng(input).then((dataUrl) => {
      console.log(dataUrl);
      const img = new Image();
      img.src = dataUrl;
      const pdf = new jsPDF();
      pdf.addImage(img, "PNG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("shopping_list.pdf");
    });
  };

  return (
    <Aux>
      <div className={styles.ShoppingList}>
        <div className={styles.ShoppingList__printWrapper} id="shoppingList">
          <h2 className={styles.ShoppingList__title}>Shopping list</h2>
          <hr></hr>
          {props.children}
        </div>
      </div>
      <Button
        click={printDocument}
        class={styles.ShoppingList__printButton}
        name={"Print"}
      />
    </Aux>
  );
};

export default recipe;
