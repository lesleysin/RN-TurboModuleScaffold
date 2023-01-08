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

async function makeJavaPackageFile(packageName, data) {
    const packageBuffer= await fs.readFile(`${__dirname}/templates/android/PackageTemplate.${data.AndroidLang === "Kotlin" ? "kt" : "java"}`, {encoding: "utf-8"});
    const cont = packageBuffer.toString();
    const payload = cont.replace(/TempName/g, packageName);
    await fs.writeFile(path.join(cwd, packageName, androidPackagePath, packageName.toLowerCase(),`${packageName}Package.${data.AndroidLang === "Kotlin" ? "kt" : "java"}`), payload);
}

async function makeJavaPackageImplementationFile(packageName, data) {
    const javaModuleBuffer= await fs.readFile(`${__dirname}/templates/android/PackageImpl.${data.AndroidLang === "Kotlin" ? "kt" : "java"}`, {encoding: "utf-8"});
    const javaContent = javaModuleBuffer.toString();
    const data1 = javaContent.replace(/TempName/g, packageName).replace(/cpphf/g, `${packageName.toLowerCase()}`);
    await fs.writeFile(path.join(cwd, packageName, androidPackagePath, packageName.toLowerCase(),`${packageName}Module.${data.AndroidLang === "Kotlin" ? "kt" : "java"}`), data1);
}

async function makeGradleFile(packageName, data) {
    const gradlescriptBuffer = await fs.readFile(`${__dirname}/templates/android/build.gradle`);
    const content = gradlescriptBuffer.toString();
    const gradleData = content.replace(/TempName/g, packageName).replace("PROJECT_TYPE", data.type === "Turbo Modules" ? "TM" : "FC");
    await fs.writeFile(path.join(cwd, packageName, androidRoot, "build.gradle"), gradleData);
}

// async function makeKotlinGradleFile(packageName) {
//     const gradlescriptBuffer = await fs.readFile(`${__dirname}/templates/android/build.gradle`);
//     const content = gradlescriptBuffer.toString();
//     const gradleData = content.replace(/TempName/g, packageName);
//     await fs.writeFile(path.join(cwd, packageName, androidRoot, "build.gradle"), gradleData);
// }

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
    await fs.writeFile(path.join(cwd, packageName, `${packageName}.podspec`), data);
}

async function makeFCPodspecFile(packageName) {
    const podspecBuffer = await fs.readFile(`${__dirname}/templates/ios/FCPodspecTemp.podspec`);
    const podspecData = podspecBuffer.toString();
    const data = podspecData.replace(/TempName/g, packageName);
    await fs.writeFile(path.join(cwd, packageName, `${packageName}.podspec`), data);
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
    await fs.writeFile(path.join(cwd, packageName, "ios", `${packageName}Header.h`), data);
}

async function makeObjCModuleImplementationFile(packageName) {
    const objcImplBuffer = await fs.readFile(`${__dirname}/templates/ios/ModuleHeader.mm`);
    const objcImplContent = objcImplBuffer.toString();
    let objcImpl = objcImplContent
    .replace(/TempName/g, `${packageName}`)
    .replace(/cpphf/g, `${packageName.toLowerCase()}`);
    await fs.writeFile(path.join(cwd, packageName, "ios", `${packageName}.mm`), objcImpl);
}

async function makeNativePropsDefFile(packageName) {
    const jsSpecBuffer = await fs.readFile(`${__dirname}/templates/js/NativePropsTemplate.ts`, {encoding: "utf-8"});
    const jsSpecData = jsSpecBuffer.toString();
    const value = jsSpecData.replace(/TempName/g, packageName);
    await fs.writeFile(path.join(cwd, packageName, "js", `${packageName}NativeComponent.ts`), value);
}

async function makeViewManagerFile(packageName, data) {
    const buffer = await fs.readFile(`${__dirname}/templates/android/FCManager.${data.AndroidLang === "Kotlin" ? "kt" : "java"}`);
    const content = buffer.toString();
    const payload = content.replace(/TempName/g, `${packageName}`)
    await fs.writeFile(path.join(cwd, packageName, androidPackagePath, packageName.toLowerCase(),`${packageName}Manager.${data.AndroidLang === "Kotlin" ? "kt" : "java"}`), payload);
}

