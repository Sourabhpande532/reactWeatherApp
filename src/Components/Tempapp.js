import React, { useEffect, useState } from 'react'
import "./css/style.css"


const Tempapp = () => {
    const [city, setcity] = useState(null);


    // for user what exactly typing 
    const [search, setsearch ] = useState('mumbai')

    useEffect(()=>{
      const fetchapi = async()=>{
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4cd6e65c93931133bb70a0a36b4828c0` 
      const Inprocess = await fetch(url);
      const Inprocces2 = await Inprocess.json();
      // console.log(Inprocces2)
      setcity(Inprocces2.main)

      }
      fetchapi();
    },[search])

  return (
<>
    <div className='box'>
        <div className='inputData'>
               <div className='inputFeild'>
               <input
         type="search"
         placeholder='Enter Name'
         onChange={(events)=>{setsearch(events.target.value)}}
         defaultValue = "mumbai"
         className='inputone'
       
          />
               </div>
       
        </div>
       {/* ternary operator */}
       {/* agar city nai milti to data not found
       aur milti hai to ye */}
        {
          !city ? (<p> Data Not found</p>) : (
          <>
            <div className='info'>
            <h2 className='location'>
            <i className="fa-solid fa-street-view"></i> {search}
            </h2>
            <h1 className='temp'>
              {city.temp} °Cel
            </h1>
            <h3 className='tempmin_max'>Min :{city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
         </div>

         <div className='wave -one'></div>
         <div className='wave -two'></div>
         <div className='wave -three'></div>
         </>
          )
        }
        
        


    </div>
</>
  )
}

export default Tempapp