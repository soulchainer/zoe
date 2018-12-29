import meow from "meow";

import { log, zoe, help } from "./constants";
import engine from "./engine";
import init from "./init";
import logger from "./logger";

const { flags, pkg, input } = meow(help, {
  flags: {
    help: {
      alias: "h"
    },
    version: {
      alias: "v"
    },
    init: {
      alias: "i"
    }
  }
});

async function lint(): Promise<void> {
  process.exitCode = 0;

  // Zoe x.x.x
  log(zoe, pkg.version);

  const results = engine(input, flags.fix);
  logger(results, flags.fix, flags.verbose);
}

(async () => {
  if (flags.init) {
    init();
    return;
  }

  await lint();
})();
