import React from 'react';
import {connect} from 'react-redux';
import {updateItemDetails} from '..//../redux/action';

class SingleItem extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      Item: {}
    }
  }
  componentWillMount(){
    const itemListID = this.props.id;
    const filteredData = this.props.itemDetails.filter(item => item.id !== itemListID)
    console.log('filteredData', filteredData)
    if (filteredData.length ===1) {
      this.setState({
        Item: filteredData
      })
    }
    else {
      const itemDetailsURL = "https://hacker-news.firebaseio.com/v0/item/${itemID}.json?print=pretty";
      fetch(itemDetailsURL)
      .then(res => res.json())
        .then(itemDetails => {
          this.props.updateItemDetails(itemDetails)
          this.setState({
            Item: itemDetails
          })
        })
    }
  }
  render(){
    const itemsList = this.props.itemDetails
    console.log(itemsList)
    return(
      <div>
        {this.state.Item.title}
        {this.state.Item.by}
      </div>
    );
  }
}
const mapStateProps = state => {
  return{
    itemDetails: state.itemList
  }
}

const mapDispatchToProps = dispatch => {
  return{
    updateItemDetails: (itemDetails) => dispatch(updateItemDetails(itemDetails))
  }
}

export default connect(mapStateProps, mapDispatchToProps)(SingleItem);
