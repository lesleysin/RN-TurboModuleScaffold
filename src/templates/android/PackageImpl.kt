package com.TempName

import com.facebook.react.bridge.*

class TempNameModule(reactContext: ReactApplicationContext?) :
    NativeTempNameSpec(reactContext) {

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
        const val NAME = "TempName"

        init {
            System.loadLibrary("cpphf-jni")
        }
    }
}