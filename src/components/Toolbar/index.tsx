import cc from "classcat";
import React, { FC } from "react";
import Icon from "../Icon";
import styles from "./styles.module.scss";

interface ToolbarProps {}

const Toolbar: FC<ToolbarProps> = () => {
  return (
    <div className={styles.toolbar}>
      <div
        className={styles.gradient}
        dangerouslySetInnerHTML={{ __html: " " }}
      />
      <Icon icon="/icon-plus.png" />
      <Icon icon="/icon-undo.png" />
    </div>
  );
};

export default Toolbar;