async function makeFCViewFile(packageName, data) {
    const buffer = await fs.readFile(`${__dirname}/templates/android/FCViewTemplate.${data.AndroidLang === "Kotlin" ? "kt" : "java"}`);
    const content = buffer.toString();
    const payload = content.replace(/TempName/g, `${packageName}`)
    await fs.writeFile(path.join(cwd, packageName, androidPackagePath, packageName.toLowerCase(),`${packageName}.${data.AndroidLang === "Kotlin" ? "kt" : "java"}`), payload);
}

async function makeFCPackageFile(packageName, data) {
    const buffer = await fs.readFile(`${__dirname}/templates/android/FCPackage.${data.AndroidLang === "Kotlin" ? "kt" : "java"}`);
    const content = buffer.toString();
    const payload = content.replace(/TempName/g, `${packageName}`)
    await fs.writeFile(path.join(cwd, packageName, androidPackagePath, packageName.toLowerCase(),`${packageName}Package.${data.AndroidLang === "Kotlin" ? "kt" : "java"}`), payload);
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

async function makeCMakeFile(packageName) {
    const lcName = packageName.toLowerCase();
    const buffer = await fs.readFile(path.join(__dirname, "templates/android", "CMakeLists.txt"));
    const content = buffer.toString();
    const data = content.replace(/TempName/g, `${lcName}`)
    await fs.writeFile(path.join(cwd, packageName, androidRoot, "CMakeLists.txt"), data);
}

async function makeCppImplementationFile(packageName) {
    const lcName = packageName.toLowerCase();
    const buffer = await fs.readFile(path.join(__dirname, "templates/cxx", "TempName.cpp"));
    const content = buffer.toString();
    const data = content.replace(/TempName/g, `${lcName}`)
    await fs.writeFile(path.join(cwd, packageName, "cpp", `${lcName}.cpp`), data);
}

async function makeCppHeaderFile(packageName) {
    const lcName = packageName.toLowerCase();
    const buffer = await fs.readFile(path.join(__dirname, "templates/cxx", "TempName.h"));
    const content = buffer.toString();
    const data = content.replace(/TempName/g, `${lcName}`)
    await fs.writeFile(path.join(cwd, packageName, "cpp", `${lcName}.h`), data);
}

async function makeJNIFiles(packageName) {
    const lcName = packageName.toLowerCase();

    const buffer = await fs.readFile(path.join(__dirname, "templates/cxx", "cpp-adapter.cpp"));
    const content = buffer.toString();
    const data = content.replace(/TempName/g, `${packageName}`).replace(/cpphf/g, lcName);
    
    const buffer2 = await fs.readFile(path.join(__dirname, "templates/cxx", "log.h")); 
    const content2 = buffer2.toString();
    const data2 = content2.replace(/TempName/g, `${lcName}`);

    await fs.writeFile(path.join(cwd, packageName, androidMainPath, "jni", "cpp-adapter.cpp"), data);
    await fs.writeFile(path.join(cwd, packageName, androidMainPath, "jni", "log.h"), data2);
}
//#endregion

async function createTemps(packageName, data) {
    //default generated files
    await makeCMakeFile(packageName);
    await makePackageJsonFile(packageName, data.type);

    //android
    await makeManifestFile(packageName);
    await makeGradleFile(packageName, data);
    
    if (data.type === "Turbo Modules") {
        //!cpp
        await makeJNIFiles(packageName);
        await makeCppImplementationFile(packageName);
        await makeCppHeaderFile(packageName);
        //!js
        await makeJsModuleSpecFile(packageName);

        //!android
        await makeJavaPackageFile(packageName, data);
        await makeJavaPackageImplementationFile(packageName, data);
        
        //!ios
        await makeModulePodspecFile(packageName);
        await makeSpecHeaderFile(packageName);
        await makeObjCModuleImplementationFile(packageName);
    } else {
        //!js
        await makeNativePropsDefFile(packageName)

        //! android
        await makeViewManagerFile(packageName, data);
        await makeFCViewFile(packageName, data);
        await makeFCPackageFile(packageName, data);

        //!ios
        await makeFCPodspecFile(packageName);
        await makeFCHeaderFile(packageName);
        await makeFCImplementationFile(packageName);
        await makeFCViewManagerFile(packageName);
    }
}

module.exports = createTemps;