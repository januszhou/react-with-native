import store from './store';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

export { doLogin, doSearchFaculty } from './epic';

export { store, Provider, connect };
export default store;
