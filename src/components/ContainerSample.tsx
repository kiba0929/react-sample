const Container = (props: {title: string; children: React.ReactElement})=>{
  const {title, children} = props

  return(
    <div style={{background:'red'}}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

const Parent = ()=>{
  return(
    <Container title="Hello">
      <p>ここがchildrenに渡される</p>
    </Container>
  )
}

export default Parent