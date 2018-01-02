import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './AddRecordPage.css'
import {SegmentedControl, List,InputItem} from 'antd-mobile'

const Item = List.Item;
const Brief = Item.Brief;

class AddRecordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {disabled: false}
    }

    handleClick = (e) => {
        console.log(this)


    };


    render() {
        return (
            <div styleName="container">
                <SegmentedControl values={['定期', '活期']} style={{width: '160px', marginTop: '30px'}}/>

                <List styleName="my-list" style={{marginTop: '20px',width: 'calc('+ "('100vw'" - "'25px')" + ')'}}>
                    <Item extra={'extra content'} arrow="horizontal" onClick={this.handleClick}>投资平台</Item>
                <InputItem
                           type='money'
                           placeholder="start from right"
                           clear
                           onChange={(v) => { console.log('onChange', v); }}
                           onBlur={(v) => { console.log('onBlur', v); }}
                >光标在右</InputItem>
               </List>
                <List renderHeader={() => 'Subtitle'} styleName="my-list">
                    <Item arrow="horizontal" multipleLine onClick={() => {
                    }}>
                        Title <Brief>subtitle</Brief>
                    </Item>
                    <Item
                        arrow="horizontal"
                        multipleLine
                        onClick={() => {
                        }}
                        platform="android"
                    >
                        ListItem （Android）<Brief>There may have water ripple effect of <br/> material if you set the
                        click event.</Brief>
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {
                        }}
                    >
                        Title <Brief>subtitle</Brief>
                    </Item>
                </List>
                <List renderHeader={() => 'Customized Right Side（Empty Content / Text / Image）'} styleName="my-list">
                    <Item>Title</Item>
                    <Item arrow="horizontal" onClick={() => {
                    }}>Title</Item>
                    <Item extra="extra content" arrow="horizontal" onClick={() => {
                    }}>Title</Item>
                    <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                          multipleLine>
                        Title <Brief>subtitle</Brief>
                    </Item>
                </List>
                <List renderHeader={() => 'Align Vertical Center'} styleName="my-list">
                    <Item multipleLine extra="extra content">
                        Title <Brief>subtitle</Brief>
                    </Item>
                </List>
                <List renderHeader={() => 'Icon in the left'} styleName="my-list">
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={() => {
                        }}
                    >My wallet</Item>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => {
                        }}
                        arrow="horizontal"
                    >
                        My Cost Ratio
                    </Item>
                </List>
                <List renderHeader={() => 'Other'} styleName="my-list">
                    <Item disabled={this.state.disabled} extra="" onClick={() => {
                        console.log('click', this.state.disabled);
                        this.setState({disabled: true});
                    }}>Click to disable</Item>
                    <Item>
                        <select defaultValue="1">
                            <option value="1">Html select element</option>
                            <option value="2" disabled>Unable to select</option>
                            <option value="3">option 3</option>
                        </select>
                    </Item>
                </List>
            </div>
        )
    }

    componentDidMount() {

    }
}

export default CSSModules(AddRecordPage, styles);