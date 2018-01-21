
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
export function isStarred(message) {
  return async(dispatch) => {
    const obj = {
      'messageIds': [message.id],
      }
    }
  }
