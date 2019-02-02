import { CLIEngine } from 'eslint';
import globby from 'globby';
import { mergeWith } from 'lodash';

import {
	globbyIgnore,
	globbyInput,
	tsConfigPath,
	defaultOptions
} from './constants';
import { LintResults } from './types';

export function customizer(
	objectValue: any,
	sourceValue: any
): any[] | number | undefined {
	if (Array.isArray(objectValue)) {
		return objectValue.concat(sourceValue);
	}

	if (Number.isInteger(objectValue)) {
		return objectValue + sourceValue;
	}

	return undefined;
}

export function endsWith(ending: string): (file: string) => boolean {
	return file => file.slice(-5).indexOf(ending) > 0;
}

export function findPaths(paths: string[]): string[] {
	const globbyOptions = { ignore: globbyIgnore, gitignore: true };
	const input = paths.length === 0 ? globbyInput : paths;
	return globby.sync(input, globbyOptions);
}

function lint(
	filePaths: string[],
	options: CLIEngine.Options
): CLIEngine.LintReport {
	return new CLIEngine(options).executeOnFiles(filePaths);
}

export default function engine(paths: string[], fix: boolean): LintResults {
	const options = { ...defaultOptions };
	const tsOptions: CLIEngine.Options = {
		...options,
		configFile: tsConfigPath,
		baseConfig: { extends: [tsConfigPath] },
		extensions: ['.ts', '.tsx']
	};

	const foundPaths = findPaths(paths);

	const jsPaths = foundPaths.filter(endsWith('.js'));
	const tsPaths = foundPaths.filter(endsWith('.ts'));

	options.fix = fix;
	tsOptions.fix = fix;

	const hasTypescript = tsPaths.length > 0;

	const jsResult = lint(jsPaths, options);
	const tsResult = hasTypescript && lint(tsPaths, tsOptions);
	const report = mergeWith(jsResult, tsResult, customizer);

	return {
		report,
		paths: jsPaths.concat(tsPaths)
	};
}
