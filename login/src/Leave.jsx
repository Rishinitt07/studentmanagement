import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';

const Leave = () => {
  return (
   
        <div className='h-[100vh] w-screen bg-white '>

            <div className='h-20 w-screen bg-purple-600 flex flex-wrap'>
                <h1 className='mt-6 ml-14 text-3xl font-mono'>
                    STUDENT MANAGEMENT
                </h1>
             


            </div>



            <div className='  absolute ml-[18%] flex bg-gray-200 w-[80%] h-[80%] mt-8 '>
              <div>
              <input className=' h-8 w-72 ml-10 mt-10 ' placeholder='from'/>
              <input placeholder='to' className='h-8 w-72'/>
              <input placeholder='subject'className='h-8 w-72 mt-7'/>
              <input placeholder='body' className='h-8 w-72'/>

              <button className='w-28 h-10 bg-green-500 rounded-xl text-white ml-[83%] mt-[33%] '>submit</button>
 
              </div>

         
            
             
            </div>

            <Sidebar/>
           
           
        </div>

  )
}

export default Leave
