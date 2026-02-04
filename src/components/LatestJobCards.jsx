
// import React from 'react'
// import { Badge } from './ui/badge'
// import { useNavigate } from 'react-router-dom'

// const LatestJobCards = ({job}) => {
//     const navigate = useNavigate();
//     return (
//         <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
//             <div>
//                 <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
//                 <p className='text-sm text-gray-500'>India</p>
//             </div>
//             <div>
//                 <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
//                 <p className='text-sm text-gray-600'>{job?.description}</p>
//             </div>
//             <div className='flex items-center gap-2 mt-4'>
//                 <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
//                 <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
//                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
//             </div>

//         </div>
//     )
// }

// export default LatestJobCards




import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      onClick={() => navigate(`/description/${job._id}`)}
      className="
        p-6 rounded-xl cursor-pointer
        bg-[#0B1220] border border-white/10
        shadow-[0_0_25px_rgba(0,0,0,0.4)]
        hover:shadow-[0_0_40px_rgba(0,255,170,0.25)]
        transition-shadow duration-300
      "
    >
      {/* Company Info */}
      <div className="mb-3">
        <h1 className="font-semibold text-lg text-white">
          {job?.company?.name}
        </h1>
        <p className="text-sm text-gray-400">India</p>
      </div>

      {/* Job Title & Description */}
      <div className="mb-4">
        <h1 className="font-bold text-xl text-white mb-1">
          {job?.title}
        </h1>
        <p className="text-sm text-gray-400 line-clamp-2">
          {job?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge
          variant="ghost"
          className="text-emerald-400 border border-emerald-400/30"
        >
          {job?.position} Positions
        </Badge>

        <Badge
          variant="ghost"
          className="text-sky-400 border border-sky-400/30"
        >
          {job?.jobType}
        </Badge>

        <Badge
          variant="ghost"
          className="text-purple-400 border border-purple-400/30"
        >
          {job?.salary} LPA
        </Badge>
      </div>
    </motion.div>
  )
}

export default LatestJobCards

