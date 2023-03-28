package com.RTNBackCompatModuleKotlin;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.RTNBackCompatModuleKotlin.impl.RTNBackCompatModuleKotlinModuleImpl;
import java.util.Map;
import java.util.HashMap;

public class RTNBackCompatModuleKotlinModule(ctx: ReactApplicationContext) : ReactContextBaseJavaModule(ctx) {
    val implementation: RTNBackCompatModuleKotlinModuleImpl = RTNBackCompatModuleKotlinModuleImpl();

    override fun getName(): String {
        return RTNBackCompatModuleKotlinModuleImpl.NAME;
    }

    @ReactMethod
    fun turboMultiply(num1: Double, num2: Double): Double {
        return implementation.turboMultiply(num1, num2);
    }

    @ReactMethod
    fun add(a: Double, b: Double, promise: Promise): Unit {
        implementation.add(a, b, promise);
    }
}