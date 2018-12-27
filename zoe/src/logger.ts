import chalk from "chalk";
import { CLIEngine } from "eslint";
import { add, forEach, sortBy } from "lodash";
import { every, eq, gt, reduce, some, __ } from "lodash/fp";

import { log, noErrors, zoeFix } from "./constants";
import { LintResults } from "./types";

const haveNoIssues = every(eq(0));
const haveSomeFixables = some(gt(__, 0));
const countFixables = reduce(add, 0);

function logVerbose(file: string): void {
  log(`=> ${chalk.green(file)}`);
}

function logFixable(total: number): void {
  log(
    `Found ${total} fixable ${total > 1 ? "issues" : "issue"} => Run ${zoeFix}`
  );
}

export default function logger(
  results: LintResults,
  fix: boolean,
  verbose: boolean
): void {
  const {
    report: {
      errorCount,
      warningCount,
      fixableErrorCount,
      fixableWarningCount
    },
    report,
    paths
  } = results;

  const fixablesList = [fixableErrorCount, fixableWarningCount];
  const issuesList = [...fixablesList, errorCount, warningCount];

  if (fix) {
    CLIEngine.outputFixes(report);
  }

  if (haveNoIssues(issuesList)) {
    log(noErrors);
    return;
  }

  if (verbose) {
    forEach(sortBy(paths), logVerbose);
  }

  // @ts-ignore outdated type definitions for eslint
  log(CLIEngine.getFormatter("pretty")(report.results));

  if (!fix && haveSomeFixables(fixablesList)) {
    logFixable(countFixables(fixablesList));
  }
}
