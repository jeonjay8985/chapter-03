//src/components/Checkbox.js
//useEffect 훅스
import {useState, useEffect,useReducer} from "react"

function Checkbox(){
  // const [checked, setChecked]=useState(false)

  //렌더러가 렌더링을 한 직후에 부수 효과(side effect)로 실행
  //useEffect 함수
  // useEffect(()=>{
  //   alert(`checked:${checked.toString()}`)
  // })

  //리듀서 함수
  //- 현재 상태를 받아서 새 상태를 반환하는 함수
  // function toggle(){
  //   setChecked(checked=>!checked)
  // }
  const [checked,toggle]=useReducer(checked=>!checked,false)

  return (
    <>
      <input type="checkbox" value={checked}
        onChange={toggle}
        />
      {checked?"checked":"not checked"}
    </>
  )
}

export default Checkbox