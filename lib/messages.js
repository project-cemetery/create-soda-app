const chalk = require('chalk')
const getInstallCmd = require('./utils/get-install-cmd')
const output = require('./utils/output')

const program = {
  name: 'create-soda-app'
}

exports.missingProjectName = function () {
  return `
Please specify the project directory:

  ${chalk.cyan(program.name)} ${chalk.green('<project-directory>')}

For example:

  ${chalk.cyan(program.name)} ${chalk.green('my-soda-app')}

Run ${chalk.cyan(`${program.name} --help`)} to see all options.
`
}

exports.alreadyExists = function (projectName) {
  return `
Uh oh! Looks like there's already a directory called ${chalk.red(projectName)}. Please try a different name or delete that folder.`
}

exports.copying = function (projectName) {
  return `
Creating ${chalk.bold(chalk.green(projectName))}...
`
}

exports.start = function (projectName) {
  const cmd = getInstallCmd()

  const commands = {
    install: cmd === 'npm' ? 'npm install' : 'yarn',
    build: cmd === 'npm' ? 'npm run build' : 'yarn build',
    dev: cmd === 'npm' ? 'npm run dev' : 'yarn dev',
    prod: cmd === 'npm' ? 'npm run prod' : 'yarn prod',
    test: cmd === 'npm' ? 'npm run test' : 'yarn test',
    lint: cmd === 'npm' ? 'npm run lint' : 'yarn lint',
  }

  return `
  ${chalk.green('Awesome!')} You're now ready to start coding.

  So your next steps are:

  $ ${output.cmd(`cd ${projectName}`)}
  $ ${output.cmd(commands.install)}

  To build a version for production:

  $ ${output.cmd(commands.build)}

  To run the server in production:

  $ ${output.cmd(commands.prod)}

  To start a local server for development:

  $ ${output.cmd(commands.dev)}

  To run tests:

  $ ${output.cmd(commands.test)}

  To run tslint:

  $ ${output.cmd(commands.lint)}

  Questions? Feedback? Please let us know!

  ${chalk.green('https://github.com/solid-soda/create-soda-app/issues')}
`
}
