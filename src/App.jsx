import React, { useState } from 'react'

const App = () => {
  const [task, settask] = useState("")
  const [disc, setdisc] = useState("")
  const submitHandler = (e)=>{
      e.preventDefault();
      console.log("Your task is :",task,"/n Your description is :",disc);
      settask("")
      setdisc("")
  }
  return (
    <div>
      <form onSubmit={submitHandler} > 
        <input className='px-5 py-4 mt-10 ml-10 rounded bg-zinc-100' onChange={(e) => settask(e.target.value)} type="text" placeholder='Enter your Task' value={task} />
        <br />
        <input className='px-5 py-4 mt-10 ml-10 rounded bg-zinc-100' onChange={(e) => setdisc(e.target.value)} type="text" placeholder='Enter your Description' value={disc}/>
        <br />
        <button className='px-5 py-2 mt-10 ml-10 rounded bg-blue-200'>Add it</button>
      </form>
    </div>
  )
}

export default App