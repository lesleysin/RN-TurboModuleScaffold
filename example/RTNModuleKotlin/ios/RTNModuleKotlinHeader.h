#ifdef RCT_NEW_ARCH_ENABLED
#import "RTNModuleKotlinSpec/RTNModuleKotlinSpec.h"

@interface RTNModuleKotlin : NSObject <NativeRTNModuleKotlinSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RTNModuleKotlin : NSObject <RCTBridgeModule>
#endif

@end