import React, {useState, useRef} from 'react'

const sleep = (ms:number)=>new Promise((resolve)=>setTimeout(resolve, ms))

const UPLOAD_DELAY = 5000

const ImageUploader = () => {
  //隠れたinput要素にアクセス
  const inputImageRef = useRef<HTMLInputElement | null>(null)
  //選択されたファイルデータを保持
  const fileRef = useRef<File | null>(null)
  const [message, setMessage]=useState<String | null>('')

  //画像をアップロードというテキストがクリック
  const onClickText =()=>{
    if(inputImageRef.current!==null){
      inputImageRef.current.click()
    }
  }
  //ファイル選択の後のコールバック
  const onChangeImage = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const files = e.target.files
    if(files!==null && files.length > 0){
      fileRef.current = files[0]
    }
  }
  //アップロードボタンが押されたとき
  const onClickUpload = async ()=>{
    if(fileRef.current!==null){
      //普通はAPIを読んで、だからawait
      await sleep(UPLOAD_DELAY)
      //成功の知らせ
      setMessage('${fileRef.current.name} has been successfully uploaded')
    }
  }

  return(
    <div>
      <p style={{textDecoration: 'underline'}} onClick={onClickText}>
      画像をアップロード
      </p>
      <input
      ref={inputImageRef}
      type="file"
      accept="image/*"
      onChange={onChangeImage}
      style={{visibility: 'hidden'}} />
      <br />
      <button onClick={onClickUpload}>アップロードする</button>
      {message !== null && <p>{message}</p>}
    </div>
  )
}