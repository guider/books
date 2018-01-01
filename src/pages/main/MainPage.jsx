import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './MainPage.css'

import MainHeader from './components/MainHeader'
import MainSectionHeader from './components/MainSectionHeader'
class MainPage extends Component {

    constructor() {
        super();
        this.state = {}
    }


    render() {
        return (
            <div styleName="container">
                <MainHeader />
                <MainSectionHeader/>

            </div>
        )
    }

    componentDidMount() {

    }
}

export default CSSModules(MainPage, styles);