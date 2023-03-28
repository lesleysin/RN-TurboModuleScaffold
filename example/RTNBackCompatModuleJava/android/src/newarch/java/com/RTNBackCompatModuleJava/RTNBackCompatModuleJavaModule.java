package com.RTNBackCompatModuleJava;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.RTNBackCompatModuleJava.impl.RTNBackCompatModuleJavaModuleImpl;
import java.util.Map;
import java.util.HashMap;

public class RTNBackCompatModuleJavaModule extends NativeRTNBackCompatModuleJavaSpec {
    private RTNBackCompatModuleJavaModuleImpl implementation;

    RTNBackCompatModuleJavaModule(ReactApplicationContext context) {
        super(context);
        implementation = new RTNBackCompatModuleJavaModuleImpl();
    }

    @Override
    @NonNull
    public String getName() {
        return RTNBackCompatModuleJavaModuleImpl.NAME;
    }

    @Override
    public double turboMultiply(double num1, double num2) {
        return implementation.turboMultiply(num1, num2);
    }

    @Override
    public void add(double a, double b, Promise promise) {
        implementation.add(a, b, promise);
    }
}