import React, { useEffect, useState } from 'react'
import './App.css'
import Title from './Title'

const App = () => {
  const [text,setText] = useState('ridhima');
  const [text2,setText2] = useState('ridhima');
  // Component didmount
  // useEffect(()=>{
  //   alert(text)
  // },[])

  //component didupdate
  // useEffect(()=>{
  //   alert(text2)
  // },[text2])

  // component didunmount
  // useEffect(()=>{
  //   setTimeout(() => {
  //     alert('timeout')
  //   }, 2000);
  // },[])
  const [loader,setLoader] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{setLoader(!loader)},2000)
  },[])

  return (
    <div>
        {
            loader?
            <Title/>:null
        }
        <input value={text} onChange={e=>setText(e.target.value)} type = "text" />
        <input value={text2} onChange={e=>setText2(e.target.value)} type = "text" />
    </div>
  )
}

export default App