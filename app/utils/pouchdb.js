let prefix
if (process.env.NODE_ENV === 'production') {
    prefix = '' // TODO: put path here
} else {
    prefix = 'http://127.0.0.1:5984/'
}

const getDbPath = (name: string) => prefix + name
export { getDbPath }
