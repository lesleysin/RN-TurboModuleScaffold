package com.TempName

import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.bridge.ReactApplicationContext

import com.TempName.*

class TempNameViewManager(var context: ReactApplicationContext) : SimpleViewManager<TempName>() {

  override fun getName() = TempNameViewManagerImpl.NAME

  public override fun createViewInstance(context: ThemedReactContext): TempName = TempNameViewManagerImpl.createViewInstance(context)

  @ReactProp(name = "text")
  fun setFoo(view: TempName?, text: String?) {
    TempNameViewManagerImpl.setText(view, text)
  }
}