#ifdef RCT_NEW_ARCH_ENABLED
#import "RTNModuleJavaSpec/RTNModuleJavaSpec.h"

@interface RTNModuleJava : NSObject <NativeRTNModuleJavaSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RTNModuleJava : NSObject <RCTBridgeModule>
#endif

@end