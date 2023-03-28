package com.RTNModuleKotlin

import com.facebook.react.bridge.*

class RTNModuleKotlinModule(reactContext: ReactApplicationContext?) :
    NativeRTNModuleKotlinSpec(reactContext) {

    override fun add(a: Double, b: Double, promise: Promise): Unit {
        promise.resolve(a + b);
    }

    override fun getName(): String {
        return NAME
    }

    private external fun nativeMultiply(num1: Double, num2: Double): Double;

    override fun turboMultiply(num1: Double, num2: Double): Double {
        return nativeMultiply(num1, num2)
    }

    companion object {
        const val NAME = "RTNModuleKotlin"

        init {
            System.loadLibrary("rtnmodulekotlin-jni")
        }
    }
}