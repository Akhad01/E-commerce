import React from "react";
import styles from "./Sidebat.module.scss";
import { lists } from "../../constants";

console.log(lists);

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__wrapper}>
        <div className={styles.sidebar__lists}>
          {lists.map((list) => (
            <div
              className={`${styles.sidebar__list} ${styles.active}`}
              key={list.id}
            >
              {list.img}
              <h3 className={styles.title}>{list.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
