import React, { Component } from 'react';

class NoteItem extends Component {
    render() {
        return (
            <div className="card">
            <div className="card-header" role="tab" id={this.props.i}>
              <h5 className="mb-0">
                <a data-toggle="collapse" data-parent="#noteList" href={"#content"+this.props.i} aria-expanded="true" aria-controls={"content"+this.props.i}>
                  {this.props.noteTittle}
                </a>
                <div className="btn-group float-right">
                  <button className="btn btn-outline-info">Sửa</button>
                  <button className="btn btn-outline-danger">Xóa</button>
                </div>
              </h5>
            </div>
            <div id={"content"+this.props.i} className="collapse in" role="tabpanel" aria-labelledby={this.props.i}>
              <div className="card-body">
              {this.props.noteContent}
              </div>
            </div>
          </div>
        );
    }
}

export default NoteItem;