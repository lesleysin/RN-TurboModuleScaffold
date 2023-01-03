const fs = require("fs/promises")
const path = require("path")
const androidRoot = "/android"
const androidMainPath = "/android/src/main"
const androidPackagePath = "/android/src/main/java/com"

async function createTemps(packageName) {
    const workDir = `${packageName}Workdir/`
    const cwd = process.cwd();

    const manifestBuffer = await fs.readFile(`${__dirname}/templates/android/AndroidManifest.xml`);
    const manifestContent = manifestBuffer.toString();
    const editedManifest = manifestContent.replace("TEMPNAME", `com.${packageName}`)
    await fs.writeFile(path.join(cwd, workDir, packageName, androidMainPath, "AndroidManifest.xml"), editedManifest);

    const packageBuffer= await fs.readFile(`${__dirname}/templates/android/PackageTemplate.java`, {encoding: "utf-8"});
    const cont = packageBuffer.toString();
    const data = cont.replace(/TempName/g, packageName);
    await fs.writeFile(path.join(cwd, workDir, packageName, androidPackagePath, packageName.toLowerCase(),`${packageName}Package.java`), data);

    const javaModuleBuffer= await fs.readFile(`${__dirname}/templates/android/PackageImpl.java`, {encoding: "utf-8"});
    const javaContent = javaModuleBuffer.toString();
    const data1 = javaContent.replace(/TempName/g, packageName);
    await fs.writeFile(path.join(cwd, workDir, packageName, androidPackagePath, packageName.toLowerCase(),`${packageName}Module.java`), data1);

    const gradlescriptBuffer = await fs.readFile(`${__dirname}/templates/android/build.gradle`);
    const gradleData = gradlescriptBuffer.toString();
    await fs.writeFile(path.join(cwd, workDir, packageName, androidRoot, "build.gradle"), gradleData);

    const jsSpecBuffer = await fs.readFile(`${__dirname}/templates/js/SpecTemplate.ts`, {encoding: "utf-8"});
    const jsSpecData = jsSpecBuffer.toString();
    const value = jsSpecData.replace(/TempName/g, packageName);
    await fs.writeFile(path.join(cwd, workDir, packageName, "js", `Native${packageName}.ts`), value);

    const podspecBuffer = await fs.readFile(`${__dirname}/templates/ios/PodscecTemplate.podspec`);
    const podspecData = podspecBuffer.toString();
    podspecData.replace(/TempName/g, packageName.toLowerCase());
    await fs.writeFile(path.join(cwd, workDir, packageName, `${packageName.toLowerCase()}.podspec`), podspecData);

    const packageinfoBuffer = await fs.readFile(`${__dirname}/templates/js/package.json`);
    const packageinfo = packageinfoBuffer.toString();
    const obj = JSON.parse(packageinfo);
    obj.name = packageName.toLowerCase();
    obj.codegenConfig.name = packageName + "Spec";
    obj.codegenConfig.android.javaPackageName = "com." + packageName;
    const payload = JSON.stringify(obj);
    await fs.writeFile(path.join(cwd, workDir, packageName, "package.json"), payload);

    const iosSpecHeaderBuffer = await fs.readFile(`${__dirname}/templates/ios/SpecHeader.h`);
    const iosSpecHeaderContent = iosSpecHeaderBuffer.toString();
    let header = iosSpecHeaderContent.replace(/TempSpecName/g, `${packageName}Spec`).replace(/TempName/g, `${packageName}`);
    await fs.writeFile(path.join(cwd, workDir, packageName, "ios", `${packageName}.h`), header);

    const objcImplBuffer = await fs.readFile(`${__dirname}/templates/ios/ModuleHeader.mm`);
    const objcImplContent = objcImplBuffer.toString();
    let objcImpl = objcImplContent.replace(/TempSpecName/g, `${packageName}Spec`).replace(/TempName/g, `${packageName}`);
    await fs.writeFile(path.join(cwd, workDir, packageName, "ios", `${packageName}.mm`), objcImpl);
}

module.exports = createTemps;