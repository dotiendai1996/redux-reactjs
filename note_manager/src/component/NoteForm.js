import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle :'',
            noteContent:'',
            id:''
        }
    }
    
    componentWillMount() {
        if(this.props.editItem) // edit case{
            this.setState({
                noteContent: this.props.editItem.noteContent,
                noteTitle: this.props.editItem.noteTitle,
                id: this.props.editItem.id
            });
        }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
       // console.log(this.state);
    }
    isAdd = () => {
        if(this.props.isAdd){
            return <h4>Thêm ghi chú</h4>
        }else{
            return <h4>Sửa ghi chú</h4>
        }
    }
    btnSaveClick = (title, content) => {
        if(this.props.editItem.id){
            const editObj = {};
            editObj.id = this.props.editItem.id;
            editObj.noteTitle = title;
            editObj.noteContent = content;
           // console.log(editObj);
            this.props.editDataStore(editObj);
            this.props.changeToShowViewEdit();
            this.props.alertOn("Sửa nội dung thành công !", "info");
        }else{
            var item = {};
            item.noteTitle = title;
            item.noteContent = content;
        //     //gui len app
        //    this.props.getData(item);
        //gui len store
        this.props.addDataStore(item);
        this.props.alertOn("Thêm mới nội dung thành công !", "success");
        }
    }
    render() {
       
        //console.log(this.props.editItem);
        return (
            <div className="col-4">
  { this.isAdd()}
  <form>
  <div className="form-group">
    <label htmlFor="noteTitle">Tieu de note</label>
    <input defaultValue={this.props.editItem.noteTitle} onChange={(event)=>{this.isChange(event)}} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="noteTitle" placeholder="Nhap tieu de note" />
  </div>
  <div className="form-group">
    <label htmlFor="noteContent">Noi dung note</label>
    <textarea defaultValue={this.props.editItem.noteContent} onChange={(event)=>{this.isChange(event)}} className="form-control" name="noteContent" id="noteContent" style={{height: '100px'}} aria-describedby="noteContent" placeholder="Nhap noi dung note" />
  </div>
  <button type="reset" onClick={()=>this.btnSaveClick(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary w-100">Save</button>
  </form>
</div>

        );
    }
}
//this.props.editItem
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        isAdd : state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type: 'ADD_DATA',getItem})
        },
        editDataStore: (newItem) => {
            dispatch({type: 'EDIT',newItem})
        },
        changeToShowViewEdit: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
          },
          alertOn: (alertContent, alertColor) => {
            dispatch({type:'ALERT_ON',alertContent, alertColor})
          },
          alertOff: () => {
            dispatch({type:'ALERT_OFF'})
          }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);