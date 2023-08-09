import Link from 'next/link';

import {
  RiLinkedinLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiTiktokLine,
  RiTwitterLine,
} from 'react-icons/ri';

const Socials = () => {
  return(
  <div className='flex items-center gap-x-5 text-lg'>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiYoutubeLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiTwitterLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiTiktokLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
  </div>
    
  );
};

export default Socials;
