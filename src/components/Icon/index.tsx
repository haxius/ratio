import React, { FC } from "react";
import styles from "./styles.module.scss";

interface IconProps {
  icon: string;
  onClick?: any;
  width?: number;
}

const Icon: FC<IconProps> = ({ icon, onClick = () => {}, width = 60 }) => {
  return (
    <div
      role="button"
      className={styles.icon}
      onClick={onClick}
      style={{ width: `${width}px`, cursor: onClick ? "pointer" : "auto" }}
    >
      <img alt="" src={icon} />
    </div>
  );
};

export default Icon;
