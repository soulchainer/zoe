import { CLIEngine, Linter } from 'eslint';

type AnyJson = boolean | number | string | null | JsonArray | JsonMap;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface JsonArray extends Array<AnyJson> {}
export interface JsonMap {
	[key: string]: AnyJson;
}

interface Rule {
	[key: string]: Linter.RuleLevel | Linter.RuleLevelAndOptions;
}

export interface ZoeOptions {
	[key: string]: AnyJson | undefined;
	rules?: Rule;
	globals?: string[];
	plugins?: string[];
	envs?: string[];
	parser?: string;
	extends?: string[];
}

export interface LintResults {
	report: CLIEngine.LintReport;
	paths: string[];
}
