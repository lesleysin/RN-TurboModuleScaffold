#import <React/RCTLog.h>
#import <React/RCTUIManager.h>
#import <React/RCTViewManager.h>

@interface RTNComponentKotlinManager : RCTViewManager
@end

@implementation RTNComponentKotlinManager

RCT_EXPORT_MODULE(RTNComponentKotlin)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(text, NSString)

@end