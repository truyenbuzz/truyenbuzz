import React from 'react';

class Single extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-1"></div>
        <div className="col-md-10 test">
          <header id="single-header">Đế Bá</header>
          <div className="middle">
            <div className="row">
              <div className="col-md-3">
                <ul className="cover">
                  <li id="single-image" className="visible-lg visible-md cover"><img src="src/frontend/cover-img/photo01.jpg"/></li>
                  <li id="single-author" className="visible-lg visible-md cover"><strong>Tác giả: Phạm Trần Trí</strong></li>
                  <li id="single-category" className="visible-lg visible-md cover"><strong>Thể loại: TIÊN HIỆP</strong></li>
                  <li id="single-source" className="visible-lg visible-md cover"><strong>Nguồn: Webtruyen.vn</strong></li>
                </ul>
              </div>

              <div className="col-md-9 single-body">
                <h1>Đế Bá</h1>
                <p className="hidden-xs hidden-sm">
                  <span className="label label-info">Đang cập nhật</span>
                  <span className="label label-chap">132 chương</span>
                  <span className="label label-view">21312 lượt xem</span>
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
                  With local storage, web applications can store data locally within the user's browser.

                  Before HTML5, application data had to be stored in cookies, included in every server request. Local storage is more secure, and large amounts of data can be stored locally, without affecting website performance.

                  Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.

                  Local storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.

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
