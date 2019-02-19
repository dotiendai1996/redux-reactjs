import React, { Component } from 'react';
import './App.css';
//import {firebaseConnect} from './firebaseConnect';
import Nav from './component/Nav';
import NoteList from './component/NoteList';
import NoteForm from './component/NoteForm';
import {connect} from 'react-redux';
import AlertInfo from './component/AlertInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  showViewEdit = () => {
    if(this.props.isEdit){
      return <NoteForm></NoteForm>
    }
  }
  // addData =(item) => {
  //   firebaseConnect.push(item);
  //   console.log('them du lieu thanh cong');
  // }
  showAlert = () => {
    if(this.props.isAlert){
      return (<AlertInfo></AlertInfo>)
    }
  }
   render() {
    // firebaseConnect.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // });
    return (
      <div className="App">
        <Nav></Nav>
      {this.showAlert()}
        <div className="container mt-2">
          <div className="row">
            <NoteList></NoteList>
            {/* <NoteForm getData={(item)=>this.addData(item)}></NoteForm> */}
             {this.showViewEdit()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
    isAlert : state.isAlert
  }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     checkIsAlert: () => {
//       dispatch({type:'CHECK_IS_ALERT'})
//     }
//   }
// }
export default connect(mapStateToProps)(App);
