import React from "react";
import styles from "../styles/MenuItem.module.scss";

type Props = {
  title: string;
};

export const MenuItem = ({ title }: Props) => {
  return <div className={styles.item}>{title}</div>;
};
