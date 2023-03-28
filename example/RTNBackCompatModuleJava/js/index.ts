import {NativeModules} from 'react-native';
import { Spec } from './NativeRTNBackCompatModuleJava';

const isTurboModuleEnabled = global.__turboModuleProxy != null;

const RTNBackCompatModuleJavaModule = isTurboModuleEnabled
  ? require('./NativeRTNBackCompatModuleJava').default
  : NativeModules.RTNBackCompatModuleJava;

class RTNBackCompatModuleJavaModuleProxy implements Spec {
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
  
const instance = new RTNBackCompatModuleJavaModuleProxy(RTNBackCompatModuleJavaModule);

export default instance;
