"use strict";

const assert = require("assert").strict;

const features = require("..");

assert.strictEqual(features(), "Hello from features");
console.info("features tests passed");
