const totalTimeReducer = (state = 0, action) => {
  switch (action.type) {
    case "time":
      return action.value;
    default:
      return state;
  }
};

export default totalTimeReducer;
