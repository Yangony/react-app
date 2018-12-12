import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { Result, Icon } from 'antd-mobile';
import TopLine from '@/components/common/topLine'
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
            title="这是第二个页面"
            message=""
        />
      </div>
    );
  }
}

export default App;
