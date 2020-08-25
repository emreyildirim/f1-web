import React, { Fragment } from "react";
const ConstructorStandings = (props) => {
  return (
    <Fragment>
      <tr>
        <td>{props.position}</td>
        <td>{props.team}</td>
        <td>{props.points}</td>
      </tr>
    </Fragment>
  );
};

export default ConstructorStandings;
