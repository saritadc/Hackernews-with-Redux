import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';

//importing files
import ReduxTopStories from './pages/topStories/topStories';

import Store from './redux/store';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <ReduxTopStories></ReduxTopStories>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
