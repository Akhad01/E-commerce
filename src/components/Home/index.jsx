import React from "react";
import Search from "../Search";
import ProductCard from "../ProductCard";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__wrapper}>
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Pictures</a>
          </li>
          <li>
            <a href="/">Summer 15</a>
          </li>
          <li>Italy</li>
        </ul>
        <h3>Оформить заказ</h3>
        <Search />
        <h4 className={styles.title4}>Все товары (121)</h4>
        <div className={styles.block__products}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
