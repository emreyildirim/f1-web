import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSchedule } from "../redux/actions/formulaoneActions";
import Race from "../components/race";
import "../styles/Schedule.scss";

const Schedule = () => {
  const dispatch = useDispatch();
  const f1 = useSelector((state) => state.formulaone);

  useEffect(() => {
    dispatch(getSchedule());
  }, [dispatch]);

  function ChangeFormateDate(oldDate)
{
   return oldDate.toString().split("-").reverse().join("/");
}
  console.log(f1.schedule)
  return (
    <Fragment>
      <div className="schedules">
        {f1.schedule.map((schedules) => (
          <Race raceLocation={schedules.Circuit.Location.country.toLowerCase()} raceName={schedules.raceName} raceDate={ChangeFormateDate(schedules.date)} />
        ))}
      </div>
    </Fragment>
  );
};

export default Schedule;
