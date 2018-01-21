import React, { Component } from 'react'
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import {isStarred} from '../Actions'
class Message extends Component {
  constructor(props){
  super(props)
}
  render(){
    let star ='star fa fa-star-o'
    if(this.props.message.starred === true){
      star ='star fa fa-star'
    }
    console.log(this.props)
      return(
        <div className="row message read selected">
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input type="checkbox" checked="checked" />
              </div>
              <div className="col-xs-2" onClick={()=>{isStarred(this.props.message)}}>
                <i className={`${star}`}></i>
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            <a href="#">
              {this.props.message.subject}
            </a>
          </div>
        </div>
    )
  }
}
const mapStateToProps = state => ({
  messages: state.messageReducer.messages
})

const mapDispatchToProps = dispatch => bindActionCreators({
  isStarred:{isStarred}
}, dispatch)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
