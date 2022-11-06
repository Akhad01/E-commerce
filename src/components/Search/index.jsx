import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        placeholder="Поиск по названию товара"
      />
      <CiSearch className={styles.search__icon} />
    </div>
  );
};

export default Search;
