//hooks.js
import {useState,useEffect,useLayoutEffect} 
from "react"

//키보드가 눌릴 때마다 컴포넌트를 다시 렌더링하는 훅
export const useAnyKeyToRender=()=>{
  const [,forceRender]=useState()

  useEffect(()=>{
    window.addEventListener("keydown",forceRender)
    return ()=>window.removeEventListener("keydown",forceRender)
  },[])
}

export function useWindowSize(){
  const [width,setWidth]=useState(0)
  const [height,setHeight]=useState(0)

  const resize=()=>{
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useLayoutEffect(() => {
    window.addEventListener("resize",resize)
    resize()
    return () => 
    window.removeEventListener("reize",resize)
  }, [])

  return [width,height]
}

//마우스의 위치를 추척하는 경우
export function useMousePosition(){
  const[x,setX]=useState(0)
  const[y,setY]=useState(0)

  const setPosition=({x,y})=>{
    setX(x)
    setY(y)
  }

  useLayoutEffect(()=>{
    window.addEventListener("mousemove",setPosition)
    return ()=>window.removeEventListener("mousemove",setPosition)
  },[])

  return [x,y]
}