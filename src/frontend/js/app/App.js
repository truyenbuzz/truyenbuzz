import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ListCovers from '../stories/ListCovers';
import Footer from './Footer';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ListCovers />
        <ListCovers />
      </div>
    )
  }
};

export default App;
