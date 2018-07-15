const { eraseLine } = require('ansi-escapes');
const chalk = require('chalk');
const ora = require('ora');
const ms = require('ms');

exports.info = (msg) => {
  console.log(`${chalk.gray('>')} ${msg}`);
};

exports.error = (msg) => {
  if (msg instanceof Error) {
    msg = msg.message; /* eslint-disable-line no-param-reassign */
  }

  console.error(`${chalk.red('> Error!')} ${msg}`);
};

exports.success = (msg) => {
  console.log(`${chalk.green('> Success!')} ${msg}`);
};

exports.time = () => {
  const start = new Date();
  return chalk.gray(`[${ms(new Date() - start)}]`);
};

exports.wait = (msg) => {
  const spinner = ora(chalk.green(msg));
  spinner.color = 'blue';
  spinner.start();

  return () => {
    spinner.stop();
    process.stdout.write(eraseLine);
  };
};

exports.prompt = opts => new Promise((resolve, reject) => {
  opts.forEach((val, i) => {
    const text = val[1];
    console.log(`${chalk.gray('>')} [${chalk.bold(i + 1)}] ${text}`);
  });

  const ondata = (v) => {
    const s = v.toString();

    function cleanup() {
      process.stdin.setRawMode(false);
      process.stdin.removeListener('data', ondata);
    }

    if (s === '\u0003') {
      cleanup();
      reject(new Error('Aborted'));
      return;
    }

    const n = Number(s);
    if (opts[n - 1]) {
      cleanup();
      resolve(opts[n - 1][0]);
    }
  };

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', ondata);
});

exports.cmd = cmd => chalk.bold(chalk.cyan(cmd));

exports.code = cmd => `${chalk.gray('`')}${chalk.bold(cmd)}${chalk.gray('`')}`;

exports.param = param => chalk.bold(`${chalk.gray('{')}${chalk.bold(param)}${chalk.gray('}')}`);
