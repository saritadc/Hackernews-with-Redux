const initialState = {
  topStories: [],
  bestStories: [],
  newStories: [],
  itemDetails: []
}

const myReducer =(state = initialState, action) => {

  switch(action.type){
    case "UPDDATE_TOP_STORIES":
      return {
        ...state, topStories: action
        .topStories
      }
    case "UPDATE_LIST_DETAILS":
      return{
        ...state,
        itemDetails: [...state.itemDetails, action.itemDetails]
      }
    default:
      return state;
  }
}

export default myReducer;