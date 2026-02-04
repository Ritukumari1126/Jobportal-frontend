// // import React from 'react'
// // import { Button } from './ui/button'
// // import { Search } from 'lucide-react'

// // const HeroSection = () => {
// //   return (
// //     <div className='text-center'>
// //       <div className='flex flex-col gap-5 my-10'>
// //         <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83082] font-medium'>No. 1 Job Hunt Website</span>
// //         <h1 className='text-5xl font-bold'>Search , Apply & <br/> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
// //         <p>Get your Dream Job and live your Dream life by using our website!!</p>
// //         <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
// //           <input 
// //             type='text'
// //             placeholder='Find your dream jobs'
// //             className='outline-none border-none w-full'
// //           />
// //           <Button className='rounded-r-full bg-[#6A38C2]'>
// //             <Search className='h-5 w-5'/>
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default HeroSection


// // // // // import React from "react";
// // // // // import { Button } from "./ui/button";
// // // // // import { Search } from "lucide-react";
// // // // // import { motion } from "framer-motion";

// // // // // // Parent container animation
// // // // // const container = {
// // // // //   hidden: { opacity: 0 },
// // // // //   visible: {
// // // // //     opacity: 1,
// // // // //     transition: {
// // // // //       staggerChildren: 0.3, // stagger all children
// // // // //     },
// // // // //   },
// // // // // };

// // // // // // Fade-up animation for each element
// // // // // const fadeUp = {
// // // // //   hidden: { opacity: 0, y: 30 },
// // // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // // // // };

// // // // // // Optional: slide-in from left for heading
// // // // // const slideInLeft = {
// // // // //   hidden: { opacity: 0, x: -50 },
// // // // //   visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
// // // // // };

// // // // // const HeroSection = () => {
// // // // //   return (
// // // // //     <motion.div
// // // // //       className="text-center px-4 md:px-0"
// // // // //       variants={container}
// // // // //       initial="hidden"
// // // // //       animate="visible"
// // // // //     >
// // // // //       <div className="flex flex-col gap-5 my-10">
// // // // //         {/* Badge */}
// // // // //         <motion.span
// // // // //           className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83082] font-medium"
// // // // //           variants={fadeUp}
// // // // //         >
// // // // //           No. 1 Job Hunt Website
// // // // //         </motion.span>

// // // // //         {/* Heading */}
// // // // //         <motion.h1
// // // // //           className="text-4xl md:text-5xl font-bold leading-snug"
// // // // //           variants={slideInLeft}
// // // // //         >
// // // // //           Search, Apply & <br />
// // // // //           Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
// // // // //         </motion.h1>

// // // // //         {/* Paragraph */}
// // // // //         <motion.p
// // // // //           className="text-gray-600 text-sm md:text-base max-w-xl mx-auto"
// // // // //           variants={fadeUp}
// // // // //         >
// // // // //           Get your Dream Job and live your Dream life by using our website!
// // // // //         </motion.p>

// // // // //         {/* Search Box */}
// // // // //         <motion.div
// // // // //           className="flex w-full md:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto"
// // // // //           variants={fadeUp}
// // // // //           whileHover={{ scale: 1.03 }}
// // // // //           whileTap={{ scale: 0.97 }}
// // // // //         >
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Find your dream jobs"
// // // // //             className="outline-none border-none w-full py-2 px-2 rounded-l-full"
// // // // //           />
// // // // //           <Button className="rounded-r-full bg-[#6A38C2] hover:bg-[#582bb3] transition-colors duration-300">
// // // // //             <Search className="h-5 w-5 text-white" />
// // // // //           </Button>
// // // // //         </motion.div>
// // // // //       </div>
// // // // //     </motion.div>
// // // // //   );
// // // // // };

// // // // // export default HeroSection;


// // // // import React, { useState } from 'react'
// // // // import { Button } from './ui/button'
// // // // import { Search } from 'lucide-react'
// // // // import { useDispatch } from 'react-redux';
// // // // import { setSearchedQuery } from '@/redux/jobSlice';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const HeroSection = () => {
// // // //     const [query, setQuery] = useState("");
// // // //     const dispatch = useDispatch();
// // // //     const navigate = useNavigate();

// // // //     const searchJobHandler = () => {
// // // //         dispatch(setSearchedQuery(query));
// // // //         navigate("/browse");
// // // //     }

