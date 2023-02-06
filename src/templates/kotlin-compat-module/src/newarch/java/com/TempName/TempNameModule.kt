package com.TempName;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.TempName.impl.TempNameModuleImpl;

public class TempNameModule(ctx: ReactApplicationContext) : NativeTempNameSpec(ctx) {
    val implementation: TempNameModuleImpl = TempNameModuleImpl();

    override fun getName(): String {
        return TempNameModuleImpl.NAME;
    }

    override fun turboMultiply(num1: Double, num2: Double): Double {
        return implementation.turboMultiply(num1, num2);
    }

    override fun add(a: Double, b: Double, promise: Promise): Unit {
        implementation.add(a, b, promise);
    }
}