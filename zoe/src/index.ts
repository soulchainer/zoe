#!/usr/bin/env node

/* eslint-disable no-const */
/* eslint-disable no-var */
/* eslint-disable consts-on-top */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-global-assign */

import chalk from 'chalk';

var ver = process.versions.node;
var majorVer = parseInt(ver.split('.')[0], 10);

if (majorVer < 8) {
	chalk.red(
		`You are running Node ${ver}.
        Zoe requires Node 8 or higher.
        Please update your version of Node.`
	);
	process.exit(1);
} else {
	require('v8-compile-cache');
	require('./zoe');
}
