//@flow
const PouchDB = require('electron').remote.require('pouchdb')
import type { Database } from 'pouchdb'

import { getDbPath } from '../utils/pouchdb.js'

import type { Activity } from '../models'
import {activity} from '../models'

export class PersistentStorage {
  name: string
  db: Database<any>


  constructor(name: string) {
    this.name = name
    this.db = new PouchDB(getDbPath(name))
  }
}
