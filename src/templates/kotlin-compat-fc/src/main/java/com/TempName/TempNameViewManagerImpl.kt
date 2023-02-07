package com.TempName

import com.facebook.react.uimanager.ThemedReactContext

import com.TempName.*

object TempNameViewManagerImpl {
  const val NAME = "TempName";

  fun createViewInstance(context: ThemedReactContext?) = TempName(context);

  fun setText(view: TempName?, text: String?) {
    view?.setText(text)
  }
}