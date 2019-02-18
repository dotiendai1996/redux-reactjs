import React, { Component } from 'react';
import './App.css';
import {firebaseConnect} from './firebaseConnect';
import * as firebase from 'firebase';

class App extends Component {

  pushData = () => {
      var dataConnect =  firebase.database().ref('dataForNote/');
      dataConnect.push({
        title : 'test push',
        noteContent : 'test push thanh cong'
      });
      console.log('Ban them moi du lieu thanh cong');
  }
  deleteData = (id) =>{
    var dataConnect =  firebase.database().ref('dataForNote/');
    dataConnect.child(id).remove();
  }
  render() {
    console.log(firebaseConnect);
    return (
      <div className="App">
        <h2>Welcome to Firebase and Redux</h2>
        <button onClick={()=>this.pushData()}>Click to push data</button>
        <hr/>
        <button onClick={()=>this.deleteData()}>Click to delele data</button>
      </div>
    );
  }
}

export default App;
