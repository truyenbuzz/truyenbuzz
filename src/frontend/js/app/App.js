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
        <ListCovers header="Truyện của tôi" listCovers={this.props.covers.slice(0,6)}/>
        <ListCovers header="Truyện hot" listCovers={this.props.covers.slice(6,12)}/>
        <ListCovers header="Truyện mới cập nhật" listCovers={this.props.covers} />
      </div>
    )
  }
};

export default App;
