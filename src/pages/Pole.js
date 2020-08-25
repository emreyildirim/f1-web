import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPole } from "../redux/actions/formulaoneActions";
import PolePositions from "../components/polepositions";

const Pole = () => {
  const dispatch = useDispatch();
  const f1 = useSelector((state) => state.formulaone);

  useEffect(() => {
    dispatch(getPole());
  }, [dispatch]);
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr className="headers">
            <th>RACE</th>
            <th>DRIVER</th>
            <th>LAP TIME</th>
          </tr>
        </thead>
        <tbody>
          {f1.pole.map((poles) => (
            <PolePositions
              raceName={poles.raceName}
              driverName={poles.QualifyingResults[0].Driver.givenName}
              driverSurname={poles.QualifyingResults[0].Driver.familyName}
              lap={poles.QualifyingResults[0].Q3}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
export default Pole;
