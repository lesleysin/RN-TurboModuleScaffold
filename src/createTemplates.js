const fs = require("fs/promises");
const path = require("path");
const androidRoot = "/android";
const androidMainPath = "/android/src/main";
const androidPackagePath = "/android/src/main/java/com";
const cwd = process.cwd();

//#region FS interaction and files edit
async function makeManifestFile(packageName) {
    const manifestBuffer = await fs.readFile(`${__dirname}/templates/android/AndroidManifest.xml`);
    const manifestContent = manifestBuffer.toString();
    const editedManifest = manifestContent.replace("TEMPNAME", `com.${packageName}`)
    await fs.writeFile(path.join(cwd, packageName, androidMainPath, "AndroidManifest.xml"), editedManifest);
}

async function makeJavaPackageFile(packageName) {
    const packageBuffer= await fs.readFile(`${__dirname}/templates/android/PackageTemplate.java`, {encoding: "utf-8"});
    const cont = packageBuffer.toString();
    const data = cont.replace(/TempName/g, packageName);
    await fs.writeFile(path.join(cwd, packageName, androidPackagePath, packageName.toLowerCase(),`${packageName}Package.java`), data);
}

async function makeJavaPackageImplementationFile(packageName) {
    const javaModuleBuffer= await fs.readFile(`${__dirname}/templates/android/PackageImpl.java`, {encoding: "utf-8"});
    const javaContent = javaModuleBuffer.toString();
    const data1 = javaContent.replace(/TempName/g, packageName);
    await fs.writeFile(path.join(cwd, packageName, androidPackagePath, packageName.toLowerCase(),`${packageName}Module.java`), data1);
}

async function makeGradleFile(packageName) {
    const gradlescriptBuffer = await fs.readFile(`${__dirname}/templates/android/build.gradle`);
    const gradleData = gradlescriptBuffer.toString();
    await fs.writeFile(path.join(cwd, packageName, androidRoot, "build.gradle"), gradleData);
}

async function makeFCGradleFile(packageName) {
    const gradlescriptBuffer = await fs.readFile(`${__dirname}/templates/android/buildFC.gradle`);
    const gradleData = gradlescriptBuffer.toString();
    await fs.writeFile(path.join(cwd, packageName, androidRoot, "build.gradle"), gradleData);
}

async function makeJsModuleSpecFile(packageName) {
    const jsSpecBuffer = await fs.readFile(`${__dirname}/templates/js/SpecTemplate.ts`, {encoding: "utf-8"});
    const jsSpecData = jsSpecBuffer.toString();
    const value = jsSpecData.replace(/TempName/g, packageName);
    await fs.writeFile(path.join(cwd, packageName, "js", `Native${packageName}.ts`), value);
}

async function makeModulePodspecFile(packageName) {
    const podspecBuffer = await fs.readFile(`${__dirname}/templates/ios/PodscecTemplate.podspec`);
    const podspecData = podspecBuffer.toString();
    const data = podspecData.replace(/TempName/g, packageName);
    await fs.writeFile(path.join(cwd, packageName, `${packageName.toLowerCase()}.podspec`), data);
}

async function makeFCPodspecFile(packageName) {
    const podspecBuffer = await fs.readFile(`${__dirname}/templates/ios/FCPodspecTemp.podspec`);
    const podspecData = podspecBuffer.toString();
    const data = podspecData.replace(/TempName/g, packageName);
    await fs.writeFile(path.join(cwd, packageName, `${packageName.toLowerCase()}.podspec`), data);
}

async function makePackageJsonFile(packageName, type = "Turbo Modules") {
    const packageinfoBuffer = await fs.readFile(`${__dirname}/templates/js/package.json`);
    const packageinfo = packageinfoBuffer.toString();
    const obj = JSON.parse(packageinfo);
    obj.name = packageName.toLowerCase();
    obj.codegenConfig.name = type === "Turbo Modules" ? packageName + "Spec" : packageName + "Specs";

    if (type === "Turbo Modules") {
        obj.codegenConfig.android = {
            javaPackageName: "com." + packageName
        }
    }

    obj.codegenConfig.type = type === "Turbo Modules" ? "modules" : "components"
    const payload = JSON.stringify(obj);
    await fs.writeFile(path.join(cwd, packageName, "package.json"), payload);
}

