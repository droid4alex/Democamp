import * as APIUtil from '../util/todo_api_util'

export const RECEIVE_TODO = 'RECEIVE_TODO'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const RECEIVE_TODO_ERRORS = 'RECEIVE_TODO_ERRORS'

const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
})

const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
})

const receiveTodoErrors = errors => ({
  type: RECEIVE_TODO_ERRORS,
  errors
})

export const fetchTodo = id => dispatch => {
  return APIUtil.fetchTodo(id).
    then(res => dispatch(receiveTodo(res.todo))).
    fail(res => dispatch(receiveTodoErrors(res.responseJSON.errors)))
}

export const fetchTodos = id => dispatch => {
  return APIUtil.fetchTodos(id).
    then(res => dispatch(receiveTodos(res.todos))).
    fail(res => dispatch(receiveTodoErrors(res.responseJSON.errors)))
}

export const createTodo = id => dispatch => {
  return APIUtil.createTodo(id).
    then(res => dispatch(receiveTodo(res.todo))).
    then(res => dispatch(fetchTodoList(res.todo.todoListId))).
    fail(res => dispatch(receiveTodoErrors(res.responseJSON.errors)))
}

export const updateTodo = id => dispatch => {
  return APIUtil.updateTodo(id).
    then(res => dispatch(receiveTodo(res.todo))).
    fail(res => dispatch(receiveTodoErrors(res.responseJSON.errors)))
}