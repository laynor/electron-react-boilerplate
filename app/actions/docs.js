//@flow
import * as _ from 'lodash'
import * as u from '../utils/utils'
import type { WeeklyPlan, Activity } from '../models'
import type { ActivitiesState } from '../reducers/docs'
import type { PersistentStorage } from '../store/PersistentStorage'

import { activity } from '../models'

type Action = {
  type: string,
  payload: any
}

export const
  REFRESH_ACTIVITIES = 'REFRESH_ACTIVITIES',
  ADD_ACTIVITY = 'ADD_ACTIVITY',
  ADD_WEEKLY_PLAN = 'ADD_WEEKLY_PLAN',
  REFRESH_CURRENT_PLAN = 'REFRESH_CURRENT_PLAN'

export function addActivity(name: string, storage: PersistentStorage) {
  return (dispatch: (Action) => void, getState: () => ActivitiesState) => {
    //const { /* TODO */ } = getState();

    storage.db.put(activity(name)).then(res => {

      dispatch({
        type: ADD_ACTIVITY,
        payload: _.assign({}, { rev: res.rev })
      });
      _refreshActivities(storage, dispatch)

    }).catch(console.error)
  };
}

function _refreshActivities(storage: PersistentStorage, dispatch: (Action) => void) {
  storage.db.allDocs({
    startkey: activity.startkey,
    endkey: activity.endkey,
    include_docs: true
  }).then(res => {

    dispatch({
      type: REFRESH_ACTIVITIES,
      payload: res.rows.map(r => r.doc)
    })

  }).catch(console.error)
}

export function refreshActivities(storage: PersistentStorage) {
  console.log('storage: ', storage)
  return (dispatch: (Action) => void) => {
    _refreshActivities(storage, dispatch)
  }
}

// WeeklyPlan
export function addWeelkyPlan(plan: WeeklyPlan, storage: PersistentStorage) {
  return (dispatch: (Action) => void, getState: () => any) => {
    //const { /* TODO */ } = getState();
    storage.db.put(plan).then(res=>{
      const act = {
        type: ADD_WEEKLY_PLAN,
        payload: u.copy(plan, {rev: res.rev})
      }
      console.log(act)
      dispatch(act)
    })
  }
}

export function refreshCurrentPlan(storage: PersistentStorage) {
  return (dispatch: () => void, getState: () => any) => {
    dispatch({
      type: REFRESH_CURRENT_PLAN,
      payload: []
    })
  }
}
