// The entry point for void-whisperer-99
const chalk = require('chalk');
const ms = require('ms');
const has = require('has');
const once = require('once');

console.log(chalk.green('Void Whisperer 99 is initialized.'));

const init = once(() => {
  console.log('Loaded dependencies: chalk, ms, has, once');
  console.log('Example: 1 hour =', ms('1h'));
  console.log('has({ a: 1 }, "a") =', has({ a: 1 }, 'a'));
});

init();
