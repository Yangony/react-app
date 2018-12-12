import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { List } from 'antd-mobile'

import TopLine from '@/components/common/topLine'

const Item = List.Item;

class App extends Component {

  goback() {
    this.props.history.push('/page2')
  }

  render() {
    return (
      <div className="outer">
        <TopLine history={this.props.history} title='这是第一页内容'></TopLine>
        <List renderHeader={() => 'Basic Style'} className="my-list">
          <Item extra={'extra content'} onClick={() => this.goback()}>Title</Item>
        </List>
      </div>
    );
  }
}

export default App;
