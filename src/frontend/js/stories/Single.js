import React from 'react';

class Single extends React.Component {
  render() {
    const id = this.props.params.coverID;
    const index = this.props.covers.findIndex(cover => (cover.id === id));
    const cover = this.props.covers[index];
    return (
      <div className="container-fluid">
        <div className="col-md-1"></div>
        <div className="col-md-10 test">
          <header id="single-header">{cover.title}</header>
          <div className="middle">
            <div className="row">
              <div className="col-md-3">
                <ul className="cover">
                  <li id="single-image" className="visible-lg visible-md cover"><img src={cover.display_src}/></li>
                  <li id="single-author" className="visible-lg visible-md cover"><strong>Tác giả: {cover.author}</strong></li>
                  <li id="single-category" className="visible-lg visible-md cover"><strong>Thể loại: {cover.genre}</strong></li>
                  <li id="single-source" className="visible-lg visible-md cover"><strong>Nguồn: {cover.source}</strong></li>
                </ul>
              </div>

              <div className="col-md-9 single-body">
                <h1>{cover.title}</h1>
                <p className="hidden-xs hidden-sm">
                  <span className="label label-info">{cover.status}</span>
                  <span className="label label-chap">{cover.chapters} chương</span>
                  <span className="label label-view">{cover.view} lượt xem</span>
                  <button className="label label-fav btn btn-default btn-sm" id="like-icon">
                    <span className="glyphicon glyphicon-heart-empty" id="like-icon"></span>
                    <span className="fav-content1">Yêu Thích</span>
                  </button>
                  <button className="label label-fav btn btn-default btn-sm" id="unlike-icon">
                    <span className="glyphicon glyphicon-heart-empty" id="like-icon"></span>
                    <span className="fav-content1">Bỏ Yêu Thích</span>
                  </button>
                </p>
                <div id="single-intro" className="content">
                  {cover.intro}
                </div>
              </div>
            </div>


          </div>

          <ul className="chapters-list">
            <li className="chapters">Chương 1</li>
            <li className="chapters">Chương 2</li>
            <li className="chapters">Chương 3</li>
            <li className="chapters">Chương 4</li>
            <li className="chapters">Chương 5</li>
            <li className="chapters">Chương 6</li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
    )
  }
}

export default Single;
