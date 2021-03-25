export const fetchTodo = id => {
  return $.ajax({
    url: `api/todos/${id}`
  })
}

export const fetchTodos = id => {
  return $.ajax({
    url: `api/projects/${id}/todos`
  })
}

export const createTodo = todo => {
  return $.ajax({
    method: 'post',
    url: `api/todos`,
    data: { todo }
  })
}

export const updateTodo = todo => {
  return $.ajax({
    method: 'post',
    url: `api/todos/${todo.id}`,
    data: { todo }
  })
}