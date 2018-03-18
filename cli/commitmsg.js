const minimist = require('minimist');

const commitMessageValidator = require('../src/commit-message-validator');

const argv = minimist(process.argv.slice(2))
const gitCommitMessageFilePath = argv.g;
const validationPattern = argv.p;

commitMessageValidator(gitCommitMessageFilePath, validationPattern);