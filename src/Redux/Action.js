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