// // // //     return (
// // // //         <div className='text-center'>
// // // //             <div className='flex flex-col gap-5 my-10'>
// // // //                 <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
// // // //                 <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
// // // //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
// // // //                 <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
// // // //                     <input
// // // //                         type="text"
// // // //                         placeholder='Find your dream jobs'
// // // //                         onChange={(e) => setQuery(e.target.value)}
// // // //                         className='outline-none border-none w-full'

// // // //                     />
// // // //                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
// // // //                         <Search className='h-5 w-5' />
// // // //                     </Button>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     )
// // // // }

// // // // export default HeroSection

// // // import React, { useState } from "react";
// // // import { Button } from "./ui/button";
// // // import { Search } from "lucide-react";
// // // import { useDispatch } from "react-redux";
// // // import { setSearchedQuery } from "@/redux/jobSlice";
// // // import { useNavigate } from "react-router-dom";
// // // import { motion } from "framer-motion";

// // // // animation variants
// // // const container = {
// // //   hidden: { opacity: 0 },
// // //   visible: {
// // //     opacity: 1,
// // //     transition: { staggerChildren: 0.2 },
// // //   },
// // // };

// // // const fadeUp = {
// // //   hidden: { opacity: 0, y: 30 },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: { duration: 0.6, ease: "easeOut" },
// // //   },
// // // };

// // // const HeroSection = () => {
// // //   const [query, setQuery] = useState("");
// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();

// // //   const searchJobHandler = () => {
// // //     dispatch(setSearchedQuery(query));
// // //     navigate("/browse");
// // //   };

// // //   return (
// // //     <motion.div
// // //       className="text-center px-4"
// // //       variants={container}
// // //       initial="hidden"
// // //       animate="visible"
// // //     >
// // //       <div className="flex flex-col gap-5 my-10">
// // //         {/* Badge */}
// // //         <motion.span
// // //           variants={fadeUp}
// // //           className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium"
// // //         >
// // //           No. 1 Job Hunt Website
// // //         </motion.span>

// // //         {/* Heading */}
// // //         <motion.h1
// // //           variants={fadeUp}
// // //           className="text-4xl md:text-5xl font-bold leading-snug"
// // //         >
// // //           Search, Apply & <br />
// // //           Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
// // //         </motion.h1>

// // //         {/* Description */}
// // //         <motion.p
// // //           variants={fadeUp}
// // //           className="text-gray-600 max-w-xl mx-auto"
// // //         >
// // //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
// // //           aspernatur temporibus nihil tempora dolor!
// // //         </motion.p>

// // //         {/* Search Box */}
// // //         <motion.div
// // //           variants={fadeUp}
// // //           whileHover={{ scale: 1.03 }}
// // //           whileTap={{ scale: 0.97 }}
// // //           className="flex w-full md:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto"
// // //         >
// // //           <input
// // //             type="text"
// // //             placeholder="Find your dream jobs"
// // //             onChange={(e) => setQuery(e.target.value)}
// // //             className="outline-none border-none w-full py-2 px-2"
// // //           />
// // //           <Button
// // //             onClick={searchJobHandler}
// // //             className="rounded-r-full bg-[#6A38C2] hover:bg-[#582bb3]"
// // //           >
// // //             <Search className="h-5 w-5 text-white" />
// // //           </Button>
// // //         </motion.div>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // export default HeroSection;

// // import React, { useState } from 'react'
// // import { Button } from './ui/button'
// // import { Search } from 'lucide-react'
// // import { useDispatch } from 'react-redux'
// // import { setSearchedQuery } from '@/redux/jobSlice'
// // import { useNavigate } from 'react-router-dom'
// // import { motion } from 'framer-motion'

// // const container = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.25,
// //     },
// //   },
// // }

// // const item = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.7, ease: 'easeOut' },
// //   },
// // }

// // const HeroSection = () => {
// //   const [query, setQuery] = useState("")
// //   const dispatch = useDispatch()
// //   const navigate = useNavigate()

// //   const searchJobHandler = () => {
// //     dispatch(setSearchedQuery(query))
// //     navigate("/browse")
// //   }

// //   return (
// //     <motion.div
// //       className='text-center'
// //       variants={container}
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: false, amount: 0.4 }}   // 🔁 scroll up = animate again
// //     >
// //       <div className='flex flex-col gap-5 my-10'>

