// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';


const ProjectsBtn = () => {
  return ( 
    <div className='mx-auto xl:mx-0'>
      <h1 href={'/work'} 
        className='animate-pulse relative w-[160px] h-[60px] flex justify-left items-center 
        bg-cover bg-center bg-no-repeat group text-xl font-semibold'
      > Coming soon . . .
        {/*<Image 
          src={'/View-Projectv2.png'} 
          width={141} 
          height={148} 
          alt='' 
          className='animate-pulse w-full h-full max-w-[80px] max-h-[60px]'
  />*/}
  
        {/*<HiArrowRight className='absolute text-5xl group-hover:translate-x-[150%] 
        transition-all duration-300 transform translate-x-[120%] text-accent ' />*/}
      </h1>
    </div>
  );
};

export default ProjectsBtn;
