//@flow
import { PersistentStorage } from '../store/PersistentStorage'
import { getDbPath } from '../utils/pouchdb'
import { activity } from '../models'

export type StorageState = {
    storage: PersistentStorage
}

const APP_NAME = 'habit'
const defaultStorage = new PersistentStorage(APP_NAME)

const defaultDb = defaultStorage.db
defaultDb.get('test').then(
    console.log,
    () => {
        defaultDb.put({ _id: 'test', value: 'test' })
        defaultDb.bulkDocs([
          activity('programming'),
          activity('reading')
        ])
    })

export default function storage(state: PersistentStorage = defaultStorage, action: any): PersistentStorage {
    return state
}
