import Projects_Show from './projects_show';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchProject } from '../../actions/project_actions';
import { fetchAllTodos } from '../../actions/todo_actions';
import { fetchAllProjects } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {                                        
  return {
    currentUser: state.entities.users[state.session.id],
    todos: fetchAllTodos()
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  fetchProject: (id) => dispatch(fetchProject(id)),
  fetchAllTodos: () => dispatch(fetchAllTodos()),
  projectId: ownProps.match.params.projectId
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Projects_Show));