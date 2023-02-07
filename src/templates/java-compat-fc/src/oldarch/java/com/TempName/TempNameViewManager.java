package com.TempName;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import com.TempName.*;

class TempNameViewManager extends SimpleViewManager<TempName> {

    ReactApplicationContext mCallerContext;

    public TempNameViewManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @Override
    public String getName() {
        return TempNameViewManagerImpl.NAME;
    }

    @Override
    public TempName createViewInstance(ThemedReactContext context) {
        return TempNameViewManagerImpl.createViewInstance(context);
    }

    @ReactProp(name = "text")
    public void setFoo(TempName view, @Nullable String text) {
        TempNameViewManagerImpl.setText(view, text);
    }

}