
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Today from '../components/Today';
import * as TodayActions from '../actions/today';

function mapStateToProps(state) {
  return {
    // planned: state.today.planned,
    // allActivities: state.activities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TodayActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Today);
