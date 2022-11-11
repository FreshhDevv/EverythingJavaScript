import * as React from "react";
import { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(event) => {
      handleAdd(event)
      inputRef.current?.blur()
      }}>
      <input
      ref={inputRef}
        type="input"
        value={todo}
        onChange ={
            (e) => setTodo(e.target.value)
        }
        placeholder="Enter a task"
        className="input_box"
      ></input>
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
