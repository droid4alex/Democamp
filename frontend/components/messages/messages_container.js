import Messages from './messages';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllMessages } from '../../actions/message_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    messages: fetchAllMessages()
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllMessages: () => dispatch(fetchAllMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
