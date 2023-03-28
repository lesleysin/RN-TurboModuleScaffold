package com.RTNComponentJava;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RTNComponentJavaManagerInterface;
import com.facebook.react.viewmanagers.RTNComponentJavaManagerDelegate;


@ReactModule(name = RTNComponentJavaManager.NAME)
public class RTNComponentJavaManager extends SimpleViewManager<RTNComponentJava>
        implements RTNComponentJavaManagerInterface<RTNComponentJava> {

    private final ViewManagerDelegate<RTNComponentJava> mDelegate;

    static final String NAME = "RTNComponentJava";

    public RTNComponentJavaManager(ReactApplicationContext context) {
        mDelegate = new RTNComponentJavaManagerDelegate<>(this);
    }

    @Nullable
    @Override
    protected ViewManagerDelegate<RTNComponentJava> getDelegate() {
        return mDelegate;
    }

    @NonNull
    @Override
    public String getName() {
        return RTNComponentJavaManager.NAME;
    }

    @NonNull
    @Override
    protected RTNComponentJava createViewInstance(@NonNull ThemedReactContext context) {
        return new RTNComponentJava(context);
    }

    @Override
    @ReactProp(name = "text")
    public void setText(RTNComponentJava view, @Nullable String text) {
        view.setText(text);
    }
}