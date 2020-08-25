import React, { Fragment } from "react";
import DriverPhotos from "./driverphotos";
const DriverStandings = (props) => {
  return (
    <Fragment>
      <tr>
        <td className="table-position">{props.position}</td>
        <td className="table-photo"><DriverPhotos  driverId={props.driverId}/>{props.name} {props.surname}</td>
        <td>{props.car}</td>
        <td>{props.points}</td>
      </tr>
    </Fragment>
  );
};

export default DriverStandings;
