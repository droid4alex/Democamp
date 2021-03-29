import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/message_actions'

const MessagesReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, { [action.message.id]: action.message })
    case RECEIVE_MESSAGES:
      if (Boolean(action.messages)) {
        return action.messages
      } else {
        return {}
      }
    default:
      return state
  }
}

export default MessagesReducer