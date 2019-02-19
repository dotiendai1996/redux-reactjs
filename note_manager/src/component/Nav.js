import React, { Component } from 'react';
import {connect} from 'react-redux';
class Nav extends Component {
    handleAdd = (event) => {
        event.preventDefault();
        this.props.changeToShowViewEdit();
        this.props.checkIsAdd();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={(event)=>this.handleAdd(event)}>Thêm note</a>
                    </li>
                    </ul>
                </div>
            </nav>

        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeToShowViewEdit: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
          },
          checkIsAdd : () => {
              dispatch({type: 'CHECK_IS_ADD'})
          }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);