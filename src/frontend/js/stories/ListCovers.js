import React from 'react';
import Cover from './Cover';
class ListCovers extends React.Component {
  render() {
    const listCovers = this.props.listCovers;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 list-covers-wrap">
            <div className="col-md-1"></div>
            <div className="col-md-10 list-covers-segment">
              <div className="col-md-12 main-header"><h3>{this.props.header}</h3></div>
              <div className="list-covers-list">
                {listCovers.map(item => (<Cover cover={item} key={item.id}/>))}
              </div>
            </div>

            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default ListCovers
