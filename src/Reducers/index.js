import { combineReducers } from 'redux'
import{ MESSAGE_RECIEVED,MESSAGE_STARRED,MESSAGE_SELECTED } from '../Actions'

const initialState= {
  messages:[]
}
var allSelected = false
const messageReducer = (state=initialState, action)=>{
  switch (action.type) {
    case MESSAGE_RECIEVED:
      return{
        ...state,
        messages: action.messages
      }

      case 'MESSAGE_STARRED':
          return {
            ...state,
            messages: state.messages.map(mess=> {
              if(mess.id === action.messages.id) {
                mess.starred = !mess.starred
              }
              return mess
            }),
          }
          case "MESSAGE_SELECTED":
          return {
            ...state,
            messages: state.messages.map(mess=> {
              if(allSelected === false){

              mess.selected = true
              allSelected =true
            }
            else{
              mess.selected = false
              allSelected=false
            }
              return mess
            }),
          }
    default:
    console.log('here')
    return state
  }

}
export default combineReducers({messageReducer})
