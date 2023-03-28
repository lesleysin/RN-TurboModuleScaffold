package com.RTNBackCompatComponentKotlin

import android.content.Context
import android.util.AttributeSet
import android.widget.TextView;
import android.graphics.Color;
import android.view.Gravity;

class RTNBackCompatComponentKotlin : TextView {
  constructor(context: Context?) : super(context);
  constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs);
  constructor(context: Context?, attrs: AttributeSet?, defStyleAttr: Int) : super( context, attrs, defStyleAttr);

  init {
    this.configureComponent();
  }

  private fun configureComponent(): Unit {
    this.setBackgroundColor(Color.RED);
    this.setGravity(Gravity.CENTER_HORIZONTAL);
}
}