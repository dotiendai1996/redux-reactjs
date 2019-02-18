import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCezDV06vh7FvXuIHBIkq2c3-YblpHOIZI",
    authDomain: "notereactmanager.firebaseapp.com",
    databaseURL: "https://notereactmanager.firebaseio.com",
    projectId: "notereactmanager",
    storageBucket: "notereactmanager.appspot.com",
    messagingSenderId: "1068016219993"
  };

  export const firebaseConnect =  firebase.initializeApp(config);

  var data = firebase.database().ref('dataForNote/');

  //sua du lieu
  //var data = firebase.database().ref('dataForNote/note1');
  
  //xem du lieu
    data.once('value').then(function(snapshot){
        console.log(snapshot);
    })