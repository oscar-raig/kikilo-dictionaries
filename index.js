const upload = require('./src/uploadS3')
const generateJSON = require('./src/generateJSON')

const BUILD_COMMAND = 'build'
const DEPLOY_COMMAND = 'deploy'
const DEFAULT_COMMAND = BUILD_COMMAND
const AVAILABLE_COMMANDS = [BUILD_COMMAND, DEPLOY_COMMAND]

const commandArguments = process.argv.slice(2)
let command = DEFAULT_COMMAND
console.log('arguments: ', commandArguments)
if (
  commandArguments.length !== 1 ||
  !AVAILABLE_COMMANDS.includes(commandArguments[0])
) {
  throw Error(`Usage: npm . (${DEPLOY_COMMAND}|${BUILD_COMMAND})`)
} else {
  command = commandArguments[0]
}

switch (command) {
  case DEPLOY_COMMAND:
    break
  case BUILD_COMMAND:
    break
  default:
    throw Error('Unexpected command argument')
}
generateJSON()
if (command === DEPLOY_COMMAND) {
  upload()
}
