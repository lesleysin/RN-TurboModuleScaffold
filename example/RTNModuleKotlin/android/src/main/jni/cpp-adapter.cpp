#include <jni.h>
#include "rtnmodulekotlin.h"
#include "log.h"

extern "C" JNIEXPORT jdouble JNICALL
Java_com_RTNModuleKotlin_RTNModuleKotlinModule_nativeMultiply(JNIEnv *env, jclass type, jdouble num1, jdouble num2)
{
    LOGI("Calling nativeMultiply");
    return rtnmodulekotlin::multiply(num1, num2);
}