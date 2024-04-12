import React from 'react';
import { FaHistory, FaMusic, FaPodcast, FaUser } from 'react-icons/fa';
import "./but.css"
function SideBar() {
  return (
    <>
      <div className='flex flex-col justify-between w-[200px] h-[100%] bg-white'>

        <div className='flex flex-col justify-between gap-3 mt-3 mx-10'>
          <button className='text-violet-300 cursor-default'>Browse</button>
          <button className='font-semibold hover:text-gray-400 cursor-pointer'>
            Top Releases
          </button>
          <button className='font-semibold hover:text-gray-400 cursor-pointer'>
            Top Charts
          </button>
          <button className='font-semibold hover:text-gray-400 cursor-pointer'>
            Top Playlists
          </button>
          <button className='font-semibold hover:text-gray-400 cursor-pointer'>
            Top Artists
          </button>
          <button className='font-semibold hover:text-gray-400 cursor-pointer'>
            Podcasts
          </button>
        </div>

        <div className='flex flex-col justify-between gap-3 mt-3 mx-10 mb-10'>
          <button className='text-violet-300 cursor-default hover:text-gray-400'>Library</button>
          <button className='flex items-center ml-4 gap-2 hover:text-gray-400'>
            <FaHistory size={20} />
            <span>History</span>
          </button>
          <button className='flex items-center ml-4 gap-2 hover:text-gray-400'>
            <FaMusic size={20} />
            <span>Music</span>
          </button>
          <button className='flex items-center ml-4 gap-2 hover:text-gray-400'>
            <FaPodcast size={20} />
            <span>Podcasts</span>
          </button>
          <button className='flex items-center ml-4 gap-2 hover:text-gray-400'>
            <FaUser size={20} />
            <span>Artists</span>
          </button>
        </div>
        <div className='flex flex-col justify-between gap-3 mt-3 mx-10 mb-20'>
        <button className='playlist-button'>
+New Playlist</button>
        </div>
      </div>
    </>
  );
}

export default SideBar;
