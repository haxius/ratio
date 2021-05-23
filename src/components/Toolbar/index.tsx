import cc from "classcat";
import React, { FC, Fragment } from "react";
import { useToolbarContext } from "../../context/Toolbar";
import Icon from "../Icon";
import styles from "./styles.module.scss";

interface ToolbarProps {}

const Toolbar: FC<ToolbarProps> = () => {
  const { toolbarOpen, setToolbarOpen } = useToolbarContext();
  const handleToolbarOpenClick = () => setToolbarOpen(true);
  return (
    <>
      <div className={styles.toolbar}>
        <div
          className={styles.gradient}
          dangerouslySetInnerHTML={{ __html: " " }}
        />
        {toolbarOpen ? (
          <Fragment />
        ) : (
          <>
            <Icon icon="/icon-plus.png" onClick={handleToolbarOpenClick} />
            <Icon icon="/icon-undo.png" />
          </>
        )}
      </div>
      <div
        className={cc([
          styles.toolbarOpen,
          { [styles.toolbarOpenActive]: toolbarOpen },
        ])}
      >
        {" "}
      </div>
    </>
  );
};

export default Toolbar;
