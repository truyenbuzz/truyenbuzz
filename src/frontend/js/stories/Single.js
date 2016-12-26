import React from 'react';

var Single = React.createClass({
  getInitialState: function() {
    return JSON.parse(localStorage.getItem('single')),
  }
  render() {
    return (
      <div className="test">
        <header id="single-header">{this.state.name}</header>
        <div className="middle">
          <div className="row">
            <div className="col-md-3">
              <ul className="cover">
                <li id="single-image">{this.state.img}</li>
                <li id="single-author">{this.state.author}</li>
                <li id="single-category">{this.state.category}</li>
                <li id="single-source">{this.state.source}</li>
              </ul>
            </div>

            <div className="col-md-9">
              <h1>{this.state.name}</h1>
              <p className="hidden-xs hidden-sm">
                <button className="label label-fav btn btn-default btn-sm" id="like-icon">
                  <span className="glyphicon glyphicon-heart-empty" id="like-icon"></span>
                  <span className="fav-content1">Yêu Thích</span>
                </button>
                <button className="label label-fav btn btn-default btn-sm" id="unlike-icon">
                  <span className="glyphicon glyphicon-heart-empty" id="like-icon"></span>
                  <span className="fav-content1">Bỏ Yêu Thích</span>
                </button>
              </p>
              <div id="single-intro" class="content">{this.state.intro}</div>
            </div>
          </div>
        </div>
    )
  }
)}
