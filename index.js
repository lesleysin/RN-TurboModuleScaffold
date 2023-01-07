#!/usr/bin/env node
const commander = require("commander");
const inquirer = require("inquirer");
const { exec } = require('child_process');
const createDir = require("./src/createDir");
const createTemps = require("./src/createTemplates");

commander
  .version('1.0.0')
  .description('Utility for creating templates for turbo modules and factory components for React Native')

commander
    .command("make <title>")
    .description("Generate boilerplate for turbo module")
    .action((name) => {
        inquirer.prompt([
            {
                type: "list",
                name: "type",
                choices: ["Turbo Modules", "Fabric Component"]
            },
            {
                type: "list",
                name: "AndroidLang",
                choices: ["Java", "Kotlin"]
            }
        ]).then((ans) => {
            createDir(name)
            .then(() => createTemps(name, ans))
        })
    })

commander
    .command("pod")
    .action(() => {
        exec("RCT_NEW_ARCH_ENABLED=1 pod install")
    })

commander.parse(process.argv)