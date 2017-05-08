// @flow
import { copy } from '../utils/utils'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '../components/Home';
import * as DocsActions from '../actions/docs'
function mapStateToProps(state) {
  return {
    storage: state.storage,
    activities: state.docs.activities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DocsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

