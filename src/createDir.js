const fs = require("fs/promises")
const path = require("path")
const androidPath = "android/src/main/java/com"

async function createDir(packageName) {
    const cwd = process.cwd();

    //android
    await fs.mkdir(path.join(cwd, packageName, androidPath, packageName.toLowerCase()), { recursive: true });

    //ios
    await fs.mkdir(path.join(cwd, packageName, "ios"), { recursive: true });

    //js
    await fs.mkdir(path.join(cwd, packageName, "js"), { recursive: true });
    
}

module.exports = createDir;