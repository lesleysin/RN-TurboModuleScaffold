package com.TempName;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.TempNameManagerInterface;
import com.facebook.react.viewmanagers.TempNameManagerDelegate;

import com.TempName.*;

@ReactModule(name = TempNameViewManagerImpl.NAME)
class TempNameViewManager extends SimpleViewManager<TempName>
        implements TempNameManagerInterface<TempName> {

    private final ViewManagerDelegate<TempName> mDelegate;

    public TempNameViewManager(ReactApplicationContext context) {
        mDelegate = new TempNameManagerDelegate<>(this);
    }

    @Nullable
    @Override
    protected ViewManagerDelegate<TempName> getDelegate() {
        return mDelegate;
    }

    @NonNull
    @Override
    public String getName() {
        return TempNameViewManagerImpl.NAME;
    }

    @NonNull
    @Override
    protected TempName createViewInstance(@NonNull ThemedReactContext context) {
        return TempNameViewManagerImpl.createViewInstance(context);
    }

    @Override
    @ReactProp(name = "text")
    public void setText(TempName view, @Nullable String text) {
        TempNameViewManagerImpl.setText(view, text);
    }
}