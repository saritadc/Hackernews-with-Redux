import React from 'react';
import { connect } from 'react-redux';
import { Link  } from 'react-router-dom';

import SingleItem from '../../components/singleItems/singleItems';
import { updateTopStories } from '../../redux/action'

class TopStories extends React.Component {
  
  componentWillMount(){
    const topStoriesURL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
    fetch(topStoriesURL)
    .then(res => res.json())
    .then(topStories => {
      this.props.updateTopStories(topStories)
      console.log(topStories)
    })
  }

  render() {
    const topStories = this.props.topStories
    return (
      <div>
         {topStories.map(storyID => <SingleItem id={topStories[storyID] }/>)}
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