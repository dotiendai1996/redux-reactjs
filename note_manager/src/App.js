import React, { Component } from 'react';
import './App.css';
//import {firebaseConnect} from './firebaseConnect';
import Nav from './component/Nav';
import NoteList from './component/NoteList';
import NoteForm from './component/NoteForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  // addData =(item) => {
  //   firebaseConnect.push(item);
  //   console.log('them du lieu thanh cong');
  // }
   render() {
    // firebaseConnect.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // });
    return (
      <div className="App">
        <Nav></Nav>
        <div className="container mt-2">
          <div className="row">
            <NoteList></NoteList>
            <NoteForm getData={(item)=>this.addData(item)}></NoteForm>
             
          </div>
        </div>
      </div>
    );
  }
}

export default App;
