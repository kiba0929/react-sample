import React, {useState, useMemo} from 'react'
export const UseMemoSample = () =>{
  const [text, setText] = useState('')
  const [items, setItems] = useState<string[]>([])
  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const onClickButton = ()=>{
    setItems((prevItems)=>{
      return [...prevItems, text]
    })
    setText('')
  }
  const numberOfCharacters1 = items.reduce((sub,item)=>sub + item.length, 0)
  //useMemo使用
  const numberOfCharacters2 = useMemo(()=>{
    return items.reduce((sub, item)=>sub+item.length,0)
  },items)//第二引数にitemsがあるのでitemsが新しくなった時だけ関数を更新してメモを更新

  return(
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}></button>
      </div>
      <div>
        {items.map((item,index)=>(
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total_1: {numberOfCharacters1}</p>
        <p>Total_2: {numberOfCharacters2}</p>
      </div>
    </div>
  )
}