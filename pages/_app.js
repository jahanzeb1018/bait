import '../styles/globals.css';

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import {useRouter} from 'next/router';

// framer motion
import { AnimatePresence, motion} from 'framer-motion';

// analytics
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return( 
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
          <Analytics />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
