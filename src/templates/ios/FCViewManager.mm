#import <React/RCTLog.h>
#import <React/RCTUIManager.h>
#import <React/RCTViewManager.h>

@interface TempNameManager : RCTViewManager
@end

@implementation TempNameManager

RCT_EXPORT_MODULE(TempName)

RCT_EXPORT_VIEW_PROPERTY(text, NSString)

@end