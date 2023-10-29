import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import sushi from "../../assets/sushi.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Yapona</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushi} alt="sushi" />
      </div>
    </React.Fragment>
  );
};

export default Header;
