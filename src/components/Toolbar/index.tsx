import cc from "classcat";
import React, { FC } from "react";
import styles from "./styles.module.scss";

interface ToolbarProps {}

const Toolbar: FC<ToolbarProps> = () => {
  return (
    <div className={styles.toolbar}>
      <div
        className={styles.gradient}
        dangerouslySetInnerHTML={{ __html: " " }}
      />
    </div>
  );
};

export default Toolbar;
