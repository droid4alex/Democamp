import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import ProjectErrorsReducer from './project_errors_reducer';
import TodoErrorsReducer from './todo_errors_reducer';
import MessageErrorsReducer from './message_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  project: ProjectErrorsReducer,
  todo: TodoErrorsReducer,
  message: MessageErrorsReducer
});

export default errorsReducer;