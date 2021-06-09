import React, { useState, useRef } from "react";
import "./CourseGoalInputForm.css";
import Button from "../UI/Button/Button.js";

function CourseGoalInputForm(props) {
  const input = useRef();
  const [isValid, setIsValid] = useState(true);

  const submitHandler = function (event) {
    event.preventDefault();
    if (input.current.value.trim().length === 0) {
      setIsValid(false);
    } else {
      props.addInput(input.current.value);
    }
    input.current.value = "";
  };
  return (
    <form
      autoComplete="off"
      className={`inputForm ${isValid ? "" : "invalid"}`}
      onSubmit={submitHandler}
    >
      <label for="input">Enter the Goal</label>
      <input id="input" type="text" ref={input}></input>
      <Button type="submit">Add Goal..</Button>
    </form>
  );
}

export default CourseGoalInputForm;
