import React from 'react';
import { connect } from 'react-redux';

import SingleItem from '../../components/singleItems/singleItems';
import { updateTopStories } from '../../redux/action'

class TopStories extends React.Component {
  
  componentWillMount(){
    const topStoriesURL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
    fetch(topStoriesURL)
    .then(res => res.json())
    .then(topStories => {
      console.log('topStories', { topStories});
      topStories = topStories.slice(0,8);
      this.props.updateTopStories(topStories)
    })
  }

  render() {
    const topStories = this.props.topStories;
    return (
      <div>
        {topStories.map((storyID) => (<SingleItem id={storyID}/>)) }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topStories: state.topStories
  }
}

const mapDispatchToProps = dispatch => {
  return{
    updateTopStories: (topStories) => dispatch(updateTopStories(topStories))
  }
}

const ReduxTopStories = connect(mapStateToProps, mapDispatchToProps)(TopStories);
export default ReduxTopStories;