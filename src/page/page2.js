import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { Result, Icon, WhiteSpace } from 'antd-mobile';
import TopLine from '@/components/common/topLine'
const myImg = src => <img src={src} className="spe am-icon" alt="" />;
class App extends Component {

  goback() {
    console.log(this.props.history);
    this.props.history.goBack('/')
  }


  render() {
    return (
      <div className="outer">
        <TopLine history={this.props.history} title='这是第二页内容'></TopLine>
        <Result
            img={<Icon type="cross-circle-o" className="spe" style={{ fill: '#F13642' }} />}
            title="无法完成操作"
            message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
        />
      </div>
    );
  }
}

export default App;
