
import React, { useState } from 'react'
import "./Home.css"

export const Home = () => {
    const [value, setvalue] = useState("")
  return (
 
    <div className='container'>
        <div className='calcutaior'> 
         <form action=''>
            <div className='display'>
                <input type='text' value={value}/>
            </div>
            <div> 
                <input type='button' value= "AC" onClick={e=>setvalue("")}/>
                <input type='button' value= "DC" onClick={e=>setvalue( value.slice(0,-1))}/>
                <input type='button' value= "." onClick={e=>setvalue( value + e.target.value)}/>
                <input type='button' value= "/" onClick={e=>setvalue( value + e.target.value)}/>


            </div>
            <div>
                <input type='button' value= "7" onClick={e=>setvalue( value + e.target.value)}/>
                <input type='button' value= "8" onClick={e=>setvalue( value + e.target.value)}/>
                <input type='button' value= "9" onClick={e=>setvalue( value + e.target.value)}/>
                <input type='button' value= "*" onClick={e=>setvalue( value + e.target.value)}/>

            </div>
            <div>
                <input type='button' value= "4" onClick={e=>setvalue( value + e.target.value)}/>
                <input type='button' value= "5" onClick={e=>setvalue( value + e.target.value)}/>
                <input type='button' value= "6" onClick={e=>setvalue( value + e.target.value)}/>
                <input type='button' value= "+" onClick={e=>setvalue( value + e.target.value)}/>

            </div>
            <div>
                <input type='button' value= "1" onClick={e=>setvalue( value + e.target.value)}/>
                <input type='button' value= "2" onClick={e=>setvalue( value + e.target.value)}/>
                <input type='button' value= "3" onClick={e=>setvalue( value + e.target.value)}/>
                <input type='button' value= "-" onClick={e=>setvalue( value + e.target.value)}/>

            </div>
            <div>
                <input type='button' value= "0" onClick={e=>setvalue( value + e.target.value)}/>
                <input type='button' value= "00" onClick={e=>setvalue( value + e.target.value)}/>
                <input type='button' value= "=" className='equl' onClick={e => setvalue(eval(value))}/>
            </div>

         </form>
         </div>
         {/* <h2 style={{color:"red", marginLeft:"10%"}}>  Samiksha Full Stack Delovper</h2> */}
    </div>
  )
}
