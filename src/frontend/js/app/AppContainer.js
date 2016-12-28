import {connect} from 'react-redux';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    covers: state.covers
  }
};
const mapDispatchToProps = (dispatch) => {
  return {}
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default AppContainer;
