#!/usr/bin/env node
const commander = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");

const fs = require("fs/promises")
const path = require("path")

async function* getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

const javaCompatModuleDir = path.resolve(__dirname, "src/templates/java-compat-module");
const javaModuleDir = path.join(__dirname, "src/templates/java-module");
const kotlinCompatModuleDir = path.resolve(__dirname, "src/templates/kotlin-compat-module");
const kotlinModuleDir = path.resolve(__dirname, "src/templates/kotlin-module");
const objcModuleDir = path.resolve(__dirname, "src/templates/objc-module");
const jsModuleDir = path.resolve(__dirname, "src/templates/js-module");

const javaFCDir = path.resolve(__dirname, "src/templates/java-fc")
const javaCompatFCDir = path.resolve(__dirname, "src/templates/java-compat-fc")
const kotlinFCDir = path.resolve(__dirname, "src/templates/kotlin-fc")
const kotlinCompatFCDir = path.resolve(__dirname, "src/templates/kotlin-compat-fc")
const objcFCDir = path.resolve(__dirname, "src/templates/objc-fc");
const jsFCDir = path.resolve(__dirname, "src/templates/js-fc");

const cxxModuleDir = path.resolve(__dirname, "src/templates/cxx-module");

const commonModuleSourceDir = path.resolve(__dirname, "src/templates/common/module");
const commonFCSourceDir = path.resolve(__dirname, "src/templates/common/fc");

commander
  .version('1.2.0')
  .description('Utility for creating templates for turbo modules and factory components for React Native')

