//@flow
import { combineReducers } from 'redux';
import type { Activity, WeeklyPlan } from '../models'
import { REFRESH_ACTIVITIES, REFRESH_CURRENT_PLAN } from '../actions/docs'
import { weeklyPlan } from '../models'



type Action =
  { type: string, payload: Array<Activity> } |
  { type: string, payload: WeeklyPlan } |
  { type: string, payload: Activity }

export type ActivitiesState = {
    activities: Array<Activity>
}

function activities(state: Array<Activity> = [], action: Action): Array<Activity> {
  switch (action.type) {
    case REFRESH_ACTIVITIES:
      return action.payload || state;
    default:
      return state
  }
}

export type WeeklyPlanState = {
  weeklyPlan: WeeklyPlan
}

const defaultWeeklyPlan: WeeklyPlan = weeklyPlan(2, 2, 2, 2, 2, 2, 2)

function weeklyPlans(state: WeeklyPlan = defaultWeeklyPlan, action: Action): WeeklyPlan {
  switch (action.type) {
    case REFRESH_CURRENT_PLAN:
      return action.payload || state;
    default:
      return state
  }
}

export default combineReducers({ activities, weeklyPlans })
