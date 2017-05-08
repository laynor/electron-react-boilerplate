// @flow
import moment from 'moment'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import type { Activity } from '../models'
import { PersistentStorage } from '../store/PersistentStorage'

export default class Home extends Component {

  props: {
    addActivity: (string, PersistentStorage) => void,
    refreshActivities: (PersistentStorage) => void,
    storage: PersistentStorage,
    activities: Array<Activity>
  }

  state: {
    name: string
  }

  componentDidMount() {
    this.props.refreshActivities(this.props.storage)
  }

  constructor(props: any) {
    super(props)
    this.state = {
      name: ''
    }
  }

  updateName(name: string) {
    this.setState({ name: name })
  }

  handleClick() {
    const { addActivity, storage } = this.props

    // reset view state
    this.setState({ name: '' })
    // call action
    addActivity(this.state.name, storage)
  }

  render() {
    const { activities, addActivity, storage } = this.props
    return (
      <div>
        {moment().format()}
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <Link to="/today">to Today</Link>
          {activities.map(a => <div key={a._id}>{a.name}</div>)}
          <form>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={ev => this.updateName(ev.target.value)} />
            </label>
            <button onClick={() => this.handleClick()}>Add activity</button>
          </form>
        </div>
      </div>
    );
  }
}
