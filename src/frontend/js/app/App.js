import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import ListCovers from '../stories/ListCovers';
import Single from '../stories/Single';

class App extends React.Component {
  render() {
    return (
      <div>
        <ListCovers />
      </div>
    )
  }
};

export default App;
