import Schedule from './schedule';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllProjects } from '../../actions/project_actions';
import { fetchAllTodos } from '../../actions/todo_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    projects: fetchAllProjects(),
    todos: fetchAllTodos()
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllProjects: () => dispatch(fetchAllProjects()),
  fetchAllTodos: () => dispatch(fetchAllTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
