package com.RTNBackCompatComponentJava;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.facebook.react.uimanager.ThemedReactContext;


class RTNBackCompatComponentJavaViewManagerImpl {
    
    public static final String NAME = "RTNBackCompatComponentJava";

    public static RTNBackCompatComponentJava createViewInstance(@NonNull ThemedReactContext context) {
        return new RTNBackCompatComponentJava(context);
    }

    public static void setText(RTNBackCompatComponentJava view, @Nullable String text) {
        view.setText(text);
    }
}