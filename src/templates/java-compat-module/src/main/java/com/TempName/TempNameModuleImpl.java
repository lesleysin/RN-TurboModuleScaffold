package com.TempName.impl;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class TempNameModuleImpl {

    public static final String NAME = "TempName";

    static {
        try {
            // Used to load the 'native-lib' library on application startup.
            System.loadLibrary("cpphf-jni");
        } catch (Exception ignored) {
        }
    }

    public static native double nativeMultiply(double a, double b);

    public double turboMultiply(double num1, double num2) {
        return nativeMultiply(num1, num2);
     }

    public void add(double a, double b, Promise promise) {
        promise.resolve(a + b);
    }
}