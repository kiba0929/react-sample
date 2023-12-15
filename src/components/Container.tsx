import { stringify } from 'querystring'
import {useState, useCallback} from 'react'

const usePopup = ()=>{
  //与えられたテキストを表示するポップアップを出現させる関数
  const cb = useCallback((text:string)=>{
    prompt(text)
  },[])

  return cb
}

type CountButtonProps = {
  label: string
  maximum: number
}

export const CountButton = (props: CountButtonProps)=>{
  const {label, maximum} = props
  const displayPopup = usePopup()

  const [count,setCount]=useState(0)

  const onClick = useCallback(()=>{
    const newCount = count + 1
    setCount(newCount)
    if(newCount>=maximum){
      displayPopup(`You've clicked ${newCount} times`)
    }
  },[count,maximum])
  
  const disabled = count >= maximum
  
}