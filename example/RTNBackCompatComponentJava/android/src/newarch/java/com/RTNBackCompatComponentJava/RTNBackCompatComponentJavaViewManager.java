package com.RTNBackCompatComponentJava;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RTNBackCompatComponentJavaManagerInterface;
import com.facebook.react.viewmanagers.RTNBackCompatComponentJavaManagerDelegate;

import com.RTNBackCompatComponentJava.*;

@ReactModule(name = RTNBackCompatComponentJavaViewManagerImpl.NAME)
class RTNBackCompatComponentJavaViewManager extends SimpleViewManager<RTNBackCompatComponentJava>
        implements RTNBackCompatComponentJavaManagerInterface<RTNBackCompatComponentJava> {

    private final ViewManagerDelegate<RTNBackCompatComponentJava> mDelegate;

    public RTNBackCompatComponentJavaViewManager(ReactApplicationContext context) {
        mDelegate = new RTNBackCompatComponentJavaManagerDelegate<>(this);
    }

    @Nullable
    @Override
    protected ViewManagerDelegate<RTNBackCompatComponentJava> getDelegate() {
        return mDelegate;
    }

    @NonNull
    @Override
    public String getName() {
        return RTNBackCompatComponentJavaViewManagerImpl.NAME;
    }

    @NonNull
    @Override
    protected RTNBackCompatComponentJava createViewInstance(@NonNull ThemedReactContext context) {
        return RTNBackCompatComponentJavaViewManagerImpl.createViewInstance(context);
    }

    @Override
    @ReactProp(name = "text")
    public void setText(RTNBackCompatComponentJava view, @Nullable String text) {
        RTNBackCompatComponentJavaViewManagerImpl.setText(view, text);
    }
}