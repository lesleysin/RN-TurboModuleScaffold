package com.RTNBackCompatComponentKotlin

import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.bridge.ReactApplicationContext

import com.RTNBackCompatComponentKotlin.*

class RTNBackCompatComponentKotlinViewManager(var context: ReactApplicationContext) : SimpleViewManager<RTNBackCompatComponentKotlin>() {

  override fun getName() = RTNBackCompatComponentKotlinViewManagerImpl.NAME

  public override fun createViewInstance(context: ThemedReactContext): RTNBackCompatComponentKotlin = RTNBackCompatComponentKotlinViewManagerImpl.createViewInstance(context)

  @ReactProp(name = "text")
  fun setFoo(view: RTNBackCompatComponentKotlin?, text: String?) {
    RTNBackCompatComponentKotlinViewManagerImpl.setText(view, text)
  }
}