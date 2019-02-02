import fs from 'fs';
import writePkg from 'write-pkg';
import { isNil } from 'lodash';
import readPkg from 'read-pkg';
import writeJsonFile from 'write-json-file';

function doesContainTypescript(cwd: string = process.cwd()): boolean {
	try {
		fs.accessSync(`${cwd}/tsconfig.json`);
		return true;
	} catch (error) {
		return false;
	}
}

async function writeScripts(pkg: any): Promise<void> {
	try {
		const modPkg = { ...pkg };
		let { scripts } = modPkg;

		if (isNil(pkg.scripts)) {
			scripts = {};
		}

		if (isNil(scripts.lint)) {
			scripts.lint = 'zoe';
		}

		if (isNil(scripts.format)) {
			scripts.format = 'zoe --fix';
		}

		modPkg.scripts = scripts;

		await writePkg(pkg);
	} catch (error) {
		throw error;
	}
}

async function generateEslintConfig(): Promise<void> {
	const config = { extends: 'zoe' };

	if (doesContainTypescript()) {
		config.extends = 'zoe/typescript';
	}

	await writeJsonFile('.eslintrc', config);
}

export default async function init(): Promise<void> {
	try {
		const pkg = await readPkg({ normalize: false });

		await writeScripts(pkg);
	} catch (error) {
		throw error;
	}

	await generateEslintConfig();
}
