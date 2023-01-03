#!/usr/bin/env node
const commander = require("commander")
const createDir = require("./src/createDir");
const createTemps = require("./src/createTemplates");

commander
  .version('1.0.0')
  .description('Utility for creating templates for turbo modules and factory components for React Native')

commander
    .command("make <title>")
    .description("Generate boilerplate for turbo module")
    .action((name) => {
        createDir(name)
        .then(() => createTemps(name))
    })

commander.parse(process.argv)