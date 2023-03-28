#include <jni.h>
#include "rtnbackcompatmodulejava.h"
#include "log.h"

extern "C" JNIEXPORT jdouble JNICALL
Java_com_RTNBackCompatModuleJava_impl_RTNBackCompatModuleJavaModuleImpl_nativeMultiply(JNIEnv *env, jclass type, jdouble num1, jdouble num2)
{
    LOGI("Calling nativeMultiply");
    return rtnbackcompatmodulejava::multiply(num1, num2);
}