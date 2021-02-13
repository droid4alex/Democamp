import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    errors: Object.values(state.errors.session),
    formType: 'Sign up'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);