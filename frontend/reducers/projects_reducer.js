  
import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from '../actions/project_actions'

const _projects = {}

const ProjectsReducer = (state = _projects, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PROJECT:
      
      return Object.assign({}, state, { [action.project]: action.project })
      // return action
    case RECEIVE_PROJECTS:
      return action.projects
    default:
      return state
  }
}

export default ProjectsReducer