'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { mbtiTypes, mbtiMatches } from '../dashboard/mbti-data';
import MbtiMatch from '@/app/ui/mbti-match';

export default function Page() {
    const [userName, setUserName] = useState('');
    const [selected, setSelected] = useState('');
    const [result, setResult] = useState<string[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
            if (user && user.userId) {
                setUserName(user.userId);
            }
            // mbti 값 불러오기
            const mbti = localStorage.getItem('myMbti');
            if (mbti) setSelected(mbti);
        }
    }, []);

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const mbti = e.target.value;
        setSelected(mbti);
        setResult(mbtiMatches[mbti] || []);
      };

    return (
        <div className={styles.layoutBasic}>
            <div className={styles.formWrap}>    
                <div className={styles.formSection}>
                    <div className={styles.formHead}>    
                        <div className={styles.avatar}>                        
                            {userName ? userName.charAt(0).toUpperCase() : 'D01'}
                        </div>
                        <div>
                        <p>{userName ? userName : '사용자명'}</p>    
                        {/* 내 MBTI 정보 노출 */}
                        {selected && (
                          <div style={{marginTop:'8px', fontWeight:600, color:'#222'}}>
                            MBTI : <span style={{color:'#0070f3'}}>{selected}</span>
                          </div>
                        )}
                        </div>
                    </div>
                    <div className={styles.blogSection}>
                        <div className={styles.blogCategory}>
                            <ul>
                                <li className={styles.cate}>
                                    <Link href="dashboard/blog/menu1">
                                       MBTI 
                                    </Link>
                                </li>
                                <li className={styles.cate}>
                                    <Link href="dashboard/blog/menu2">
                                       메뉴2
                                    </Link>
                                </li>
                                <li className={styles.cate}>
                                    <Link href="dashboard/blog/menu3">
                                       메뉴3 
                                    </Link>
                                </li>
                                <li className={styles.cate}>
                                    <Link href="dashboard/blog/menu4">
                                       메뉴4 
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className={styles.formCont}>
                            <p> {userName}님의 대시보드 페이지입니다.</p>                            
                        </div>
                    </div>
                </div>  
                <div className={styles.formFoot}>
                    <Link href="/">
                        <button className={styles.listBtn}>목록</button>
                    </Link>
                </div>              
            </div>
        </div>
    );
}