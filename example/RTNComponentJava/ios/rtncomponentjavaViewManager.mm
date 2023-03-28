#import <React/RCTLog.h>
#import <React/RCTUIManager.h>
#import <React/RCTViewManager.h>

@interface RTNComponentJavaManager : RCTViewManager
@end

@implementation RTNComponentJavaManager

RCT_EXPORT_MODULE(RTNComponentJava)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(text, NSString)

@end