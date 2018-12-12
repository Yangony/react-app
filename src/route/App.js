import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Redirect
import AnimatedRouter from 'react-animated-router'; //导入我们的的AnimatedRouter组件
import 'react-animated-router/animate.css';
import Index from '@/page/index'
import Page1 from '@/page/page1'
import Page2 from '@/page/page2'


export default class App extends Component {
  render () {
    return (
      <Router  basename = "react-app">
        <Switch>
          <AnimatedRouter timeout={300}>
            <Route exact path='/' component={Index} />
            <Route exact path='/page1' component={Page1} />
            <Route exact path='/page2' component={Page2} />
            {/* <Redirect from='*' to='/simple/err' /> */}
          </AnimatedRouter>
        </Switch>
      </Router>
    )
  }
}
