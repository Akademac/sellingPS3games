const miniNavR = (state=false, {type, payload}) => {
  switch (type) {
    case "SHOW_MINI_NAV":
      return payload;
      break;
    case "HIDE_MINI_NAV":
      return payload
    default:
      return state
      break;
  }
}

export default miniNavR;