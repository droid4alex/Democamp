import Projects from './projects';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchProject } from '../../actions/project_actions';
import { fetchProjects } from '../../actions/project_actions';
import { fetchAllProjects } from '../../actions/project_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchProject: id => dispatch(fetchProject(id)),
  fetchProjects: id => dispatch(fetchProjects(id)),
  fetchAllProjects: () => dispatch(fetchAllProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
