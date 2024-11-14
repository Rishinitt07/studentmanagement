import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';

const Home = () => {
  return (
   
        <div className='h-[100vh] w-screen bg-white'>

            <div className='h-20 w-screen bg-purple-600 flex flex-wrap'>
                <h1 className='mt-6 ml-14 text-3xl font-mono'>
                    STUDENT MANAGEMENT
                </h1>
            


            </div>

            <Sidebar/>
           
        </div>

  )
}

export default Home




















