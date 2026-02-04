// import React from 'react'
// import LatestJobCards from './LatestJobCards';
// import { useSelector } from 'react-redux'; 

// // const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

// const LatestJobs = () => {
//     const {allJobs} = useSelector(store=>store.job);
   
//     return (
//         <div className='max-w-7xl mx-auto my-20'>
//             <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
//             <div className='grid grid-cols-3 gap-4 my-5'>
//                 {
//                     allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default LatestJobs


import React from 'react'
import LatestJobCards from './LatestJobCards'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const demoJobs = [1, 2, 3, 4, 5, 6]

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

const LatestJobs = () => {
  const { allJobs } = useSelector(store => store.job)

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">

      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-[#6A38C2]">Latest & Top  Job Openings</span>
        
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* 🔹 DEMO / HARD CODED CARDS */}
        {allJobs.length === 0 &&
          demoJobs.map((item, index) => (
            <motion.div
              key={item}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              className="
                bg-[#0B1220] border border-white/10
                rounded-xl p-6
                shadow-lg
              "
            >
              <div className="text-sm text-emerald-400 font-semibold mb-2">
                Full Time
              </div>

              <h2 className="text-lg font-bold text-white mb-2">
                Frontend Developer
              </h2>

              <p className="text-gray-400 text-sm mb-4">
                Build modern UI experiences using React and Tailwind CSS.
              </p>

              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>Remote</span>
                <span>₹6–10 LPA</span>
              </div>

              <button
                className="
                  mt-5 w-full py-2 rounded-lg
                  bg-emerald-400 text-black font-semibold
                "
              >
                View Job
              </button>
            </motion.div>
          ))}

        {/* 🔹 REAL BACKEND JOB CARDS */}
        {allJobs.length > 0 &&
          allJobs.slice(0, 6).map((job, index) => (
            <motion.div
              key={job._id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
            >
              <LatestJobCards job={job} />
            </motion.div>
          ))}

      </div>
    </div>
  )
}

export default LatestJobs
