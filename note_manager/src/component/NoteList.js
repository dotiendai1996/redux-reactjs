import React, { Component } from 'react';
import {firebaseConnect} from '../firebaseConnect';
import NoteItem from './NoteItem';

class NoteList extends Component {
constructor(props) {
  super(props);
  this.state = {
    dataFirebase : []
  }
}

componentWillMount() {
  firebaseConnect.on('value',(notes)=>{
   // console.log(notes.val());
   // console.log(notes.val().noteTitle);
    var arrayData = [];
    notes.forEach(element => {
      const key = element.key;
      const noteTitle = element.val().noteTitle;
      const noteContent = element.val().noteContent;
      arrayData.push({
        id:key,
        noteTitle:noteTitle,
        noteContent:noteContent
      });
    });
    this.setState({
      dataFirebase : arrayData
    });
});
}
  // getData = () => {
  //  if(this.state.dataFirebase){
  //   console.log(this.state.dataFirebase);
  //  }
  // }
    render() {

        return (
            <div className="col">
  <div id="noteList" role="tablist" aria-multiselectable="true">
        {
          this.state.dataFirebase.map((value, key)=>{
            return (
              <NoteItem 
              key={key} 
              i={key} 
              id={value.id} 
              noteTittle={value.noteTitle} 
              noteContent={value.noteContent}
              note = {value}>
              </NoteItem>
            )
          })
        }   
  </div>
</div>

        );
    }
}

export default NoteList;