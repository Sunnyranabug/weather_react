import React, { useState } from 'react'
import axios from "axios"

function Weather() {
  const [location,setLocation]= useState("")
  const [data, setData]=useState({})

let URL=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0498080e1a5197f270b0caf571365be5&units=metric`

async function GetWeather(){
    const response =await axios (URL);
    setData(response.data)
}


return (<>
<div className="bg-[url('./img3.jpg')] bg-cover bg-center bg-no-repeat  h-screen w-[100%]">
 <div className='min-h-full w-full bg-black opacity-50 absolute top-0 left-0 '></div>

<div className='absolute overflow-hidden  top-[70%] left-8    items-center '>

 <div className='flex'>
   <div className='font-semibold text-[3rem] text-white'>{data.main ? `${Math.floor(data.main.temp) }°C` : `N/A`} </div>  
   <div>{data.weather? <img src={data.weather ?`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : `http://openweathermap.org/img/wn/$%7BiconCode%7D@2x.png`} 
    alt="Weather Icon" className=""/> : null}</div>
 </div>

 &nbsp; &nbsp;<div className='font-bold text-[3rem] mt-0 text-white'>   {data.name}</div>


   
<div></div>


</div>



 <div className='absolute right-0 top-0 h-full  md:w-[26rem] md:bg-black md:opacity-60 w-full'> 
  <div className='p-6 text-center text-white'>
    
  <div className='flex justify-center'>
      {data.weather? <img src={data.weather ?`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : `http://openweathermap.org/img/wn/$%7BiconCode%7D@2x.png`} 
    alt="Weather Icon" className=""/> : null}
     </div>

  <div className='text-[3rem] text-white font-semibold border-b-2'> Weather</div>
<div className='flex justify-between text-center p-3 border-b-2'>
<input 
value={location}
type="text"
placeholder='Search City....' 
onChange={(e)=> setLocation(e.target.value)}
className=' bg-transparent w-[80%] outline-none text-white'/>

<button onClick={GetWeather} className='bg-white text-black rounded-full p-1 w-[2rem]'><i class="fa-solid fa-magnifying-glass"></i></button>
</div> 
   <div>
    <h1 className='border-b-2 p-2 font-serif text-[1.5rem]'> City :  {data.name }</h1>
    <div className='flex justify-between p-3 border-b-2'><div>Temperature</div><h2 className='font-serif text-lg'>{data.main ? `${data.main.temp}  C` : `N/A`}</h2></div>
    </div>
    <div className='flex justify-between p-3 border-b-2'> <div> Humidity </div> <div className='font-serif text-lg'>  { data.main ? `${data.main.pressure} PA`   : `N/A`}  </div></div>
   <div className='flex justify-between p-3 border-b-2'> <div> Wind Speed </div> <h1 className='font-serif text-lg'>  {data.wind ? `${data.wind.speed} Km/hr` : `N/A`} </h1></div>

   <div className='flex justify-between p-3 border-b-2'> <div> Humidity </div> <h1 className='font-serif text-lg'>  {data.main ? `${data.main.humidity} %` : `N/A`} </h1></div>
</div>
</div>
</div>
</>
)
}
export default Weather
