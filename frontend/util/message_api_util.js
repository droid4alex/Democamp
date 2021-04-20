export const fetchMessage = id => {
  return $.ajax({
    url: `api/messages/${id}`
  })
}
export const fetchMessages = id => {
  return $.ajax({
    url: `api/projects/${id}/messages`
  })
}

export const fetchAllMessages = () => {
  return $.ajax({
    url: `api/messages/`
  })
}

export const createMessage = message => {
  return $.ajax({
    url: `api/messages`,
    method: 'post',
    data: { message }
  })
}

export const updateMessage = message => {
  return $.ajax({
    url: `api/messages/${message.id}`,
    method: 'patch',
    data: { message }
  })
}