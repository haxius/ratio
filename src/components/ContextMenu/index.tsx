import cc from "classcat";
import React, { FC } from "react";
import { useCardsContext } from "../../context/Cards";
import { useContextMenuContext } from "../../context/ContextMenu";
import { useRouterContext } from "../../context/Router";
import styles from "./styles.module.scss";

interface ContextMenuProps {}

const ContextMenu: FC<ContextMenuProps> = () => {
  const { cardIndex, contextMenuOpen, clearAndCloseContextMenu } =
    useContextMenuContext();
  const { balanceLedger, clearLedger } = useCardsContext();
  const { setRoute } = useRouterContext();

  const handleBalanceLedgerClick = () => balanceLedger(cardIndex);
  const handleEditCardClick = () => setRoute("edit-card");
  const handleClearLedgerClick = () => clearLedger(cardIndex);

  return (
    <div
      className={cc([
        styles.contextMenu,
        { [styles.contextMenuActive]: contextMenuOpen },
      ])}
      role="button"
      onClick={clearAndCloseContextMenu}
    >
      <div className={styles.menu}>
        <button className={styles.menuItem} onClick={handleBalanceLedgerClick}>
          balance ledger
        </button>
        <button className={styles.menuItem} onClick={handleEditCardClick}>
          edit card
        </button>
        <button className={styles.menuItem} onClick={handleClearLedgerClick}>
          clear ledger
        </button>
      </div>
    </div>
  );
};

export default ContextMenu;
