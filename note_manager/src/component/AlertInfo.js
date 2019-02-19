import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import {connect} from 'react-redux';
class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.alertOff();
    }
    render() {
        return (
            <AlertContainer>
		            <Alert showIcon timeout={1000} onDismiss={()=>this.handleDismiss()} type={this.props.alertType}>
            {this.props.alertMessage}</Alert>
	        </AlertContainer>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({type:'ALERT_OFF'})
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertMessage: state.alertMessage,
        alertType : state.alertType
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);