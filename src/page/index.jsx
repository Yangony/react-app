import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { Result, List, WingBlank } from 'antd-mobile';
import TopLine from '@/components/common/topLine'

const Item = List.Item;

class App extends Component {

  goback(id) {
    this.props.history.push('/page'+id)
  }


  render() {
    return (
      <div className="outer">
        <TopLine history={this.props.history} title='这里是首页'></TopLine>
        <Result
            // img={<Icon type="cross-circle-o" className="spe" style={{ fill: '#F13642' }} />}
            title="欢迎使用"
            message="这是首页，点击下面按钮进入其他页面"
        />
        <WingBlank/>
        <List renderHeader={() => 'Basic Style'} className="my-list">
          <Item extra={'extra content'} onClick={() => this.goback('1')}>第一个页面</Item>
          <Item extra={'extra content'} onClick={() => this.goback('2')}>第二个页面</Item>
        </List>
      </div>
    );
  }
}

export default App;
