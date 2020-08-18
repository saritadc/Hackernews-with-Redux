import React from 'react';
import myReducer from '..//../redux/reducer';

class SingleItem extends React.Component {
  componentWillMount(){
    
  //   const filteredData = this.props.itemsList.filter(item => item.id !== itemDetails.id)
  //   if(filteredData.length === 1) {

  //   } 
  //   else {

    const itemID = this.props.itemID
    const itemDetailsURL = "https://hacker-news.firebaseio.com/v0/item/${itemID}.json?print=pretty";
    fetch(itemDetailsURL)
    .then(res => res.json())
      .then(itemDetails => {
        this.props.updateitemDetails(itemDetails)
    })
    // }
  }
  render(){
    const itemsList = this.props.itemsList
    return(
      <div>
        {/* ID: {itemID}
        Name: {name} */}
      </div>
    )
  }
}

export default SingleItem;