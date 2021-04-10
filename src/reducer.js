export const initialState = {
  basket: [],
  user: null,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "Add_To_BASKET":
      //Logic for adding items to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Logic for adding items to basket
      return { state };
    default:
      return state;
  }
};
export default reducer;
