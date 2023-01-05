package com.RTNCentredText;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RTNCentredTextManagerInterface;
import com.facebook.react.viewmanagers.RTNCentredTextManagerDelegate;


@ReactModule(name = RTNCentredTextManager.NAME)
public class RTNCentredTextManager extends SimpleViewManager<RTNCentredText>
        implements RTNCentredTextManagerInterface<RTNCentredText> {

    private final ViewManagerDelegate<RTNCentredText> mDelegate;

    static final String NAME = "RTNCentredText";

    public RTNCentredTextManager(ReactApplicationContext context) {
        mDelegate = new RTNCentredTextManagerDelegate<>(this);
    }

    @Nullable
    @Override
    protected ViewManagerDelegate<RTNCentredText> getDelegate() {
        return mDelegate;
    }

    @NonNull
    @Override
    public String getName() {
        return RTNCentredTextManager.NAME;
    }

    @NonNull
    @Override
    protected RTNCentredText createViewInstance(@NonNull ThemedReactContext context) {
        return new RTNCentredText(context);
    }

    @Override
    @ReactProp(name = "text")
    public void setText(RTNCentredText view, @Nullable String text) {
        view.setText(text);
    }
}