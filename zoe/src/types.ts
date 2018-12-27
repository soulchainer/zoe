import { CLIEngine, Linter } from "eslint";

type AnyJson = boolean | number | string | null | JsonArray | JsonMap;
// eslint-disable-next-line typescript/no-empty-interface
interface JsonArray extends Array<AnyJson> {}
export interface JsonMap {
  [key: string]: AnyJson;
}

type Rule = {
  [key: string]: Linter.RuleLevel | Linter.RuleLevelAndOptions;
};

export type ZoeOptions = {
  [key: string]: AnyJson | undefined;
  rules?: Rule;
  globals?: string[];
  plugins?: string[];
  envs?: string[];
  parser?: string;
  extends?: string[];
};

export type LintResults = {
  report: CLIEngine.LintReport;
  paths: string[];
};
