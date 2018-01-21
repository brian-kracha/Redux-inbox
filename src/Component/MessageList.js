import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Message from './Message'
const MessageList = ({messages}) => {
  console.log(messages)
  return(
    <div>
      {messages.map(message=> {
        return(
          <Message id={message.id} key={message.id} message={message} />
        )
      })}
    </div>
  )

}
// const mapDispatchToProps = dispatch => bindActionCreators({
//   return{messages: state.messageReducer.messages}
// }, dispatch)
const mapStateToProps = state => ({
  messages: state.messageReducer.messages
})

export default connect(
  mapStateToProps,
)(MessageList);
