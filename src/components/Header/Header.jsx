import React from "react";
import { IoNotifications } from "react-icons/io5";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div>
          <span className={styles.header__logo}>LOGO</span>
        </div>
        <div className={styles.header__right}>
          <div className={styles.header__notification}>
            <IoNotifications className={styles.header__icon} />
            <span>1</span>
          </div>
          <div className={styles.header__avatar}>
            <span className={styles.header__avatar__text}>Личный кабинет</span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="white" />
              <path
                d="M16.0008 19.1739C20.5202 19.1739 24.3341 19.8789 24.3341 22.599C24.3341 25.32 20.4952 26 16.0008 26C11.4825 26 7.66748 25.295 7.66748 22.575C7.66748 19.8539 11.5064 19.1739 16.0008 19.1739ZM16.0008 6C19.0624 6 21.5154 8.35402 21.5154 11.2911C21.5154 14.2281 19.0624 16.5831 16.0008 16.5831C12.9403 16.5831 10.4862 14.2281 10.4862 11.2911C10.4862 8.35402 12.9403 6 16.0008 6Z"
                fill="#3D639D"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