// //         <motion.span
// //           variants={item}
// //           className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'
// //         >
// //           No. 1 Job Hunt Website
// //         </motion.span>

// //         <motion.h1
// //           variants={item}
// //           className='text-5xl font-bold'
// //         >
// //           Search, Apply & <br />
// //           Get Your <span className='text-[#6A38C2]'>Dream Jobs</span>
// //         </motion.h1>

// //         <motion.p
// //           variants={item}
// //         >
// //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!
// //         </motion.p>

// //         <motion.div
// //           variants={item}
// //           className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'
// //         >
// //           <input
// //             type="text"
// //             placeholder='Find your dream jobs'
// //             onChange={(e) => setQuery(e.target.value)}
// //             className='outline-none border-none w-full'
// //           />
// //           <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
// //             <Search className='h-5 w-5' />
// //           </Button>
// //         </motion.div>

// //       </div>
// //     </motion.div>
// //   )
// // }

// // export default HeroSection















// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const searchJobHandler = () => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div className='text-center'>
//             <div className='flex flex-col gap-5 my-10'>
//                 <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
//                 <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
//                 <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
//                     <input
//                         type="text"
//                         placeholder='Find your dream jobs'
//                         onChange={(e) => setQuery(e.target.value)}
//                         className='outline-none border-none w-full'

//                     />
//                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
//                         <Search className='h-5 w-5' />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection


// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux'
// import { setSearchedQuery } from '@/redux/jobSlice'
// import { useNavigate } from 'react-router-dom'
// import { motion } from 'framer-motion'

// const container = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.25,
//     },
//   },
// }

// const item = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: 'easeOut' },
//   },
// }

// const HeroSection = () => {
//   const [query, setQuery] = useState("")
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const searchJobHandler = () => {
//     dispatch(setSearchedQuery(query))
//     navigate("/browse")
//   }

//   return (
//     <motion.div
//       className='text-center'
//       variants={container}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: false, amount: 0.4 }}   // 🔁 scroll up = animate again
//     >
//       <div className='flex flex-col gap-5 my-10'>

//         <motion.span
//           variants={item}
//           className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'
//         >
//           No. 1 Job Hunt Website
//         </motion.span>

//         <motion.h1
//           variants={item}
//           className='text-5xl font-bold'
//         >
//           Search, Apply & <br />
//           Get Your <span className='text-[#6A38C2]'>Dream Jobs</span>
//         </motion.h1>

//         <motion.p
//           variants={item}
//         >
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!
//         </motion.p>

//         <motion.div
//           variants={item}
//           className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'
//         >
//           <input
//             type="text"
//             placeholder='Find your dream jobs'
//             onChange={(e) => setQuery(e.target.value)}
//             className='outline-none border-none w-full'
//           />
//           <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
//             <Search className='h-5 w-5' />
//           </Button>
//         </motion.div>

//       </div>
//     </motion.div>
//   )
// }

// export default HeroSection






















import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const HeroSection = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query))
    navigate("/browse")
  }

  return (
    <motion.div
      className="
        relative min-h-screen flex items-center justify-center
        bg-[#050B0F] text-white overflow-hidden
        bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')]
        bg-cover bg-center
      "
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,170,0.18),transparent_60%)]" />

      <div className="relative z-10 flex flex-col gap-6 text-center px-4">

        <motion.span
          variants={item}
          className="mx-auto px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-emerald-400 font-medium border border-white/10"
        >
          No. 1 Job Hunt Website
        </motion.span>

        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Search, Apply & <br />
          Get Your{" "}
          <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(0,255,170,0.6)]">
            Dream Jobs
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-gray-300 max-w-xl mx-auto"
        >
          Discover opportunities that match your skills and ambition.
          Build your career with confidence.
        </motion.p>

        <motion.div
          variants={item}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="
            flex w-full md:w-[42%] mx-auto items-center gap-3
            bg-white/5 border border-white/10 backdrop-blur-xl
            rounded-full px-4 py-2
            shadow-[0_0_40px_rgba(0,255,170,0.18)]
          "
        >
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent w-full outline-none text-white placeholder-gray-400"
          />

          <Button
            onClick={searchJobHandler}
            className="
              rounded-full bg-emerald-400 hover:bg-emerald-300
              text-black shadow-[0_0_25px_rgba(0,255,170,0.6)]
            "
          >
            <Search className="h-5 w-5" />
          </Button>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default HeroSection

