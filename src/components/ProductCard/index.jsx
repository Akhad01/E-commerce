import React from "react";
import { airpods } from "../../assets";
import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok__img}>
        <img src={airpods} alt="product-block" />
      </div>
      <div className={styles.content}>
        <div className={styles.price__name}>Наушники Apple Airpo...</div>
        <div className={styles.price}>7 300 000 сум </div>
        <div className={styles.credit__block}>
          <div className={styles.credit__price}>от 2 435 000 сум</div>
          <span>х24</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
