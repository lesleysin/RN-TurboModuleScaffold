# RN-TurboModuleScaffold
Utility for creating templates for turbo modules and factory components for React Native

## Features
- React Native 0.68 +
- Generation of templates for turbo modules and factory components with one command
- Java and Kotlin support for Android development
- Obc-C support for IOS development
- C++ crossplatform modules support (Turbo modules only)
- Generating of backward compatible modules and components

## Instalation
```
npm i rn-tms --save-dev
```
or 
```
yarn add rn-tms --dev
```
## Usage

### Basics
In app directory run this command and answer a few questions

> RTN stands for "React Native", and is a recommended prefix for React Native modules.

```
yarn rn-tms make RTN_MODULE_NAME
```
After its execution, a directory with files for native platforms and a js part will be generated in work directory.


Initially, the basic implementations of the turbo module or factory component are generated, which you can find in the react native documentation (calculator module with defined and implemented function OR simple native centred text component).
At this point, you can start developing your native turbo module or factory component by modifying the files generated with rn-tms. For use module or component localy, follow [this guide](https://reactnative.dev/docs/the-new-architecture/pillars-turbomodules#5-adding-the-turbo-native-module-to-your-app).


### Recomended workflow

To improve the quality of module development, it is recommended to use the appropriate IDE platforms (Xcode, Android Studio).


After generating the module template, create a new React Native application in the project directory using the command:

```
npx react-native init example
```


When the application is successfully created, add the module to the example app dependencies

```
cd example && yarn add ../
```

Then edit the NativeProps interface for Fabric Components or Spec for Turbo Modules, adding the declarations of the functions and properties that you want to pass to native code.


After editing the properties, you must run React Native Codegen manually to generate interfaces to implement properties and methods on the native side. 

[Here](https://reactnative.dev/docs/the-new-architecture/pillars-turbomodules#4-native-code) are the commands that you need to execute to start Codegen.

Now you can open the required IDE, open the example project (./example/android/app for example), wait for the content to be indexed, select your module in the external libraries list or the Pods list and start implementing the module logic in native code.
### Synchronization

To synchronize the contents of node_modules with the project directory, use the following command:
 
- Android:
```
yarn rn-tms sync RTN_MODULE_NAME --android
```
- IOS:
```
yarn rn-tms sync RTN_MODULE_NAME --ios
```


If you deviate from the proposed workflow, you can additionally specify the path to the directory where the module was added to the dependencies by running the command: 
```
yarn rn-tms sync RTN_MODULE_NAME --android --path=/Users/<username>/<application_dir>
```

