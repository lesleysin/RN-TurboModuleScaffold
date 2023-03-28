package com.RTNModuleJava;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class RTNModuleJavaModule extends NativeRTNModuleJavaSpec {

    public static String NAME = "RTNModuleJava";

    RTNModuleJavaModule(ReactApplicationContext context) {
        super(context);
    }

    static {
        try {
            // Used to load the 'native-lib' library on application startup.
            System.loadLibrary("rtnmodulejava-jni");
        } catch (Exception ignored) {
        }
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    public static native double nativeMultiply(double a, double b);

    @Override
    public double turboMultiply(double num1, double num2) {
        return nativeMultiply(num1, num2);
     }

    @Override
    public void add(double a, double b, Promise promise) {
        promise.resolve(a + b);
    }
}