const {createConnection, createStore} = require('schemis')
const schemas = require('@cholang/blog-schemas')


const uri = process.env.MONGODB_URI || ''
console.log('MONGODB_URI:', uri)

const connection = createConnection(uri)

const store = createStore({
    connection,
    schemas
})


module.exports = store
