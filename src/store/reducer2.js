const initialState = {
  currentUser: {
    id: 1,
    name: "someone"
  },
  loading: false,
  error: false
};

const reducer2 = (state = initialState, action) => {
  const newState = {
    ...state,
    currentUser: {
      ...state.currentUser
    }
  };

  switch (action.type) {
    case "CHANGE_USER_START":
      newState.loading = true;
      break;

    case "CHANGE_USER_SUCCESS":
      newState.currentUser.name = action.name;
      newState.loading = false;
      break;

    case "AGE_DOWN":
      newState.age -= action.value;
      break;
  }
  return newState;
};

export default reducer2;


{
  a: 1,
  b: 2,
  c: { d: 2}
}

{
  a: 1,
    b: 2,
      c: { d: 1}
}