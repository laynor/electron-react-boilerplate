import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import type { Activity } from '../models'
import { activity } from '../models'
// import styles from '.Today.css'

export default class Today extends Component {
  props: {
    // planned: Array<Activity>
  }
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h1>Today</h1>
        <ul>
          <li>foo</li>
          <li>bar</li>
        </ul>
        <h2>Available</h2>
        <ul>
          <li>baz (5)</li>
          <li>moo (3)</li>
          <li>boo (-4)</li>
        </ul>
      </div>
    )
  }
}
