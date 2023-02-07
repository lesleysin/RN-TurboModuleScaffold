package com.TempName

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.TempNameManagerInterface
import com.facebook.react.viewmanagers.TempNameManagerDelegate

import com.TempName.*

@ReactModule(name = TempNameViewManagerImpl.NAME)
class TempNameViewManager : SimpleViewManager<TempName>(),
TempNameManagerInterface<TempName> {
  private val mDelegate: ViewManagerDelegate<TempName>

  init {
    mDelegate = TempNameManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<TempName>? {
    return mDelegate
  }

  override fun getName(): String {
    return TempNameViewManagerImpl.NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): TempName {
    return TempNameViewManagerImpl.createViewInstance(context)
  }

  @ReactProp(name = "text")
  override fun setText(view: TempName?, text: String?) {
    TempNameViewManagerImpl.setText(view, text)
  }
  
}