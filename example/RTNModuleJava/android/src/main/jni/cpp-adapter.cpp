#include <jni.h>
#include "rtnmodulejava.h"
#include "log.h"

extern "C" JNIEXPORT jdouble JNICALL
Java_com_RTNModuleJava_RTNModuleJavaModule_nativeMultiply(JNIEnv *env, jclass type, jdouble num1, jdouble num2)
{
    LOGI("Calling nativeMultiply");
    return rtnmodulejava::multiply(num1, num2);
}