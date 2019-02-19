import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteItem extends Component {
  
  btnUpdateClick = () => {
    //change stt to view Edit
    this.props.changeToShowViewEdit();
    //get Data from NoteList
    this.props.pushDataToEditItem(this.props.note);
  }
  btnDeleteClick = () => {
    this.props.deleteFun(this.props.id);
    this.props.alertOn("Xóa nội dung thành công !", "danger");
  }
    render() {
        return (
            <div className="card">
            <div className="card-header" role="tab" id={this.props.i}>
              <h5 className="mb-0">
                <a data-toggle="collapse" data-parent="#noteList" href={"#content"+this.props.i} aria-expanded="true" aria-controls={"content"+this.props.i}>
                  {this.props.noteTittle}
                </a>
                <div className="btn-group float-right">
                  <button onClick={()=>this.btnUpdateClick()} className="btn btn-outline-info">Sửa</button>
                  <button onClick={()=>this.btnDeleteClick()} className="btn btn-outline-danger">Xóa</button>
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
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
    editItem : state.editItem
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeToShowViewEdit: () => {
      dispatch({type:'CHANGE_EDIT_STATUS'})
    },
    pushDataToEditItem: (editObj) => {
      dispatch({type:'GET_DATA',editObj})
    },
    deleteFun: (idNoteDel) => {
      dispatch({type:'DELETE',idNoteDel})
    },
    alertOn: (alertContent, alertColor) => {
        dispatch({type:'ALERT_ON',alertContent, alertColor})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);