import cc from "classcat";
import React, { FC } from "react";
import styles from "./styles.module.scss";

interface KeyProps {
  value?: any;
  label?: string;
  onClick?: any;
  children?: any;
}

const Key: FC<KeyProps> = ({ children, value, label, onClick = () => {} }) => (
  <button
    className={cc([styles.hero, styles.key])}
    onClick={() => onClick(value)}
  >
    {children ? children : label ? label : value}
  </button>
);

export default Key;
