# RN-TurboModuleScaffold
Utility for creating templates for turbo modules and factory components for React Native

## Prerequisites
1. React Native version >= 0.70
2. Edabled new architecture

## Instalation
```
npm i rn-tms --save-dev
```
or 
```
yarn add rn-tms --dev
```
## Usage
In app directory run this command and answer a few questions

> RTN stands for "React Native", and is a recommended prefix for React Native modules.

```
rn-tms make RTN_MODULE_NAME
```
After its execution, a directory with files for native platforms and a js part will be generated in work directory.


Initially, the basic implementations of the turbo module or factory component are generated, which you can find in the react native documentation (calculator module with defined and implemented function OR simple native centred text component).
At this point, you can start developing your native turbo module or factory component by modifying the files generated with rn-tms. For use module or component localy, follow [this guide](https://reactnative.dev/docs/the-new-architecture/pillars-turbomodules#5-adding-the-turbo-native-module-to-your-app). 

## TODO
- [x] Turbo Modules generation support.
- [x] Fabric Components generation support.
- [ ] Documentation.
- [ ] Kotlin support.
- [ ] Swift support.
