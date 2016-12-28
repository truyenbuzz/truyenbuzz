import React from 'react';
import {Link} from 'react-router';
class Cover extends React.Component {
  render() {
    const cover = this.props.cover;
    return (
      <div className="col-md-2">
        <figure className="figure-img">
          <Link to={`/${cover.id}`} className="route-img"><img src={cover.display_src} alt="embedded"/></Link>
          <div className="title"><Link to={`/${cover.id}`} className="route-title">{cover.title}</Link></div>
          <div className="truncate author"><i className="glyphicon glyphicon-pencil"></i>{cover.author}</div>
          <div className="genre"><a className="route-genre" href="#">{cover.genre}</a></div>
          <div className="chapter"><i className="glyphicon glyphicon-list"></i>{cover.chapters}</div>
          <div className="view"><i className="glyphicon glyphicon-eye-open"></i>{cover.view}</div>
        </figure>
      </div>
    )
  }
}
export default Cover;
