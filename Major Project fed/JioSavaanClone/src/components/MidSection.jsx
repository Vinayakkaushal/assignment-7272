import React from 'react'
import SideBar from './SideBar'
import MusicAlbum from './MusicAlbum'

function MainSection() {
  return (
    <>
        <div className='flex flex-row justify-start fixed top-[90px] align-middle w-full h-[75%] gap-2 '>
        <div className="border-r-4 border-gray-300">
            
            <SideBar/>

          </div>

          <div className='mt-[30px] ml-[30px] mr-[80px] flex flex-col overflow-y-auto gap-4'>
            <div className=''>
            <h1 className='text-2xl font-semibold'>Music List</h1>
            </div>
            <div className='bg-red-400 w-[320vh] h-[100%] overflow-x-auto flex flex-wrap'>
                

            </div>
          </div>
        </div>
    </>
  )
}

export default MainSection