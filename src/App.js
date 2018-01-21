import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { createStore } from 'redux'
import {bindActionCreators} from 'redux'
// import {addTodo,deleteTodo} from './actions'
// import {reducers} from './reducers'
import Toolbar from './Component/Toolbar'
import Message from './Component/Message'
import MessageList from './Component/MessageList'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {

    return (
      <div className="App">
        <Toolbar/>
        <MessageList />
      </div>
    );
  }
}

export default App
