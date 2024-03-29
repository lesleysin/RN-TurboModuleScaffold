package com.RTNBackCompatModuleKotlin.impl

import com.facebook.react.bridge.*

class RTNBackCompatModuleKotlinModuleImpl {

    fun add(a: Double, b: Double, promise: Promise): Unit {
        promise.resolve(a + b);
    }

    fun getName(): String {
        return NAME
    }

    private external fun nativeMultiply(num1: Double, num2: Double): Double;

    fun turboMultiply(num1: Double, num2: Double): Double {
        return nativeMultiply(num1, num2)
    }

    companion object {
        const val NAME = "RTNBackCompatModuleKotlin"

        init {
            System.loadLibrary("rtnbackcompatmodulekotlin-jni")
        }
    }
}