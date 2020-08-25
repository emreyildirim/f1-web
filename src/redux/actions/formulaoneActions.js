import axios from "axios";
import {
  GET_DRIVERS,
  GET_CONSTRUCTORS,
  GET_SCHEDULE,
  GET_POLE,
  GET_SEASON,
  GET_RESULTS,
  GET_ALL_SEASONS
} from "./types";

export const getDrivers = () => async (dispatch) => {
  const res = await axios.get(
    "https://ergast.com/api/f1/current/driverStandings.json"
  );

  dispatch({
    type: GET_DRIVERS,
    payload: res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings,
  });
};

export const getConstructors = () => async (dispatch) => {
  const res = await axios.get(
    "https://ergast.com/api/f1/current/constructorStandings.json"
  );

  dispatch({
    type: GET_CONSTRUCTORS,
    payload:
      res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings,
  });
};

export const getSchedule = () => async (dispatch) => {
  const res = await axios.get("https://ergast.com/api/f1/current.json");

  dispatch({
    type: GET_SCHEDULE,
    payload: res.data.MRData.RaceTable.Races,
  });
};

export const getPole = () => async (dispatch) => {
  const res = await axios.get(
    "https://ergast.com/api/f1/2020/qualifying/1.json"
  );

  dispatch({
    type: GET_POLE,
    payload: res.data.MRData.RaceTable.Races,
  });
};

export const getAllSeasons =() => async (dispatch)=>{
  const res = await axios.get (
    "http://ergast.com/api/f1/seasons.json?limit=85"
  );
  dispatch({
    type:GET_ALL_SEASONS,
    payload:res.data.MRData.SeasonTable.Seasons
  })
}

export const getSeason = (season) => async (dispatch) => {
    const res = await axios.get(
        "https://ergast.com/api/f1/"+season+".json"
      );
      dispatch({
        type: GET_SEASON,
        payload: res.data.MRData.RaceTable.Races,
      });
};

export const getResult = (season,id) => async (dispatch) => {
  const res = await axios.get(
      "http://ergast.com/api/f1/"+season+"/"+id+"/results.json"
    );
    dispatch({
      type: GET_RESULTS,
      payload: res.data.MRData.RaceTable.Races,
      
    });
};
