import React from 'react';

class Cover extends React.Component {
  render() {
    return (
      <div className="col-md-2">
        <figure className="figure-img">
          <a id="route-img" href="#"><img src="src/frontend/cover-img/photo01.jpg" alt="embedded"/></a>
          <div className="title"><a id="route-title" href="#"></a>Đế Bá Con Chiên Ngoan Đạo</div>
          <div className="truncate author"><i className="glyphicon glyphicon-pencil"></i>Phạm Trần Trí</div>
          <div className="genre"><a id="route-genre" href="#">TIÊN HIỆP</a></div>
          <div className="chapter"><i className="glyphicon glyphicon-list"></i>47</div>
          <div className="view"><i className="glyphicon glyphicon-eye-open"></i>10123</div>
        </figure>
      </div>
    )
  }
}
export default Cover;
