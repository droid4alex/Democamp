import { RECEIVE_PROJECT, RECEIVE_PROJECTS, RECEIVE_PROJECT_ERRORS } from '../actions/project_actions'

const _errors = []

const ProjectErrorsReducer = (state = _errors, action) => {
  switch (action.type) {
    case RECEIVE_PROJECT:
      return _errors
    case RECEIVE_PROJECTS:
      return _errors
    case RECEIVE_PROJECT_ERRORS:
      return action.errors
    default:
      return state
  }
}

export default ProjectErrorsReducer