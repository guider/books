import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './MainSectionHeader.css'
class MainHeader extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div styleName="container">
                <p styleName="p">总金额</p>
                <p styleName="p">10000</p>

            </div>
        )
    }

    componentDidMount() {

    }
}

export default CSSModules(MainHeader, styles);