import meow from 'meow';

import { log, zoe, help } from './constants';
import engine from './engine';
import init from './init';
import logger from './logger';

const { flags, pkg, input } = meow(help, {
	flags: {
		help: {
			alias: 'h'
		},
		version: {
			alias: 'v'
		},
		init: {
			alias: 'i'
		},
		fix: {
			alias: 'f'
		}
	}
});

async function lint(): Promise<void> {
	// Zoe x.x.x
	log(zoe, pkg.version);

	const results = engine(input, flags.fix);
	const { errorCount } = results.report;
	let exitCode = 0;
	if (errorCount > 0) {
		exitCode = 1;
	}
	process.exitCode = exitCode;
	logger(results, flags.fix, flags.verbose);
}

(async () => {
	if (flags.init) {
		init();
		return;
	}

	await lint();
})();
