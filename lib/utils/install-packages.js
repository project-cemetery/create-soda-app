const execa = require('execa')
const messages = require('../messages')
const getInstallCmd = require('./get-install-cmd')
const output = require('./output')

module.exports = function installPackages(projectPath) {
  const stopSpinner = output.wait('Start dependencies installation ...')

  const cmd = getInstallCmd()

  if (cmd == 'yarn') {
    return execa(`yarn`, { cwd: projectPath })
      .then(() => {
        stopSpinner()
        output.success('Packages installed')
      })
      .catch((err) => {
        console.error(err)
        output.error('Package installation failed, try again.')
        process.exit(1)
      })
  } else {
    return execa('npm', ['install'], { cwd: projectPath })
      .then(() => {
        stopSpinner()
        output.success('Packages installed')
      })
      .catch((err) => {
        console.error(err)
        output.error('Package installation failed, try again.')
        process.exit(1)
      })
  }
}
