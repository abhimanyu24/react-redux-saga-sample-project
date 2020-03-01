const initialState = {
  age: 20,
  loading: false
};

// const initialState = fromJS({
//   age: 20,
//   loading: false
// });
// const reducer = (state = initialState, action) => {
//   // const newState = { ...state };
//   // const newState = state;
//   // console.log("state, newState", state, newState);

//   switch (action.type) {
//     case "AGE_UP_ASYNC":
//       return state.set("age", state.get("age") + action.value).set("loading", false)
//       // newState.age += action.value;
//       // newState.loading = false;
//       break;
//     case "AGE_UP_START":
//       newState.loading = true;
//       break;
//     case "AGE_DOWN":
//       newState.age -= action.value;
//       break;
//   }
//   return newState;
// };

const reducer = (state = initialState, action) => {
  // const newState = { ...state };
  const newState = state;
  console.log( "state, newState", state, newState );

  switch (action.type) {
    case "AGE_UP_ASYNC":
      newState.age += action.value;
      newState.loading = false;
      break;
    case "AGE_UP_START":
      newState.loading = true;
      break;
    case "AGE_DOWN":
      newState.age -= action.value;
      break;
  }
  return newState;
};

export default reducer;
