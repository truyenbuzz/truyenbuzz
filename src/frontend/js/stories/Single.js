import React from 'react';

class Single extends React.Component {
  render() {
    return (
      <div className="test">
        <header id="single-header">TÊN TRUYỆN</header>
        <div className="middle">
          <div className="row">
            <div className="col-md-3">
              <ul className="cover">
                <li id="single-image" className="visible-lg visible-md cover">Hình ảnh</li>
                <li id="single-author" className="visible-lg visible-md cover">Tác giả</li>
                <li id="single-category" className="visible-lg visible-md cover">Thể loại</li>
                <li id="single-source" className="visible-lg visible-md cover">Nguồn</li>
              </ul>
            </div>

            <div className="col-md-9">
              <h1>Tên truyện</h1>
              <p className="hidden-xs hidden-sm">
                <span className="label label-info">Trạng thái</span>
                <span className="label label-chap">Số chương</span>
                <span className="label label-view">Số lượt xem</span>
                <button className="label label-fav btn btn-default btn-sm" id="like-icon">
                  <span className="glyphicon glyphicon-heart-empty" id="like-icon"></span>
                  <span className="fav-content1">Yêu Thích</span>
                </button>
                <button className="label label-fav btn btn-default btn-sm" id="unlike-icon">
                  <span className="glyphicon glyphicon-heart-empty" id="like-icon"></span>
                  <span className="fav-content1">Bỏ Yêu Thích</span>
                </button>
              </p>
              <div id="single-intro" className="content">Giới thiệu</div>
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
    )
  }
}

export default Single;
