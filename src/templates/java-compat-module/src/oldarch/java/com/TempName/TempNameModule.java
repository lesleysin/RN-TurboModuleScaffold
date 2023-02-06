package com.TempName;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.TempName.impl.TempNameModuleImpl;
import java.util.Map;
import java.util.HashMap;

public class TempNameModule extends ReactContextBaseJavaModule {
    private TempNameModuleImpl implementation;

    TempNameModule(ReactApplicationContext context) {
        super(context);
        implementation = new TempNameModuleImpl();
    }

    @Override
    public String getName() {
        return TempNameModuleImpl.NAME;
    }

    @ReactMethod
    public double turboMultiply(double num1, double num2) {
        return implementation.turboMultiply(num1, num2);
    }

    @ReactMethod
    public void add(double a, double b, Promise promise) {
        implementation.add(a, b, promise);
    }
}