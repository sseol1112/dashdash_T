'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';

export default function Page() {
     
    return (
        <div className={styles.layoutBasic}>            
            <div className={styles.formWrap}>        
                <h3 className={styles.pageTitle}>menu3</h3>            
                <div className={styles.loginBox}>
                    
                </div>
            </div>
        </div>
    );
}
