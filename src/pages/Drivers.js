import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDrivers } from "../redux/actions/formulaoneActions";
import DriverStandings from "../components/driverstandings";

const Drivers = () => {
  const dispatch = useDispatch();
  const _drivers = useSelector((state) => state.formulaone);

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);
  console.log(_drivers);
  return (
    <Fragment>
      <table className="table">
        <thead>
        <tr className="headers">
          <th>POS</th>
          <th>DRIVER</th>
          <th>CAR</th>
          <th>PTS</th>
        </tr>
        </thead>
        <tbody>
          {_drivers.drivers.map((driver) => (
            <DriverStandings
              position={driver.position}
              name={driver.Driver.givenName}
              surname={driver.Driver.familyName}
              car={driver.Constructors.map((constructor) => constructor.name)}
              points={driver.points}
              driverId={driver.Driver.driverId}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Drivers;
