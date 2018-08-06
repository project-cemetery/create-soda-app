const execa = require('execa')
const getInstallCmd = require('./get-install-cmd')
const output = require('./output')

module.exports = function installPackages(projectPath) {
  const stopSpinner = output.wait('Start dependencies installation ...')
  const cmd = getInstallCmd()

  if (!cmd) {
    const err = new Error('Package installation failed. Before install \'yarn\' or \'npm\' package.')
    stopSpinner()
    output.error(err)
    process.exit(1)
  }

  return execa(cmd, ['install'], { cwd: projectPath })
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
