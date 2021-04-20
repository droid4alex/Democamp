import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import ProjectsReducer from './projects_reducer';
import MessagesReducer from './message_reducer';
import TodosReducer from './todo_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: ProjectsReducer,
  messaages: MessagesReducer,
  todos: TodosReducer
});

export default entitiesReducer;