import React from 'react'
import {useState} from 'react'
function Likebutton({props}) {
    const [like,setLike] = useState(props)

    const check = () =>{
       setLike((prev)=>!prev)
    }

  return (
    <>
      <button onClick={check} className={`${like ? "like" : ""}`}>{like ? "Liked" : "Like"}</button>
    </>
  )
}
export default Likebutton