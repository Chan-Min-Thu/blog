import React from "react";
import { motion } from "framer-motion";


const Popular = () => {
   
  return (
    <div className="w-full flex flex-row flex-wrap justify-between md:h-[400px] mt-5 ">
      <motion.div 
      initial={{translateX:'-100%' ,opacity:0}}
      whileInView={{translateX:'0',opacity:1}}
      transition={{duration:1,delay:0.6}}
      className="md:w-1/3 w-9/12 md:h-[350px] h-[300px] overflow-hidden p-10 my-auto bg-blue-500 rounded-r-full">
        <p className="w-9/12 h-7/12 overflow-hidden mr-10">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae error odio dolorum culpa, saepe iste vel eaque neque vitae dolore, explicabo ut corrupti nemo consequatur laudantium. Adipisci, non id. sit amet consectetur adipisicing elit.</p></motion.div>
      <div className="md:w-1/4 w-full h-[300px] my-auto">
        <motion.img 
             initial={{ x: 600, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ duration: 1, delay: 0.3 }}
             src="https://plus.unsplash.com/premium_photo-1673968280732-fba5dcca851f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
             className="h-1/2 rounded-md mt-20 hover:translate-y-14 hover:delay-300 hover:duration-300"
           />
      </div>
      <div className="md:w-1/4 w-full h-[350px] flex flex-col justify-between pb-10 my-auto">
        <motion.img src="https://images.unsplash.com/photo-1675588829803-31906f19c0c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          className="md:w-2/3 w-3/5 h-36 mx-auto md:ml-0 rounded-md"
          initial={{y:-100,opacity:0}}
          whileInView={{y:10,opacity:1}}
          transition={{duration:1,delay:0.6}}/>
        <motion.img src="https://images.unsplash.com/photo-1675326570919-946d728e9a25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80"
           className="md:w-2/3 w-3/5 h-36 mx-auto md:ml-0 rounded-md"
           initial={{y:50,opacity:0}}
          whileInView={{y:10,opacity:1}}
          transition={{duration:1,delay:0.8}}/>
      </div>
    </div>
    
  );
};

export default Popular;
