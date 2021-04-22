import * as APIUtil from '../util/project_api_util'

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS'

const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
})

const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
})

const receiveProjectErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
})

export const fetchProject = id => dispatch => {
  return APIUtil.fetchProject(id).
    then(res => dispatch(receiveProject(res.project))).
    fail(res => dispatch(receiveProjectErrors(res.responseJSON.errors)))
}

export const fetchProjects = (id) => dispatch => {
  return APIUtil.fetchProjects(id).
    then(res => dispatch(receiveProjects(res.projects))).
    fail(res => dispatch(receiveProjectErrors(res.responseJSON.errors)))
}

export const fetchAllProjects = () => dispatch => {
  return APIUtil.fetchAllProjects().
    then(res => dispatch(receiveProjects(res))).
    fail(res => dispatch(receiveProjectErrors(res.responseJSON.errors)))
}

export const createProject = project => dispatch => {
  return APIUtil.createProject(project).
    then(res => dispatch(receiveProject(res.project))).
    fail(res => dispatch(receiveProjectErrors(res.responseJSON.errors)))
}

export const updateProject = project => dispatch => {
  return APIUtil.updateProject(project).
    then(res => dispatch(receiveProject(res.project))).
    fail(res => dispatch(receiveProjectErrors(res.responseJSON.errors)))
}