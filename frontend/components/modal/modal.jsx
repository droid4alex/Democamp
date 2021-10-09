import React from 'react';
import { closeModal } from '../../actions/message_actions';
import { connect } from 'react-redux';
import Projects_Show_Container from '../projects_show/projects_show_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  component = <Projects_Show_Container />;
  // switch (modal) {
  //   case 'login':
  //     component = <Projects_Show_Container />;
  //     break;
  //   case 'signup':
  //     component = <Projects_Show_Container />;
  //     break;
  //   default:
  //     component = <Projects_Show_Container Object={modal} />;
  //     break;
  // }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);