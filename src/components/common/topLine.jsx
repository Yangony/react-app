import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class TopLine extends Component {

  goback() {
    console.log(this.props.history);
    this.props.history.goBack('/')
  }

  onLeftClick () {
    let {history, url} = this.props
    if (history){
      if (url) {
        this.props.history.push(url)
      } else {
        this.props.history.goBack()
      }
    } else {
      window.location = url
    }
  }

  render() {
    let {title} = this.props
    if (!title) {
      title = '页面标题'
    }
    return (
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.onLeftClick()}
          // rightContent={[
          //   <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          //   <Icon key="1" type="ellipsis" />,
          // ]}
        >{title}</NavBar>
    );
  }
}

export default TopLine;
