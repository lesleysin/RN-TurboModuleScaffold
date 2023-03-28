#import <React/RCTLog.h>
#import <React/RCTUIManager.h>
#import <React/RCTViewManager.h>

@interface RTNBackCompatComponentJavaManager : RCTViewManager
@end

@implementation RTNBackCompatComponentJavaManager

RCT_EXPORT_MODULE(RTNBackCompatComponentJava)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(text, NSString)

@end