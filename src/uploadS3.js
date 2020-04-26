const REGION = require('../settings').REGION
const BUCKET = require('../settings').BUCKET

const s3FolderUpload = require('s3-folder-upload')

const {AWS_ACCESS_KEY, AWS_SECRET_KEY} = process.env

const credentials = {
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region: REGION,
  bucket: BUCKET
}

const options = {
  useFoldersForFileTypes: false,
  useIAMRoleCredentials: false
}

const filesOptions = {
  'dictionary.json': {
    CacheControl: 'public, max-age=3600'
  }
}

const invalidations = undefined

module.exports = function upload() {
  if (!credentials.accessKeyId || !credentials.secretAccessKey) {
    throw new Error('Undefined credentials')
  }
  s3FolderUpload('dist', credentials, options, invalidations, filesOptions)
  console.log('deployed>>')
}
