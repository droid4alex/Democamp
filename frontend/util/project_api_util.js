export const fetchProject = id => {
  return $.ajax({
    url: `api/projects/${id}`
  })
}

export const fetchAllProjects = () => {
  return $.ajax({
    url: `api/projects/`
  })
}

export const fetchProjects = (id) => {
  return $.ajax({
    url: `api/users/${id}/projects`
  })
}

export const createProject = project => {
  return $.ajax({
    url: `api/projects`,
    method: 'post',
    data: { project }
  })
}

export const updateProject = project => {
  return $.ajax({
    url: `api/projects/${project.id}`,
    method: 'patch',
    data: { project }
  })
}