import React from 'react'

function VolumeController() {
  return (
    <div className='w-[100px] absolute -rotate-[90deg] bottom-20 right-3.5 shadow-md bg-[#f8f8f8ff] px-2 rounded-xl '>
        <input type="range" name="volume" id="vol" min={0} max={100} step="0.1" value={0} className='h-[5px] text-green-400 range mr-[100px]'/>
    </div>
  )
}

export default VolumeController