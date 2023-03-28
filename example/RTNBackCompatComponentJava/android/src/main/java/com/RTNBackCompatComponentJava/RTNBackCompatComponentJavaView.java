package com.RTNBackCompatComponentJava;

import androidx.annotation.Nullable;
import android.content.Context;
import android.util.AttributeSet;
import android.graphics.Color;

import android.widget.TextView;
import android.view.Gravity;

class RTNBackCompatComponentJava extends TextView {

    public RTNBackCompatComponentJava(Context context) {
        super(context);
        this.configureComponent();
    }

    public RTNBackCompatComponentJava(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        this.configureComponent();
    }

    public RTNBackCompatComponentJava(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        this.configureComponent();
    }

    private void configureComponent() {
        this.setBackgroundColor(Color.RED);
        this.setGravity(Gravity.CENTER_HORIZONTAL);
    }
}