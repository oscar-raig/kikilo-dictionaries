const ymlReader = require('js-yaml')
const fs = require('fs')
const rimraf = require('rimraf')

const outputDirectory = 'dist/'

function generateJSON() {
  rimraf.sync(outputDirectory)
  fs.mkdirSync(outputDirectory)

  const outputPath = 'dist/dictionary.json'

  const fileContents = fs.readFileSync('./resources/euskera.yml', 'utf8')
  const data = ymlReader.safeLoad(fileContents)
  fs.writeFileSync(outputPath, JSON.stringify(data))
}

module.exports = generateJSON
