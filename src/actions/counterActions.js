// we define action here that will trigger the case statements in the reducers

export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}


export const incrementBySome = (num) => {
  return {
    type: 'INCREMENT_BY_SOME',
    payload: num // so the action will send the payload to the reducer
  }
}