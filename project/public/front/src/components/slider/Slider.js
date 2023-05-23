import React from 'react'
import {useState,useEffect} from 'react'
import '../../styles/slider.css'

function Slider() {
    const [currentState,setCurrentState]=useState(0)
    const image=[
        {url:'../../img/1.png'},
        {url:'../../img/2.png'},
    ]
    useEffect(()=>{
        const Next=setInterval(()=>{
            if(currentState === (image.length-1)){
                setCurrentState(0)
            }
            else{
                setCurrentState(currentState+1)
            }
        },3000)
        return ()=>{clearInterval(Next)}
    },[currentState])
    const goToNext=(c)=>{
        setCurrentState(c)
    }
  return (
    <section className='register'>
        <div className='slider'>
            <div className='img-slider'>
                <img className='slider-img' src={`${image[currentState].url}`} alt="#" />
            </div>
            <div className='next-slide' >
            {image.map((e,i) => {
                return(
                    <span   className={`slider-point ${i===currentState?'active':''}`} key={i} onClick={()=>{goToNext(i)}}></span> 
                )
            })}
            </div>
        </div>
        <div className='form'>
            
        </div>
    </section>
  )
}

export default Slider