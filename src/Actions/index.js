
const localHost = 'http://localhost:8082'



      // this.setState({messages: (json._embedded.messages).reverse()})

export const MESSAGE_RECIEVED= "MESSAGE_RECIEVED"
export function fetchMessage(){
  return async (dispatch)=>{
    let info = await fetch(`${localHost}/api/messages`)
    let json = await info.json()
    dispatch({
      type:MESSAGE_RECIEVED,
      messages: json._embedded.messages
    })

  }
}

export const MESSAGE_STARRED = 'MESSAGE_STARRED'
export function isStarred(message){
  console.log("in isStarred");
  return async (dispatch) => {
    console.log('in dispatch');
    const obj = {
      'messageIds': [message.id],
      "command": "star",
      "star": !message.starred
    }
    const response = await fetch(`${localHost}/api/messages`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(obj)
    })
    console.log('THATS THE SPOT');
    dispatch({
      type: MESSAGE_STARRED,
      messages: message
    })
  }
}

export const MESSAGE_SELECTED= 'MESSAGE_SELECTED'
export function selectedMessage(message){
  return async (dispatch) =>{
    const obj = {
      'messageIds': [message.id],
      'command': "selected",
      "selected": !message.selected
    }
    const response = await fetch(`${localHost}/api/messages`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(obj)
    })
    console.log('THATS THE SPOT');
    dispatch({
      type: MESSAGE_SELECTED,
      messages: message
    })
  }
}
