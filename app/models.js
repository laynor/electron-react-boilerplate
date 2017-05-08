//@flow
import * as shortid from 'shortid'
import moment from 'moment'

export type ScheduledActivityState = 'scheduled' | 'started' | 'done' | 'canceled' | 'partial'

export type ScheduledActivity = {
  _id: ?string,
  datetime: string,
  activity_id: string,
  state: ScheduledActivityState
}

export type Activity = {
  _id: ?string,
  name: string,
}

export type WeeklyPlan = {
    _id: ?string,
    slots: Array<number>
}

export function activity(name: string = ''): Activity {
  return {
    _id: activity.startkey + shortid.generate(),
    name: name
  }
}

activity.startkey = 'Activity-'
activity.endkey = activity.startkey + '\UFFFF'


export function scheduledActivity(activity: Activity, datetime: string, state: ScheduledActivityState): scheduledActivity {
  return {
    _id: scheduledActivity.startkey + shortid.generate(),
    datetime: datetime,
    activity_id: activity._id,
    state: state
  }
}
scheduledActivity.startkey = 'ScheduledActivity-'
scheduledActivity.endkey = scheduledActivity.startkey + '\UFFFF'

export function weeklyPlan(...slots: Array<number>) {
  return {
    _id: weeklyPlan.startkey + shortid.generate(),
    slots: slots
  }
}
weeklyPlan.startkey = 'WeeklyPlan-'
weeklyPlan.endkey = weeklyPlan.startkey + '\UFFFF'
