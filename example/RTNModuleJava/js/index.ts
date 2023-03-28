import {NativeModules} from 'react-native';
import { Spec } from './NativeRTNModuleJava';

const isTurboModuleEnabled = global.__turboModuleProxy != null;

const RTNModuleJavaModule = isTurboModuleEnabled
  ? require('./NativeRTNModuleJava').default
  : NativeModules.RTNModuleJava;

class RTNModuleJavaModuleProxy implements Spec {
  private module: Spec;
  
  constructor(module: Spec) {
    this.module = module;
  }
  
  async add(a: number, b: number): Promise<number> {
    return await this.module.add(a, b);
  }
  
  turboMultiply(num1: number, num2: number): number {
    return this.module.turboMultiply(num1, num2);
  }
  
}
  
const instance = new RTNModuleJavaModuleProxy(RTNModuleJavaModule);

export default instance;
