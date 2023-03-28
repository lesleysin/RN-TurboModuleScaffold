package com.RTNComponentKotlin

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.RTNComponentKotlinManagerInterface
import com.facebook.react.viewmanagers.RTNComponentKotlinManagerDelegate

import com.RTNComponentKotlin.*

@ReactModule(name = RTNComponentKotlinViewManager.NAME)
class RTNComponentKotlinViewManager : SimpleViewManager<RTNComponentKotlin>(),
RTNComponentKotlinManagerInterface<RTNComponentKotlin> {
  private val mDelegate: ViewManagerDelegate<RTNComponentKotlin>

  init {
    mDelegate = RTNComponentKotlinManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<RTNComponentKotlin>? {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): RTNComponentKotlin {
    return RTNComponentKotlin(context)
  }

  @ReactProp(name = "text")
  override fun setText(view: RTNComponentKotlin?, text: String?) {
    view?.setText(text)
  }

  companion object {
    const val NAME = "RTNComponentKotlin"
  }
}