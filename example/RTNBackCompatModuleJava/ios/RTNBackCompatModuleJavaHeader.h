#ifdef RCT_NEW_ARCH_ENABLED
#import "RTNBackCompatModuleJavaSpec/RTNBackCompatModuleJavaSpec.h"

@interface RTNBackCompatModuleJava : NSObject <NativeRTNBackCompatModuleJavaSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RTNBackCompatModuleJava : NSObject <RCTBridgeModule>
#endif

@end