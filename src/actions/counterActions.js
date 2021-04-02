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