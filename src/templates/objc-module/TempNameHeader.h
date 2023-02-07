#ifdef RCT_NEW_ARCH_ENABLED
#import "TempNameSpec/TempNameSpec.h"

@interface TempName : NSObject <NativeTempNameSpec>
#else
#import <React/RCTBridgeModule.h>

@interface TempName : NSObject <RCTBridgeModule>
#endif

@end