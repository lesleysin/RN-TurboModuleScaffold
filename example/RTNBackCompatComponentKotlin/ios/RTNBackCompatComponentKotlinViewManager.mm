#import <React/RCTLog.h>
#import <React/RCTUIManager.h>
#import <React/RCTViewManager.h>

@interface RTNBackCompatComponentKotlinManager : RCTViewManager
@end

@implementation RTNBackCompatComponentKotlinManager

RCT_EXPORT_MODULE(RTNBackCompatComponentKotlin)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(text, NSString)

@end