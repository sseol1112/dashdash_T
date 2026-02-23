import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';
import Hero  from '@/app/components/Hero';

export default function AcmeLogo() {
  return (
          
    <div className={`${styles.flexBasic} flex flex-row items-center leading-none text-white`}>        
      <div className={styles.circle}>T51X</div>      
      {/* <p className="text-[44px]">The Fiftyone X</p> */}      
    </div>
    
    
  );
}
