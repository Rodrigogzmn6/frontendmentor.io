import { useContext } from "react";
import { KeyButton } from "../KeyButton/KeyButton";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./KeyPad.css";

export const KeyPad = ({
  onNumberPressed,
  onDelPressed,
  onDotPressed,
  onOperationPressed,
  onResetPressed,
  onEqualsPressed,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`key-pad ${theme} gap-4 flex flex-col p-6 rounded-xl`}>
      <div className="gap-4 grid grid-cols-[1fr_1fr_1fr_1fr]">
        <KeyButton
          value={"7"}
          keyType={"mainKey"}
          handleClick={onNumberPressed}
        />
        <KeyButton
          value={"8"}
          keyType={"mainKey"}
          handleClick={onNumberPressed}
        />
        <KeyButton
          value={"9"}
          keyType={"mainKey"}
          handleClick={onNumberPressed}
        />
        <KeyButton
          value={"DEL"}
          keyType={"funcKey"}
          handleClick={onDelPressed}
        />
        <KeyButton
          value={"4"}
          keyType={"mainKey"}
          handleClick={onNumberPressed}
        />
        <KeyButton
          value={"5"}
          keyType={"mainKey"}
          handleClick={onNumberPressed}
        />
        <KeyButton
          value={"6"}
          keyType={"mainKey"}
          handleClick={onNumberPressed}
        />
        <KeyButton
          value={"+"}
          keyType={"mainKey"}
          handleClick={onOperationPressed}
        />
        <KeyButton
          value={"1"}
          keyType={"mainKey"}
          handleClick={onNumberPressed}
        />
        <KeyButton
          value={"2"}
          keyType={"mainKey"}
          handleClick={onNumberPressed}
        />
        <KeyButton
          value={"3"}
          keyType={"mainKey"}
          handleClick={onNumberPressed}
        />
        <KeyButton
          value={"-"}
          keyType={"mainKey"}
          handleClick={onOperationPressed}
        />
        <KeyButton value={"."} keyType={"mainKey"} handleClick={onDotPressed} />
        <KeyButton
          value={"0"}
          keyType={"mainKey"}
          handleClick={onNumberPressed}
        />
        <KeyButton
          value={"/"}
          keyType={"mainKey"}
          handleClick={onOperationPressed}
        />
        <KeyButton
          value={"x"}
          keyType={"mainKey"}
          handleClick={onOperationPressed}
        />
      </div>
      <div className="gap-4 grid grid-cols-[1fr_1fr]">
        <KeyButton
          value={"RESET"}
          keyType={"funcKey"}
          handleClick={onResetPressed}
        />
        <KeyButton
          value={"="}
          keyType={"eqKey"}
          handleClick={onEqualsPressed}
        />
      </div>
    </div>
  );
};
