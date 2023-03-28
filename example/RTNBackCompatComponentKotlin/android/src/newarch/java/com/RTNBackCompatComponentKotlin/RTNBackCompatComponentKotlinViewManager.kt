package com.RTNBackCompatComponentKotlin

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.RTNBackCompatComponentKotlinManagerInterface
import com.facebook.react.viewmanagers.RTNBackCompatComponentKotlinManagerDelegate

import com.RTNBackCompatComponentKotlin.*

@ReactModule(name = RTNBackCompatComponentKotlinViewManagerImpl.NAME)
class RTNBackCompatComponentKotlinViewManager(var ctx: ReactApplicationContext) : SimpleViewManager<RTNBackCompatComponentKotlin>(),
RTNBackCompatComponentKotlinManagerInterface<RTNBackCompatComponentKotlin> {
  private val mDelegate: ViewManagerDelegate<RTNBackCompatComponentKotlin>

  init {
    mDelegate = RTNBackCompatComponentKotlinManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<RTNBackCompatComponentKotlin>? {
    return mDelegate
  }

  override fun getName(): String {
    return RTNBackCompatComponentKotlinViewManagerImpl.NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): RTNBackCompatComponentKotlin {
    return RTNBackCompatComponentKotlinViewManagerImpl.createViewInstance(context)
  }

  @ReactProp(name = "text")
  override fun setText(view: RTNBackCompatComponentKotlin?, text: String?) {
    RTNBackCompatComponentKotlinViewManagerImpl.setText(view, text)
  }
  
}