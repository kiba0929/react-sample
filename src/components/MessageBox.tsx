import React, {useState, useRef, useImperativeHandle} from 'react'

const Child = React.forwardRef((props, ref)=>{
  const [message, setMessage] = useState<string | null>(null)

  //親のrefから参照できる値を指定
  useImperativeHandle(ref, ()=>{
    //親方showmessageを呼び出せるように
    showMessage: ()=>{
      const date = new Date()
      const message = `${date.toLocaleString()} now`
      setMessage(message)//再描画させる
    }
  })

  return <div>{message!=null ? <p>{message}</p>:null}</div>
})

const Parent = ()=>{
  const childRef = useRef<{showMessage: ()=>void}>(null)
  const onClick = ()=>{
    if(childRef.current !== null){
      //子のrefを参照
      childRef.current.showMessage()
    }
  }

  return(
    <div>
      <button onClick={onClick}>Show Message</button>
      <Child ref={childRef} />
    </div>
  )
}