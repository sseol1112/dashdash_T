'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';

export default function Page() {
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((u: any) => u.userId === userId && u.userPwd === userPwd);
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert('로그인 되었습니다')
            router.push('/dashboard');
        } else {
            setError('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
    };
    return (
        <div className={styles.layoutBasic}>            
            <div className={styles.formWrap}>        
                <h3 className={styles.pageTitle}>로그인</h3>            
                <div className={styles.loginBox}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.sectWrap}>                            
                            <input type="text" className="textForm" id="id1" placeholder='아이디를 입력해주세요.' value={userId} onChange={e => setUserId(e.target.value)} />
                        </div>
                        <div className={styles.sectWrap}>
                            <input type="password" className="textForm" id="pwd1" placeholder='패스워드를 입력해주세요.' value={userPwd} onChange={e => setUserPwd(e.target.value)} />
                        </div>
                        {error && <div style={{color:'red', marginBottom:8}}>{error}</div>}
                        <div className={styles.formFoot}>
                            <div className={styles.footSub}>
                                <Link href="/dashboard/join">
                                    회원가입
                                </Link>
                                <Link href="/">
                                    홈 화면으로 이동
                                </Link>
                            </div>                            
                        </div>  
                        <button className={styles.listBtn} type="submit">로그인</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
