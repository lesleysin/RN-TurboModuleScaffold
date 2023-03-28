#import "RTNBackCompatModuleKotlinHeader.h"

#ifdef RCT_NEW_ARCH_ENABLED
#import "RTNBackCompatModuleKotlinSpec.h"
#endif

#include "rtnbackcompatmodulekotlin.h"

@implementation RTNBackCompatModuleKotlin

RCT_EXPORT_MODULE()

- (void)add:(double)a b:(double)b resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject
{
    NSNumber *result = [[NSNumber alloc] initWithInteger:a + b];
    resolve(result);
}

- (NSNumber *) turboMultiply:(double)num1 num2:(double)num2{
    double res = rtnbackcompatmodulekotlin::multiply(num1, num2);
    return [NSNumber numberWithDouble:res];
}

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeRTNBackCompatModuleKotlinSpecJSI>(params);
}
#endif

@end