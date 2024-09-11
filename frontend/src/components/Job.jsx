// import React from 'react'

import { Bookmark } from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { Badge } from "./ui/badge"


// import Navbar from "./ui/shared/Navbar"


export default function Job() {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between ">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant='outline' size="icon"> <Avatar><AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" /></Avatar></Button>

        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae possimus nesciunt quasi beatae blanditiis totam id rerum laudantium ducimus incidunt?</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
      <Badge className={'text-blue-700 font-bold'} variant ='ghost'>12 Position</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant ='ghost'>Part Time</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant ='ghost'>50 LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#6A38C2] hover:bf-[#5b30a6]">Save For Later</Button>
      </div>
      
    </div>
  )
}
