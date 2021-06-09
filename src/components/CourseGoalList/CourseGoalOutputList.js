import React from "react";
import "./CourseGoalOutputList.css";

function CourseGoalOutputList(props) {
  const deleteHandler = function (event) {
    event.preventDefault();
    // console.log(event);
    props.deleteItem(Number(event.target.id));
  };
  return (
    <div className="list">
      {props.goalsArray.map((input, i) => (
        <div className="listItem" id={`${input.id}`} onClick={deleteHandler}>
          {input.newInput}
        </div>
      ))}
    </div>
  );
}

export default CourseGoalOutputList;
