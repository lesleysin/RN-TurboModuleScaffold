package com.TempName;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.facebook.react.uimanager.ThemedReactContext;


class TempNameViewManagerImpl {
    
    public static final String NAME = "TempName";

    public static TempName createViewInstance(@NonNull ThemedReactContext context) {
        return new TempName(context);
    }

    public static void setText(TempName view, @Nullable String text) {
        view.setText(text);
    }
}