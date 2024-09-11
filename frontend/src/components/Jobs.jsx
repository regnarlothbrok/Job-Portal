/* eslint-disable react/jsx-key */
// import React from 'react'

import FilterCard from "./FilterCard"
import Job from "./job"
import Navbar from "./ui/shared/Navbar"


const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8,]

export default function Jobs() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5" >
        <div className="flex gap-5">

          <div className='w-1/5'>
            <FilterCard />
          </div>
          {
            jobsArray.length <= 0 ? <span>Job Not Found</span> : (
              <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid grid-cols-3 gap-4'>
                  {
                    jobsArray.map((item, index) => (<Job key={index} />))
                  }
                </div>
              </div>
            )

          }
        </div>

      </div>
    </div>
  )
}


// {
//   jobsArray.length <= 0 ? <span>Job Not Found</span> : (
//     <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
//       <div className="grid grid-cols-3 gap-4">
//         {
//           jobsArray.map((item, index) => (
//             <div>
//               <Job key = {index}/>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }