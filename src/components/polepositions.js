import React, { Fragment } from "react";
const PolePositions = (props) => {
  return (
    <Fragment>
      <tr>
        <td>{props.raceName}</td>
        <td>{props.driverName} {props.driverSurname}</td>
        <td>{props.lap}</td>
      </tr>
    </Fragment>
  );
};

export default PolePositions;
