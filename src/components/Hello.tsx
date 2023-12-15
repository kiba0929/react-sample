//クリックするとアラートを出すdiv要素を返す関数
const Hello = () => {
  const onClick = () => {
    alert('hello')
  }
  const text = "Hello, React"
  //テキストを子に持つdiv要素を返す
  return (
    //クリック時のコールバック関数をdivに渡している
    <div onClick={onClick}>
      {text}
    </div>
  )
}

//外部からHelloを読めるようにエクスポート
export default Hello