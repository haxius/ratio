export interface IToolbarContext {
  toolbarOpen: boolean;
  setToolbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  itemIndex: number | boolean;
  setItemIndex: (newIndex: number | boolean) => void;
  clearItemIndex: () => void;
  note: string;
  setNote: (newNote: string) => void;
  clearNote: () => void;
  amount: string;
  setAmount: (newAmount: string) => void;
  clearAmount: () => void;
  clearAndCloseToolbar: () => void;
}
