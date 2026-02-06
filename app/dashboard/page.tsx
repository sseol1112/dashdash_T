import styles from '@/app/ui/home.module.css';

export default function Page() {
    return (
        <div className={styles.layoutBasic}>
            <div className={styles.formWrap}>    
                
                <div className={styles.formSection}>
                    <div className={styles.formHead}>    
                        <div className={styles.avatar}>                        
                            D01
                        </div>
                        <p>사용자명</p>                    
                    </div>
                    <div className={styles.formCont}>
                        <p>대시보드 페이지입니다.</p>
                    </div>
                </div>  
                <div className={styles.formFoot}>
                    <button className={styles.listBtn}>목록</button>
                </div>              
            </div>
            
             
        </div>
    );
}