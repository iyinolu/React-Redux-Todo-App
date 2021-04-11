const initialState = {
  status: "All",
  colors: []
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/statusFilterChanged": {
      return {
        ...state,
        status: action.payload
      };
    }
    case "filters/colorFilterChanged": {
      return {
        // Add logic for identifying filter type
        ...state,
        colors: [...state.colors, action.payload.color]
      };
    }
    default: {
      return state;
    }
  }
}
