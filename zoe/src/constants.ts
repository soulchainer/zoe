import os from 'os';
import path from 'path';

import chalk from 'chalk';

// Useful constants
export const { log } = console;
export const noErrors = '✨  No errors';
export const zoe = chalk.bold.cyan('Zoe');
export const zoeFix = chalk.bold.cyan('zoe --fix');

export const globbyInput = ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'];

export const globbyIgnore = [
	'**.min.js',
	'**coverage**',
	'**/node_modules/**',
	'dist/**',
	'**flow-typed**',
	'**snapshots**',
	'**fixtures**'
];

// Default options for the CLIEngine
const cacheLocation = path.join(os.homedir() || os.tmpdir(), `.zoe-cache/`);

export const configFile = require.resolve('eslint-config-zoe');
export const tsConfigPath = require.resolve('eslint-config-zoe/typescript');

export const defaultOptions = {
	cacheLocation,
	configFile,
	cache: true,
	fix: false,
	ignore: false,
	useEslintrc: true,
	baseConfig: {
		extends: [configFile]
	},
	extensions: ['.js', '.jsx']
};

export const help = chalk`
Usage:
  zoe [<file|glob> ...]

Options:
  -f, --fix       Automatically fix problems
  -i, --init      Initialize an empty .eslintrc file that extends eslint-config-zoe
  -v, --version   Show current version
  -h, --help      Show usage information
`;