async function makeSpecHeaderFile(packageName) {
    const iosSpecHeaderBuffer = await fs.readFile(`${__dirname}/templates/ios/SpecHeader.h`);
    const iosSpecHeaderContent = iosSpecHeaderBuffer.toString();
    const data = iosSpecHeaderContent.replace(/TempSpecName/g, `${packageName}Spec`).replace(/TempName/g, `${packageName}`);
    await fs.writeFile(path.join(cwd, packageName, "ios", `${packageName}.h`), data);
}

async function makeObjCModuleImplementationFile(packageName) {
    const objcImplBuffer = await fs.readFile(`${__dirname}/templates/ios/ModuleHeader.mm`);
    const objcImplContent = objcImplBuffer.toString();
    let objcImpl = objcImplContent.replace(/TempSpecName/g, `${packageName}Spec`).replace(/TempName/g, `${packageName}`);
    await fs.writeFile(path.join(cwd, packageName, "ios", `${packageName}.mm`), objcImpl);
}

async function makeNativePropsDefFile(packageName) {
    const jsSpecBuffer = await fs.readFile(`${__dirname}/templates/js/NativePropsTemplate.ts`, {encoding: "utf-8"});
    const jsSpecData = jsSpecBuffer.toString();
    const value = jsSpecData.replace(/TempName/g, packageName);
    await fs.writeFile(path.join(cwd, packageName, "js", `${packageName}NativeComponent.ts`), value);
}

async function makeViewManagerFile(packageName) {
    const buffer = await fs.readFile(`${__dirname}/templates/android/RNManager.java`);
    const content = buffer.toString();
    const data = content.replace(/TempName/g, `${packageName}`)
    await fs.writeFile(path.join(cwd, packageName, androidPackagePath, packageName.toLowerCase(),`${packageName}Manager.java`), data);
}

async function makeFCViewFile(packageName) {
    const buffer = await fs.readFile(`${__dirname}/templates/android/FCViewTemplate.java`);
    const content = buffer.toString();
    const data = content.replace(/TempName/g, `${packageName}`)
    await fs.writeFile(path.join(cwd, packageName, androidPackagePath, packageName.toLowerCase(),`${packageName}.java`), data);
}

async function makeFCPackageFile(packageName) {
    const buffer = await fs.readFile(`${__dirname}/templates/android/FCPackage.java`);
    const content = buffer.toString();
    const data = content.replace(/TempName/g, `${packageName}`)
    await fs.writeFile(path.join(cwd, packageName, androidPackagePath, packageName.toLowerCase(),`${packageName}Package.java`), data);
}

async function makeFCHeaderFile(packageName) {
    const buffer = await fs.readFile(`${__dirname}/templates/ios/FCHeader.h`);
    const content = buffer.toString();
    const data = content.replace(/TempName/g, `${packageName}`)
    await fs.writeFile(path.join(cwd, packageName, "ios",`${packageName}.h`), data);
}

async function makeFCImplementationFile(packageName) {
    const buffer = await fs.readFile(`${__dirname}/templates/ios/FCImpl.mm`);
    const content = buffer.toString();
    const data = content.replace(/TempName/g, `${packageName}`)
    await fs.writeFile(path.join(cwd, packageName, "ios",`${packageName}.mm`), data);
}

async function makeFCViewManagerFile(packageName) {
    const buffer = await fs.readFile(`${__dirname}/templates/ios/FCViewManager.mm`);
    const content = buffer.toString();
    const data = content.replace(/TempName/g, `${packageName}`)
    await fs.writeFile(path.join(cwd, packageName, "ios",`${packageName}Manager.mm`), data);
}
//#endregion

async function createTemps(packageName, type) {
    //default generated files
    await makeManifestFile(packageName);
    await makePackageJsonFile(packageName, type);
    
    if (type === "Turbo Modules") {
        //!js
        await makeJsModuleSpecFile(packageName);

        //!android
        await makeGradleFile(packageName);
        await makeJavaPackageFile(packageName);
        await makeJavaPackageImplementationFile(packageName);
        await makeModulePodspecFile(packageName);

        //!ios
        await makeSpecHeaderFile(packageName);
        await makeObjCModuleImplementationFile(packageName);
    } else {
        //!js
        await makeNativePropsDefFile(packageName)

        //! android
        await makeViewManagerFile(packageName);
        await makeFCViewFile(packageName);
        await makeFCGradleFile(packageName);
        await makeFCPackageFile(packageName);

        //!ios
        await makeFCPodspecFile(packageName);
        await makeFCHeaderFile(packageName);
        await makeFCImplementationFile(packageName);
        await makeFCViewManagerFile(packageName);
    }
}

module.exports = createTemps;