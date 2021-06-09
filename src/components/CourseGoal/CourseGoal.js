import React, { useState } from "react";
import "./CourseGoal.css";
import CourseGoalInputForm from "../CourseGoalInput/CourseGoalInputForm";
import CourseGoalOutputList from "../CourseGoalList/CourseGoalOutputList";

function CourseGoal() {
  const [inputArray, setInputArray] = useState([]);

  const addInput = function (newInput) {
    setInputArray([{ newInput, id: Math.random() }, ...inputArray]);
    console.log(inputArray);
  };
  const deleteItem = function (id) {
    setInputArray(inputArray.filter((obj) => obj.id != id));
  };
  return (
    <div className="courseGoal">
      <CourseGoalInputForm addInput={addInput}></CourseGoalInputForm>
      <CourseGoalOutputList
        goalsArray={inputArray}
        deleteItem={deleteItem}
      ></CourseGoalOutputList>
    </div>
  );
}

export default CourseGoal;