commander
    .command("make <title>")
    .description("Generate boilerplate for turbo module")
    .action((packageName) => {
        inquirer.prompt([
            {
                type: "list",
                name: "type",
                message: "What kind of template do you want generate?",
                choices: [
                    {
                        name: "Turbo Module",
                        value: "TM"
                    }, 
                    {
                        name: "Fabric Component",
                        value: "FC"
                    }
                ]
            },
            {
                type: "list",
                name: "androidLang",
                message: "Android language",
                choices: [
                    {
                        name: "Java",
                        value: "J"
                    },
                    {
                        name: "Kotlin",
                        value: "KT"
                    },
                ]
            },
            {
                type: "confirm",
                name: "compat",
                default: false,
                message: "Support backward compatibility?",
            }
        ]).then(async (ans) => {
            const {compat, type, androidLang} = ans;
            const cwd = process.cwd();
            const rootDir = path.resolve(cwd, packageName);
            const awd = path.resolve(rootDir, "android");
            const cxxwd = path.resolve(rootDir, "cpp");
            const ioswd = path.resolve(rootDir, "ios");
            const jswd = path.resolve(rootDir, "js")

            if (!compat) {
                console.log()
                console.info(chalk.red("Create imcompatible module :("));
                if (type === "TM") { //ANCHOR - TM
                    console.log()
                    console.info(chalk.green("Create TURBO MODULE template"));
                    switch (androidLang) {
                        case "J": {
                            console.log()
                            console.info(chalk.green("Configure java files"));
                            fs.cp(javaModuleDir, awd, { force: true, recursive: true })
                            .then(() => fs.rename(path.resolve(awd, "src/main/java/com/TempName"), path.resolve(awd, `src/main/java/com/${packageName}`)))
                            .then(async () => {
                                for await (const file of getFiles(path.resolve(awd, `src/main/java/com/${packageName}`))) {
                                    const newName = file.replace(/TempName/g, packageName);
                                    fs.rename(file, newName);
                                }
                            })
                            .then(async () => {
                                const targetFiles = [];
                                for await (const file of getFiles(awd)) {
                                    targetFiles.push(file);
                                }
    
                                targetFiles.forEach(async (file) => {
                                    const buffer = await fs.readFile(file);
                                    const content = buffer.toString();
                                    const payload = content.replace(/TempName/g, packageName).replace(/cpphf/g, packageName.toLowerCase());
                                    await fs.writeFile(file, payload);
                                })
                            })
                            break;
                        }
                        case "KT": {
                            console.log()
                            console.info("Configure kotlin files");
                            fs.cp(kotlinModuleDir, awd, { force: true, recursive: true })
                            .then(() => fs.rename(path.resolve(awd, "src/main/java/com/TempName"), path.resolve(awd, `src/main/java/com/${packageName}`)))
                            .then(async () => {
                                for await (const file of getFiles(path.resolve(awd, `src/main/java/com/${packageName}`))) {
                                    const newName = file.replace(/TempName/g, packageName);
                                    fs.rename(file, newName);
                                }
                            })
                            .then(async () => {
                                const targetFiles = [];
                                for await (const file of getFiles(awd)) {
                                    targetFiles.push(file);
                                }
    
                                targetFiles.forEach(async (file) => {
                                    const buffer = await fs.readFile(file);
                                    const content = buffer.toString();
                                    const payload = content.replace(/TempName/g, packageName).replace(/cpphf/g, packageName.toLowerCase());
                                    await fs.writeFile(file, payload);
                                })
                            })
                            break;
                        }
                        default: {
                            break;
                        }
                    }
    
                    console.log()
                    console.info("Configure c++ files");
                    await fs.cp(cxxModuleDir, cxxwd, { force: true, recursive: true })
                    .then(async () => {
                        const targetFiles = [];
                        for await (const file of getFiles(cxxwd)) {
                            targetFiles.push(file);
                        }

                        targetFiles.forEach(async (file) => {
                            const newName = file.replace(/TempName/g, packageName.toLowerCase());
                            
                            const buffer = await fs.readFile(file);
                            const content = buffer.toString();
                            const payload = content.replace(/TempName/g, packageName.toLowerCase());
                            await fs.writeFile(file, payload);
                            await fs.rename(file, newName);
                        })
                    })

                    console.log()
                    console.info("Configure Obj-C files");
                    await fs.cp(objcModuleDir, ioswd, { force: true, recursive: true })
                    .then(async () => {
                        const targetFiles = [];
                        for await (const file of getFiles(cxxwd)) {
                            targetFiles.push(file);
                        }

                        targetFiles.forEach(async (file) => {
                            const newName = file.replace(/TempName/g, packageName.toLowerCase());
                            
                            const buffer = await fs.readFile(file);
                            const content = buffer.toString();
                            const payload = content.replace(/TempName/g, packageName).replace(/cpphf/g, packageName.toLowerCase());
                            await fs.writeFile(file, payload);
                            await fs.rename(file, newName);
                        })
                    });

                    console.log()
                    console.info("Configure package files");
                    await fs.cp(commonModuleSourceDir, path.resolve(cwd, packageName), { force: true, recursive: true })
                    .then(async () => {
                        const list = await fs.readdir(rootDir);
                        const data = list.filter((val) => val.includes("."));
                        data.forEach(async (fileName) => {
                            const target = path.resolve(rootDir, fileName);
                            
                            const buffer = await fs.readFile(target);
                            const content = buffer.toString();
                            const payload = content.replace(/TempName/g, packageName).replace(/cpphf/g, packageName.toLowerCase());
                            await fs.writeFile(target, payload);
                            
                            if (!fileName.includes(".json")) {
                                const newName = target.replace(/TempName/g, packageName)
                                await fs.rename(target, newName);
                            }
                        })
                    })

                    console.log()
                    console.info("Configure JS interfaces");
                    await fs.cp(jsModuleDir, jswd, { force: true, recursive: true })
                    .then(async () => {
                        const targetFiles = [];
                        for await (const file of getFiles(cxxwd)) {
                            targetFiles.push(file);
                        }

                        targetFiles.forEach(async (file) => {
                            const newName = file.replace(/TempName/g, packageName);
                            
                            const buffer = await fs.readFile(file);
                            const content = buffer.toString();
                            const payload = content.replace(/TempName/g, packageName);
                            await fs.writeFile(file, payload);
                            await fs.rename(file, newName);
                        })
                    });
                } else { //ANCHOR - FC
                    console.log()
                    console.info("Create FABRIC COMPONENT template");
                    switch (androidLang) {
                        case "J": {
                            console.log()
                            console.info("Create java files");
                            fs.cp(javaFCDir, awd, { force: true, recursive: true })
                            .then(() => fs.rename(path.resolve(awd, "src/main/java/com/TempName"), path.resolve(awd, `src/main/java/com/${packageName}`)))
                            .then(async () => {
                                for await (const file of getFiles(path.resolve(awd, `src/main/java/com/${packageName}`))) {
                                    const newName = file.replace(/TempName/g, packageName);
                                    fs.rename(file, newName);
                                }
                            })
                            .then(async () => {
                                const targetFiles = [];
                                for await (const file of getFiles(awd)) {
                                    targetFiles.push(file);
                                }
    
                                targetFiles.forEach(async (file) => {
                                    const buffer = await fs.readFile(file);
                                    const content = buffer.toString();
                                    const payload = content.replace(/TempName/g, packageName);
                                    await fs.writeFile(file, payload);
                                })
                            })
                            break;
                        }
                        case "KT": {
                            console.log()
                            console.info("Create kotlin files");
                            fs.cp(kotlinFCDir, awd, { force: true, recursive: true })
                            .then(() => fs.rename(path.resolve(awd, "src/main/java/com/TempName"), path.resolve(awd, `src/main/java/com/${packageName}`)))
                            .then(async () => {
                                for await (const file of getFiles(path.resolve(awd, `src/main/java/com/${packageName}`))) {
                                    const newName = file.replace(/TempName/g, packageName);
                                    fs.rename(file, newName);
                                }
                            })
                            .then(async () => {
                                const targetFiles = [];
                                for await (const file of getFiles(awd)) {
                                    targetFiles.push(file);
                                }
    
                                targetFiles.forEach(async (file) => {
                                    const buffer = await fs.readFile(file);
                                    const content = buffer.toString();
                                    const payload = content.replace(/TempName/g, packageName);
                                    await fs.writeFile(file, payload);
                                })
                            })
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                    console.log()
                    console.info(chalk.yellowBright("Skip C++ lang comfiguration for this case"));
                    console.log()
                    console.info("Configure Obj-C files");
                    await fs.cp(objcFCDir, ioswd, { force: true, recursive: true })
                    .then(async () => {
                        const targetFiles = [];
                        for await (const file of getFiles(ioswd)) {
                            targetFiles.push(file);
                        }

                        targetFiles.forEach(async (file) => {
                            const newName = file.replace(/TempName/g, packageName.toLowerCase());
                            
                            const buffer = await fs.readFile(file);
                            const content = buffer.toString();
                            const payload = content.replace(/TempName/g, packageName);
                            await fs.writeFile(file, payload);
                            await fs.rename(file, newName);
                        })
                    });

                    console.info("Configure package files");
                    await fs.cp(commonFCSourceDir, path.resolve(cwd, packageName), { force: true, recursive: true })
                    .then(async () => {
                        const list = await fs.readdir(rootDir);
                        const data = list.filter((val) => val.includes("."));
                        data.forEach(async (fileName) => {
                            const target = path.resolve(rootDir, fileName);
                            
                            const buffer = await fs.readFile(target);
                            const content = buffer.toString();
                            const payload = content.replace(/TempName/g, packageName);
                            await fs.writeFile(target, payload);
                            
                            if (!fileName.includes(".json")) {
                                const newName = target.replace(/TempName/g, packageName)
                                await fs.rename(target, newName);
                            }
                        })
                    })
                    console.info()
                    console.info("Configure JS interfaces");
                    console.info()
                    await fs.cp(jsFCDir, jswd, { force: true, recursive: true })
                    .then(async () => {
                        const targetFiles = [];
                        for await (const file of getFiles(jswd)) {
                            targetFiles.push(file);
                        }

                        targetFiles.forEach(async (file) => {
                            const newName = file.replace(/TempName/g, packageName);
                            
                            const buffer = await fs.readFile(file);
                            const content = buffer.toString();
                            const payload = content.replace(/TempName/g, packageName);
                            await fs.writeFile(file, payload);
                            await fs.rename(file, newName);
                        })
                    })
                }
            } else {
               
            }
            console.info(chalk.green.bold("Project files configuration completed successfully!"));
        })
    })

commander.parse(process.argv)