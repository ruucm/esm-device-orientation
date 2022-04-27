import React from "react";
import styles from "./Button.module.scss";

export function Button({ title = "Title" }) {
  return <button className={styles.button}>{title}</button>;
}
