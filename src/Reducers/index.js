import { combineReducers } from 'redux'
import{ MESSAGE_RECIEVED,MESSAGE_STARRED } from '../Actions'

const initialState= {
  messages:[]
}

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
            })
          }
    default:
    console.log('here')
    return state
  }

}
export default combineReducers({messageReducer})
