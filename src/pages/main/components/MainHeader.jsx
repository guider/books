import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './MainHeader.css'
class MainHeader extends Component {
    constructor() {
        super()
        this.state = {}
    }
    static generateList() {
        return [0, 1, 2].map((item,index) => {
            return <p styleName="item" key={item+''}>{item}</p>
        })
    }
    render() {
        return (
            <div styleName="container">
                <p styleName="p">总金额</p>
                <p styleName="p">10000</p>

                <div styleName="itemContainer">
                    {MainHeader.generateList()}
                </div>

            </div>
        )
    }

    componentDidMount() {

    }
}

export default CSSModules(MainHeader, styles);