//現在時刻の表示
  //1秒ごとに時間の更新
  //ドロップダウンメニューの選択で時刻の表記を変更(localstrageに保存され、それをみながら描画する)

import React, {useState, useEffect} from 'react'

const UPDATE_CYCLE = 1000

const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  US = 'en-US',
  JP = 'ja-JP'
}

const getLocaleFromString = (text:string) => {
  switch(text){
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)

  //タイマーをセットするための副作用
  useEffect(()=>{
    const timer = setInterval(()=>{
      setTimestamp(new Date())
    },UPDATE_CYCLE)

    //クリーンアップ関数を渡し、アンマウント時にタイマーの解除をする
    return ()=>{
      clearInterval(timer)
    }
  //初期描画時のみ実行する
  },[])

  //localstrageから値を読み込むための副作用で, 一回だけ
  useEffect(()=>{
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if(savedLocale !== null){
      setLocale(getLocaleFromString(savedLocale))
    }
  },[])

  //localeが変化した際にlocalstorageに値を保存するための副作用, 変化の際に毎回
  useEffect(()=>{
    localStorage.setItem(KEY_LOCALE, locale)
  //localeが変化した時だけ
  },[locale])

  return(
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select value={locale}
        onChange={(e)=>setLocale(getLocaleFromString(e.target.value))}>
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  )
}