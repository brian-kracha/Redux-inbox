import React, { Component } from 'react'
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import {isStarred, selectedMessage} from '../Actions'
const Message= ({message,isStarred, selectedMessage,selected})=> {
  if(message.selected===true){

    selected = "selected"
  }
  let star ='star fa fa-star-o'
  if(message.starred === true){
    star ='star fa fa-star'
  }

  const selectedClass = selected ? 'selected' : ""

return(


        <div className={`row message read ${selectedClass}`}>
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2" onClick={()=>{selectedMessage(message)}}>
                <input type="checkbox" checked={`${selected}`} />
              </div>
              <div className="col-xs-2" onClick={()=>{isStarred(message)}}>
                <i className={`${star}`}></i>
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            <a href="#">
              {message.subject}
            </a>
          </div>
        </div>

  )}
const mapStateToProps = state => ({
  messages: state.messageReducer.messages
})

const mapDispatchToProps = dispatch => bindActionCreators({
  isStarred:isStarred ,selectedMessage:selectedMessage
}, dispatch)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
