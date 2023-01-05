package com.RTNCentredText;

import androidx.annotation.Nullable;
import android.content.Context;
import android.util.AttributeSet;
import android.graphics.Color;

import android.widget.TextView;
import android.view.Gravity;

public class RTNCentredText extends TextView {

    public RTNCentredText(Context context) {
        super(context);
        this.configureComponent();
    }

    public RTNCentredText(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        this.configureComponent();
    }

    public RTNCentredText(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        this.configureComponent();
    }

    private void configureComponent() {
        this.setBackgroundColor(Color.RED);
        this.setGravity(Gravity.CENTER_HORIZONTAL);
    }
}