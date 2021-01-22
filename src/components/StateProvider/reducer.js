//initialState: How looks like the state at the beginning, when the app is loaded
export const initialState = {
   term: null
};

//Whenever we want to change the data layer, we need to dispatch an ACTION
export const actionTypes = {
   SET_SEARCH_TERM: "SET_SEARCH_TERM"
};

const reducer = (state, action) => {
   switch(action.type) {
      case actionTypes.SET_SEARCH_TERM:
         return {
            ...state,
            term: action.term
         };

      default:
         return state;
   }
}

export default reducer;