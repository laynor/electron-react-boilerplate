//@flow
import { getDbPath } from '../utils/pouchdb.js'
const PouchDB = require('electron').remote.require('pouchdb')

type PouchDBType = any

export type PouchDBState = {
    db: PouchDBType
}

const defaultDb: PouchDBType = new PouchDB(getDbPath('default-db'))

defaultDb.get('test').then(
    console.log,
    () => {
        defaultDb.put({ _id: 'test', value: 'test' })
    })

export default function pouchdb(state: PouchDBType = defaultDb, action: any): PouchDBType {
    return state
}
