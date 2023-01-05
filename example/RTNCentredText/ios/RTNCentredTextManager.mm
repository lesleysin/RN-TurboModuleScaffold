#import <React/RCTLog.h>
#import <React/RCTUIManager.h>
#import <React/RCTViewManager.h>

@interface RTNCentredTextManager : RCTViewManager
@end

@implementation RTNCentredTextManager

RCT_EXPORT_MODULE(RTNCentredText)

RCT_EXPORT_VIEW_PROPERTY(text, NSString)

@end