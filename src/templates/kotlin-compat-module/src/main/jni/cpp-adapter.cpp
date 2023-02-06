#include <jni.h>
#include "cpphf.h"
#include "log.h"

extern "C" JNIEXPORT jdouble JNICALL
Java_com_TempName_impl_TempNameModuleImpl_nativeMultiply(JNIEnv *env, jclass type, jdouble num1, jdouble num2)
{
    LOGI("Calling nativeMultiply");
    return cpphf::multiply(num1, num2);
}