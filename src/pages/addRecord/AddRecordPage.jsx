import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './AddRecordPage.css'
class AddRecordPage extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                AddRecordPage
            </div>
        )
    }

    componentDidMount() {

    }
}

export default CSSModules(AddRecordPage, styles);