


export const updateTopStories = (topStories) => {
  return {
    type: "UPDDATE_TOP_STORIES",
    payload: topStories
  }
}

export const updateItemDetails = (itemDetails) => {
  return {
    type: "UPDATE_ITEMDETAILS",
    itemDetails: itemDetails
  }
}



