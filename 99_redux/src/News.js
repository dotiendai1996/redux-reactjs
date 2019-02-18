import React, { Component } from 'react';
import {connect} from 'react-redux';
class News extends Component {
    // useChangeEditStatusInStore = ()=> {
    //     var {dispatch} = this.props;
    //     // var dispatch = this.props.dispatch; //Cach 2
    //     dispatch({type:'CHANGE_EDIT_STATUS'})
    // }
    render() {
        return (
            <div>
                <h2>Welcome to React - Redux</h2>
                <button onClick={()=>this.props.useChangeEditStatusInStore()} className="btn">
                        Click to change status
                </button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        num: state.num
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useChangeEditStatusInStore: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);