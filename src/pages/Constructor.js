import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getConstructors } from "../redux/actions/formulaoneActions";
import ConstructorStandings from "../components/constructorstandings";

const Constructors = () => {
  const dispatch = useDispatch();
  const _constructors = useSelector((state) => state.formulaone);

  useEffect(() => {
    dispatch(getConstructors());
  }, [dispatch]);

  return (
    <Fragment>
      <table className="table">
        <thead>
        <tr className="headers">
          <th>POS</th>
          <th>TEAM</th>
          <th>PTS</th>
        </tr>
        </thead>
        <tbody>
      {_constructors.constructors !== undefined
        ? _constructors.constructors.map((constructorteam) => (
          <ConstructorStandings 
           position={constructorteam.position}
           team={constructorteam.Constructor.name}
           points={constructorteam.points}
          />
          ))
        : null}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Constructors;
