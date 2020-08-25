import React, { Fragment } from "react";
import  '../styles/race.scss';
import Flag from "./countryflag";

const Race = (props) => {
  return (
    <Fragment>
      <div className="race">
       <Flag  country={props.raceLocation} />
        <span className="race-name">{props.raceName}</span>
        <span className="race-date"><i>{props.raceDate}</i></span>
      </div>
   
    </Fragment>
  );
};

export default Race;
