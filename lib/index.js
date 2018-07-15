const path = require('path')
const fs = require('fs')
const copyDir = require('./utils/copy-dir')
const messages = require('./messages')

module.exports = function createSodaApp(opts) {
  const { projectName } = opts

  if (!projectName) {
    console.log(messages.missingProjectName())
    process.exit(1)
  }

  if (fs.existsSync(projectName) && projectName !== '.') {
    console.log(messages.alreadyExists(projectName))
    process.exit(1)
  }

  const projectPath = `${process.cwd()}/${projectName}`

  const templatePath = path.resolve(__dirname, './templates/default')

  copyDir({
    templatePath,
    projectPath,
    projectName,
  }).then(() => {
    console.log(messages.start(projectName))
  })
}
