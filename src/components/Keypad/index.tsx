import React, { FC, useState } from "react";
import Key from "./Key";
import styles from "./styles.module.scss";

/**
 * Evaluate value w/ parseInt(value) / 100,
 * wrap w/ currency to get display friendly
 * i.e. currency(parseInt...
 */

interface KeypadProps {
  onBack?: any;
  onSubmit?: any;
  onChange?: any;
}

const Keypad: FC<KeypadProps> = ({
  onBack = () => {},
  onSubmit = () => {},
  onChange = () => {},
}) => {
  const [value, setValue] = useState("");

  const setValueAndNotify = (newValue: string): void => {
    setValue(newValue);
    onChange(newValue);
  };

  const handleKeyPress = (newValue: string): void => {
    switch (newValue) {
      case "undo":
        if (value) {
          setValueAndNotify(value.substring(0, value.length - 1));
        } else {
          onBack();
        }
        break;
      case "submit":
        if (value) {
          onSubmit(value);
        }
        break;
      default:
        if (value) {
          if (value.length < 8) {
            setValueAndNotify(value + newValue);
          }
        } else {
          if (newValue !== "0") {
            setValueAndNotify(newValue);
          }
        }
    }
  };

  return (
    <div className={styles.keypad}>
      <div className={styles.row}>
        <Key value="1" onClick={handleKeyPress} />
        <Key value="2" onClick={handleKeyPress} />
        <Key value="3" onClick={handleKeyPress} />
      </div>
      <div className={styles.row}>
        <Key value="4" onClick={handleKeyPress} />
        <Key value="5" onClick={handleKeyPress} />
        <Key value="6" onClick={handleKeyPress} />
      </div>
      <div className={styles.row}>
        <Key value="7" onClick={handleKeyPress} />
        <Key value="8" onClick={handleKeyPress} />
        <Key value="9" onClick={handleKeyPress} />
      </div>
      <div className={styles.row}>
        <Key value="undo" onClick={handleKeyPress}>
          <img alt="" src="/icon-undo.png" />
        </Key>
        <Key value="0" onClick={handleKeyPress} />
        <Key value="submit" onClick={handleKeyPress}>
          <img alt="" src="/icon-plus.png" />
        </Key>
      </div>
    </div>
  );
};

export default Keypad;
