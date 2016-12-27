import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ListCovers from '../stories/ListCovers';
import Footer from './Footer';
import Single from '../stories/Single';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ListCovers />
        <ListCovers />

        <Single />

      </div>
    )
  }
};

export default App;
