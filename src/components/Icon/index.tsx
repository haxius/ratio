import cc from "classcat";
import React, { FC } from "react";
import styles from "./styles.module.scss";

interface IconProps {
  icon: string;
  onClick?: any;
  width?: number;
  className?: string | undefined;
}

const Icon: FC<IconProps> = ({
  icon,
  onClick = () => {},
  width = 60,
  className,
}) => {
  return (
    <div
      role="button"
      className={cc([styles.icon, className])}
      onClick={onClick}
      style={{ width: `${width}px`, cursor: onClick ? "pointer" : "auto" }}
    >
      <img alt="" src={icon} />
    </div>
  );
};

export default Icon;
