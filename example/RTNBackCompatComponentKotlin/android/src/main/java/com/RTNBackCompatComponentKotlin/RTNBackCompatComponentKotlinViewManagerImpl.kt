package com.RTNBackCompatComponentKotlin

import com.facebook.react.uimanager.ThemedReactContext

import com.RTNBackCompatComponentKotlin.*

object RTNBackCompatComponentKotlinViewManagerImpl {
  const val NAME = "RTNBackCompatComponentKotlin";

  fun createViewInstance(context: ThemedReactContext?) = RTNBackCompatComponentKotlin(context);

  fun setText(view: RTNBackCompatComponentKotlin?, text: String?) {
    view?.setText(text)
  }
}