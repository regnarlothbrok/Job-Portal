// import React from 'react'
import { Badge } from "./ui/badge"

function LatestJobCards() {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
      
      <div className="">Company Name</div>
      <p className='text-sm text-gray-500'>India</p>
      <div>
        <h1>JobTitle</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quia consequuntur exercitationem.</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant ='ghost'>12 Position</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant ='ghost'>Part Time</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant ='ghost'>50 LPA</Badge>
      </div>
    </div>
  )
}

export default LatestJobCards