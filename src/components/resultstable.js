import React, { Fragment } from "react";
import DriverPhotos from "./driverphotos";
const ResultsTable = (props) => {
  return (
    <Fragment>
      <tr>
        <td className="table-position">{props.position}</td>
        <td className="table-photo"><DriverPhotos  driverId={props.driverId}/>{props.name} {props.surname}</td>
        <td>{props.number}</td>
        <td>{props.team}</td>
      </tr>
    </Fragment>
  );
};

export default ResultsTable;
