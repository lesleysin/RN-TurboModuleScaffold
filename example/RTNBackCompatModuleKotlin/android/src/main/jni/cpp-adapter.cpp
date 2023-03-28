#include <jni.h>
#include "rtnbackcompatmodulekotlin.h"
#include "log.h"

extern "C" JNIEXPORT jdouble JNICALL
Java_com_RTNBackCompatModuleKotlin_impl_RTNBackCompatModuleKotlinModuleImpl_nativeMultiply(JNIEnv *env, jclass type, jdouble num1, jdouble num2)
{
    LOGI("Calling nativeMultiply");
    return rtnbackcompatmodulekotlin::multiply(num1, num2);
}