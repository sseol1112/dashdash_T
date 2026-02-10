'use client';
import { useState } from 'react';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';

export default function Page() {
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // 사용자 정보 localStorage에 저장
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push({ userId, userPwd });
        localStorage.setItem('users', JSON.stringify(users));
        alert('회원가입이 완료되었습니다!');
        setUserId('');
        setUserPwd('');
    };
    return (
        <div className={styles.layoutBasic}>            
            <div className={styles.formWrap}>        
                <h3 className={styles.pageTitle}>회원가입</h3>            
                <div className={styles.loginBox}>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className={styles.sectWrap}>                            
                            <input type="text" name="userId" className="textForm" id="id1" placeholder='아이디를 입력해주세요.' value={userId} onChange={e => setUserId(e.target.value)} />
                        </div>
                        <div className={styles.sectWrap}>
                            <input type="password" name="userPwd" className="textForm" id="pwd1" placeholder='패스워드를 입력해주세요.' value={userPwd} onChange={e => setUserPwd(e.target.value)} />
                        </div>
                        <div className={styles.formFoot}>
                            {/* <div className={styles.footSub}>
                                <Link href="/dashboard/join">
                                    
                                </Link>
                            </div> */}
                        </div>
                        <input type="submit" className={styles.listBtn} value="등록" />
                        
                    </form>

                </div>
                            
            </div>
            
             
        </div>
    );
}
