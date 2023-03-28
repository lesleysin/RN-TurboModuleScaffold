package com.RTNBackCompatComponentJava;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import com.RTNBackCompatComponentJava.*;

class RTNBackCompatComponentJavaViewManager extends SimpleViewManager<RTNBackCompatComponentJava> {

    ReactApplicationContext mCallerContext;

    public RTNBackCompatComponentJavaViewManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @Override
    public String getName() {
        return RTNBackCompatComponentJavaViewManagerImpl.NAME;
    }

    @Override
    public RTNBackCompatComponentJava createViewInstance(ThemedReactContext context) {
        return RTNBackCompatComponentJavaViewManagerImpl.createViewInstance(context);
    }

    @ReactProp(name = "text")
    public void setFoo(RTNBackCompatComponentJava view, @Nullable String text) {
        RTNBackCompatComponentJavaViewManagerImpl.setText(view, text);
    }

}