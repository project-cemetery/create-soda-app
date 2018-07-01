const path = require('path')
const fs = require('fs')
const copyDir = require('./utils/copy-dir')
const messages = require('./messages')

module.exports = function createSodaApp (opts) {
  const projectName = opts.projectName

  if (!projectName) {
    console.log(messages.missingProjectName())
    process.exit(1)
  }

  if (fs.existsSync(projectName) && projectName !== '.') {
    console.log(messages.alreadyExists(projectName))
    process.exit(1)
  }

  const projectPath = opts.projectPath = process.cwd() + '/' + projectName

  const templatePath = path.resolve(__dirname, './templates/default')

  copyDir({
    templatePath: templatePath,
    projectPath: projectPath,
    projectName: projectName
  }).then(function () {
    console.log(messages.start(projectName))
  })
}
