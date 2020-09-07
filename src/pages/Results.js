import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSeason,
  getResult,
  getAllSeasons,
} from "../redux/actions/formulaoneActions";
import Podium from "../components/podium";
import ResultsTable from "../components/resultstable";
import "../styles/Results.scss";


const Results = () => {
  const dispatch = useDispatch();
  const f1 = useSelector((state) => state.formulaone);

  useEffect(() => {
    dispatch(getSeason("current"));
    dispatch(getResult("current", "last"));
    dispatch(getAllSeasons());
  }, [dispatch]);
  return (
    <Fragment>
      <div className="dropdowns">
        <ul className="list" id="list-1">
          {f1.allSeasons.slice(0).reverse().map((seasons) => (
              <li
                className="list-items"
                onClick={() => dispatch(getSeason(seasons.season))}
              >
                {seasons.season}
              </li>
            ))}
        </ul>

        <ul className="list" id="list-2">
          {f1.season.map((season) => (
            <li
              className="list-items"
              index={season.round}
              value={season.round}
              onClick={() => dispatch(getResult(season.season, season.round))}
            >
              <span>{season.raceName} </span>{" "}
              <span>{season.Circuit.circuitName}</span>
            </li>
          ))}
        </ul>

        <a href="https://f1tv.formula1.com/en/" className="tv">
          <span className="watch">WATCH ON </span>
          <div className="logo" />
          <span className="logo-text">TV</span>
        </a>
      </div>

      {f1.result.length > 0 ? (
        f1.result.map((races) => (
          <div className="Results">
            {races.Results.map((podium, key) =>
              key < 3 ? (
                <Podium
                  id={key}
                  driverId={podium.Driver.driverId}
                  name={podium.Driver.givenName}
                  surname={podium.Driver.familyName}
                  team={podium.Constructor.name}
                  position={podium.position}
                  number={podium.number}
                  teamLogo={podium.Constructor.constructorId}
                />
              ) : null
            )}
            <table id="table-results" className="table">
              <thead>
                <tr className="headers">
                  <th>POS</th>
                  <th>DRIVER</th>
                  <th>NUMBER</th>
                  <th>CAR</th>
                </tr>
              </thead>
              <tbody>
                {races.Results.map((results) => (
                   <ResultsTable 
                   position={results.position}
                   driverId={results.Driver.driverId}
                   name={results.Driver.givenName}
                   surname={results.Driver.familyName}
                   team={results.Constructor.name}
                   number={results.number}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <div>{null}</div>
      )}
    </Fragment>
  );
};
export default Results;
