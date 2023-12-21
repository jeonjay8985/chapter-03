//Phrase.js
import{useState,useEffect} from "react"

export default function Phrase(){
  const [val,set]=useState("")
  const [phrase,setPhrase]=useState("example phrase")

  const createPhrase=()=>{
    setPhrase(val)
    set("")
  }
  // useEffect 훅을 구체적인 데이터 변경과 연동시켜
  // 호출 시점을 제어 한다

  //val 값이 바뀌때만 호출
  useEffect(()=>{
    console.log(`typing "${val}"`)
  },[val])
  //phrase값이 변경될 때만 호출
  useEffect(()=>{
    console.log(`saved phrase: "${phrase}"`)
  },[phrase])
  //여러 값을 감사 할수 있다
  //어느 값이든 바뀌면 함수가 다시 호출된다
  useEffect(()=>{
    console.log("either val or phrase has changed")
  },[val,phrase])
  //두 번째 인자로 빈 배열을 넘길 수도 있다
  //빈 배열은 초기 렌더링 직후 useEffect가 단 한번만 호출
  //초기 렌더링 직후에만 호출
  useEffect(()=>{
    console.log("only once after initial render")
  },[])
  //최초 렌더링시에만 호출되는 효과는 특히 초기화에 아주 유용하게 쓰임

  return (
    <>
      <label>Favorite phrase</label>
      <input value={val} placeholder={phrase}
        onChange={e=>set(e.target.value)}/>
      <button onClick={createPhrase}>send</button>
    </>
  )
}