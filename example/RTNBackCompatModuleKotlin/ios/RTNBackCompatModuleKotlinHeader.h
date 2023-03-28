#ifdef RCT_NEW_ARCH_ENABLED
#import "RTNBackCompatModuleKotlinSpec/RTNBackCompatModuleKotlinSpec.h"

@interface RTNBackCompatModuleKotlin : NSObject <NativeRTNBackCompatModuleKotlinSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RTNBackCompatModuleKotlin : NSObject <RCTBridgeModule>
#endif

@end