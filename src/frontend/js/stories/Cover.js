import React from 'react';
import {Link} from 'react-router';
class Cover extends React.Component {
  render() {
    return (
      <div className="col-md-2">
        <figure className="figure-img">
          <Link to={`/1`} className="route-img"><img src="src/frontend/cover-img/photo01.jpg" alt="embedded"/></Link>
          <div className="title"><Link to={`/1`} className="route-title">Đế Bá</Link></div>
          <div className="truncate author"><i className="glyphicon glyphicon-pencil"></i>Phạm Trần Trí</div>
          <div className="genre"><a className="route-genre" href="#">TIÊN HIỆP</a></div>
          <div className="chapter"><i className="glyphicon glyphicon-list"></i>47</div>
          <div className="view"><i className="glyphicon glyphicon-eye-open"></i>10123</div>
        </figure>
      </div>
    )
  }
}
export default Cover;
