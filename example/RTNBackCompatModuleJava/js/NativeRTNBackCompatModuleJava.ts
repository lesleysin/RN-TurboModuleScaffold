import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  add(a: number, b: number): Promise<number>;

  //C++ shared
  turboMultiply(num1: number, num2: number): number;
}

export default TurboModuleRegistry.get<Spec>(
  'RTNBackCompatModuleJava',
) as Spec | null;