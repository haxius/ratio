import React, { FC } from "react";
import styles from "./styles.module.scss";

interface TextInputProps {
  value?: any;
  onChange?: any;
  showPlaceholder?: boolean;
  maxLength?: number;
}

const TextInput: FC<TextInputProps> = ({
  value = "",
  onChange = () => {},
  showPlaceholder,
  maxLength,
}) => {
  return (
    <input
      type="text"
      className={styles.textInput}
      value={showPlaceholder ? "" : value}
      placeholder={value}
      onChange={(e) => onChange(e.target.value)}
      maxLength={maxLength}
    />
  );
};

export default TextInput;
