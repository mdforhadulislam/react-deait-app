export function add_more(payload) {
  return {
    type: "ADD_ROW",
    payload,
  };
}

export function set_time(payload) {
  return {
    type: "SET_TIME",
    payload,
  };
}

export function change_time(payload) {
  return {
    type: "CHANGE_TIME",
    payload,
  };
}
