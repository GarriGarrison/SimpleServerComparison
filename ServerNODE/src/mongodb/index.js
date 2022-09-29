const {MongoClient} = require('mongodb')

const client = new MongoClient(
  // 'mongodb://root:example@127.0.0.1:5052/?compressors=disabled&gssapiServiceName=mongodb'
  // 'mongodb://root:example@localhost:5052/crud?authMechanism=DEFAULT'
  // 'mongodb://localhost:5052/?authMechanism=DEFAULT'
  'mongodb://root:example@127.0.0.1:5052/crud?directConnection=true&serverSelectionTimeoutMS=2000'
)

module.exports = client
