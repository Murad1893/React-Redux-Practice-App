const initialState = 0

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    case 'INCREMENT_BY_SOME':
      return state + action.payload; // so we increment by some number defined in payload

    default:
      return state;
  }

}

export default counterReducer;