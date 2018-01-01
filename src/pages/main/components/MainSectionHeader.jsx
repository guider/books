import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './MainSectionHeader.css'
import {withRouter} from 'react-router-dom'

class MainHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div styleName="container">
                <p styleName="p" style={{flex: 1, textAlign: 'left'}}>总金额</p>
                <p styleName="p" onClick={this.handleAddClick.bind(this)}>新增</p>
            </div>
        )
    }

    handleAddClick(e) {
        console.log(this)
        this.props.history.push('/addRecord')

    }

    componentDidMount() {

    }
}

export default withRouter(CSSModules(MainHeader, styles));

// push1
// import React from "react";
// import {withRouter} from "react-router-dom";
//
// class MyComponent extends React.Component {
//     click() {
//         this.props.history.push("/some/Path");
//     }
// }
// export default withRouter(MyComponent);
//
// push2
// import React from "react";
// import PropTypes from "prop-types";
//
// class MyComponent extends React.Component {
//     static contextTypes = {
//         router: PropTypes.object
//     }
//     constructor(props, context) {
//         super(props, context);
//     }
//     myFunction() {
//         this.context.router.history.push("/some/Path");
//     }
// }