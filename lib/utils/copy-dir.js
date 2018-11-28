const path = require('path')
const Promise = require('promise')
const messages = require('../messages')
const output = require('./output')
const fs = require('fs-extra')

module.exports = function copyDir(opts) {
  const { templatePath, templateName, projectName, projectPath } = opts

  console.log(messages.copying(templateName, projectName))

  return new Promise((resolve, reject) => {
    const stopCopySpinner = output.wait('Copying files')

    fs.copy(templatePath, projectPath)
      .then(() => fs.move(
        path.resolve(projectPath, './gitignore'),
        path.resolve(projectPath, './.gitignore'),
      ))
      .then(() => fs.move(
        path.resolve(projectPath, './dockerignore'),
        path.resolve(projectPath, './.dockerignore'),
      ))
      .then(() => fs.move(
        path.resolve(projectPath, './travis.yml'),
        path.resolve(projectPath, './.travis.yml'),
      ))
      .then(() => {
        stopCopySpinner()
        output.success(`Created files for "${output.cmd(projectName)}" soda app from "${output.cmd(templateName)} template"`)
        return this
      })
      .then(resolve)
      .catch((err) => {
        stopCopySpinner()
        output.error('Copy command failed, try again.')
        reject(err)
        process.exit(1)
      })
  })
}
