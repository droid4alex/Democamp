import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, RECEIVE_MESSAGE_ERRORS } from '../actions/message_actions'

const MessageErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE || RECEIVE_MESSAGES:
      return []
    case RECEIVE_MESSAGE_ERRORS:
      return action.errors
    default:
      return state
  }
}

export default MessageErrorsReducer