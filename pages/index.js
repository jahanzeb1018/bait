// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../variants';



const Home = () => {
  return (
     
     <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-30 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='h1'>
          Listen AI <span className='text-accent'>beats</span>
          </motion.h1>
          <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-justify'>
          Breaking barriers through the power of AI. Welcome to the place where problems are met with intelligent solutions. Our mission is to revolutionize industries, reshape experiences, and create a future where AI-driven advancements are at the forefront of progress.
          </motion.p>
          {/* btn*/}
          <div className='flex justify-center xl:hidden relative z-10 '>
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'>
            <div className='transform translate-x-0'>
              <ProjectsBtn />
              </div>
          </motion.div>
          
        </div>
      </div>
      {/* image */}
      <div className='w-[1100px] h-full absolute right-0 bottom-0'>
        
        {/* bg image*/}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div variants={fadeIn('up', 0.5)} initial='hidden' animate='show' exit='hidden' transition={{duration: 1, ease: 'easeInOut'}} className='w-full h-full max-w-[1000px] max-h-[1000px] absolute -bottom-32 lg:bottom-[-15%] lg:right-[-7%]'>
          <Avatar />
        </motion.div>
      </div>
     </div>
     );
};

export default Home;
