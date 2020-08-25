import React, { Fragment } from "react";
import DriverPhoto from "../components/driverphotos";
import TeamLogo from "../components/teamlogos";
import "../styles/podium.scss";
import Car from "./carphotos";
const Podium = (props) => {
  return (
    <Fragment>
      <div className="card" id={props.id}>

        <div className="top">
        <span className="driver-number">{props.number}</span> 
          <span className="driver-photo">
          <DriverPhoto driverId={props.driverId} />
          </span>
        </div>
        <div className="middle">
          <span className="driver-name">
            {props.name} &nbsp;
            {props.surname}
          </span>
          <span className="team-name">{props.team}</span>
          <span className="team-logo">
          <TeamLogo  teamLogo={props.teamLogo} />
          </span>
        </div>

         <div className="bottom">
            <span className="driver-position">{props.position}</span>
          <Car car={props.teamLogo} />
          </div>

 
      </div>
    </Fragment>
  );
};
export default Podium;
