import { GET_DRIVERS, GET_CONSTRUCTORS, GET_SCHEDULE,GET_POLE,GET_SEASON,GET_RESULTS,GET_ALL_SEASONS} from "../actions/types";

const initialState = {
  drivers: [],
  constructors: [],
  schedule: [],
  pole:[],
  allSeasons:[],
  season:[],
  result:[],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: payload,
      };
    case GET_CONSTRUCTORS:
      return {
        ...state,
        constructors: payload,
      };
    case GET_SCHEDULE:
      return {
        ...state,
        schedule: payload,
      };
      case GET_POLE:
        return {
          ...state,
          pole: payload,
        };
        case GET_ALL_SEASONS:
          return{
            ...state,
            allSeasons: payload,
          }
      case GET_SEASON:
        return{
          ...state,
          season: payload,
        }
        case GET_RESULTS:
          return{
            ...state,
            result: payload,
          }
    default:
      return state;
  }
}
