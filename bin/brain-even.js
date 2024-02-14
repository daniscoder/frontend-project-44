#!/usr/bin/env node

import cli from "../src/cli.js";
import parityCheck from "../src/parity-check.js";

const name = cli();
parityCheck(name);
