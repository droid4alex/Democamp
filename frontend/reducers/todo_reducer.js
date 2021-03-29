import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions'

const TodosReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_TODO:
      return Object.assign({}, state, { [action.todo.id]: action.todo })
    case RECEIVE_TODOS:
      return action.todos
    default:
      return state
  }
}

export default TodosReducer