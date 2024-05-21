let initialState = {
  data: [],
  fetching: true
};


const gettingAllDataR = (state = initialState, {type, payload}) => {
  switch (type) {
    case "ALL_DATA_FETCHING":
      return {...state, data: [], fetching: true}
      break;
    case "ALL_DATA_FETCHED":
      return{...state, data: [...payload[0].actions, ...payload[1].sports, ...payload[2].adventures, ...payload[3].racing],   fetching: false}
    break;
    case "ALL_DATA_FAILED":
      return {...state, data: "Failed to fetch!", fetching: true}
    break;
    default:
      return state;
      break;
  }
}


export default gettingAllDataR;