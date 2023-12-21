//Cat.js
import {memo} from "react"
//다른 고양이를 추가해도 기존 고양이가 다시 렌더링되면 안된다
//momo함수를 사용하면 프로퍼티가 변경될 때만 다시 렌더링

const Cat=({name})=>{
  console.log(`rendering ${name}`)
  return <p>{name}</p>
}

const PureCat=memo(Cat)

export default PureCat