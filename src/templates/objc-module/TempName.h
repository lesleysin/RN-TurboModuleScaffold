// #import <React/RCTBridgeModule.h>
// #ifdef RCT_NEW_ARCH_ENABLED
// #import <TempNameSpec/TempNameSpec.h>
// #endif

// @interface TempName : NSObject <RCTBridgeModule>

// @end

// #ifdef RCT_NEW_ARCH_ENABLED
// @interface TempName : NSObject <NativeTempNameSpec>

// @end
// #endif

NS_ASSUME_NONNULL_BEGIN

#ifdef RCT_NEW_ARCH_ENABLED
#import "TempNameSpec/TempNameSpec.h"

@interface TempName : NSObject <NativeTempNameSpec>
#else
#import <React/RCTBridgeModule.h>

@interface TempName : NSObject <RCTBridgeModule>
#endif

@end

NS_ASSUME_NONNULL_END