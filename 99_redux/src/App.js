import React, { Component } from 'react';
import './App.css';
import News from './News';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="gg">
        
          {this.props.dulieu}
          <News></News>
      </div>
    );
  }
}
//this.props.dulieu
const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}
export default connect(mapStateToProps)(App);
