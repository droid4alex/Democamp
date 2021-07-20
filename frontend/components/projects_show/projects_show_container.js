import Projects_Show from './projects_show';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchProject } from '../../actions/project_actions';
import { fetchProjects } from '../../actions/project_actions';
import { fetchAllProjects } from '../../actions/project_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    projects: fetchAllProjects()
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllProjects: () => dispatch(fetchAllProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects_Show);
