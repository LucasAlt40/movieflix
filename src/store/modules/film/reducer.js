const INITIAL_STATE = {};

function film(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_STATE_FILM": {
      const { film } = action.payload;

      state = film;
      
      return state;

      break;
    }
    default: {
      return state;
    }
  }
}

export default film;
