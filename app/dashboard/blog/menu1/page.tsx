'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';

export default function Page() {
     
    return (
        <div className={styles.layoutBasic}>            
            <div className={styles.formWrap}>        
                <h3 className={styles.pageTitle}>menu1</h3>            
                <div className={styles.loginBox}>
                    <Link href="/dashboard" className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
                        <span>대쉬보드로 이동</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
