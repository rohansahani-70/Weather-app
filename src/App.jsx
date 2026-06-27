import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState('')
  const [state, setState] = useState('')
 async function getdata() {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=b26e572193454b8f82b62727261706&q=${state}&aqi=yes`)
   
    console.log(response.data);
    setState(state)
    setData(response.data)

    setState('')

   
    
  }
  return (
    <div className='card'>
      <div className='top'>
      <h1>Welcome to Weather app</h1>
      <div className='input'>
      <input type="text" value={state} onChange={(e)=>{
        setState(e.target.value)
      }}/>
        <button onClick={getdata}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg></button>
      </div>
      {
        data &&  ( <div >
          
          <div className='icon'>
            <h1>{data.location.name},{data.location.country}</h1>
          <h2>{data.current.condition.text} </h2>
          <img src={data.current.condition.icon} alt="" />
          
            <h2>{data.current.temp_c} </h2>
            </div>
         
          <div className='comfort-level'>
          <h2>Feels like :{data.current.feelslike_c} </h2>
          <h2>Humidity:{data.current.humidity} </h2>
          </div>
         
        </div>
        
      )}
      </div>
    </div>
  )
}

export default App