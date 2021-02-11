import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    errors: Object.values(state.errors.session),
    formType: 'login',
    buttonText: 'Login'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

