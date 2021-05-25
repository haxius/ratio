export interface IContextMenuContext {
  contextMenuOpen: boolean;
  setContextMenuOpen: (newContextMenuOpen: boolean) => void;
  cardIndex: number | boolean;
  setCardIndex: (newIndex: number | boolean) => void;
  clearCardIndex: () => void;
  clearAndCloseContextMenu: () => void;
}
