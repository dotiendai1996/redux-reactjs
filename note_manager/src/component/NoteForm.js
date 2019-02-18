import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle :'',
            noteContent:''
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
       // console.log(this.state);
    }
    addData = (title, content) => {
        var item = {};
        item.noteTitle = title;
        item.noteContent = content;
    //     //gui len app
    //    this.props.getData(item);
    //gui len store
    this.props.addDataStore(item);
    }
    render() {
        return (
            <div className="col-4">
  <h3>Sua noi dung note</h3>
  <form>
  <div className="form-group">
    <label htmlFor="noteTitle">Tieu de note</label>
    <input onChange={(event)=>{this.isChange(event)}} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="noteTitle" placeholder="Nhap tieu de note" />
  </div>
  <div className="form-group">
    <label htmlFor="noteContent">Noi dung note</label>
    <input  onChange={(event)=>{this.isChange(event)}} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="noteContent" placeholder="Nhap noi dung note" />
  </div>
  <button type="reset" onClick={()=>this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary w-100">Save</button>
  </form>
</div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        testConnect: state.testConnect
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type: 'ADD_DATA',getItem})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);