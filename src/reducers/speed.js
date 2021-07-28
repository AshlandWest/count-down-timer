const speedReducer = (state = 1000, action) => {
  switch (action.type) {
    case "speed":
      return action.value;
    default:
      return state;
  }
};

export default speedReducer;
