'use client';

import { useState } from 'react';
import { mbtiTypes, mbtiMatches } from '../dashboard/mbti-data';
import styles from '@/app/ui/home.module.css';

export default function MbtiMatch() {
  const [selected, setSelected] = useState('');
  const [result, setResult] = useState<string[]>([]);
  let [flag, setFlag] = useState('');

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const mbti = e.target.value;
    setSelected(mbti);
    setResult(mbtiMatches[mbti] || []);
    setFlag("0");
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!selected) {
        alert("MBTI 유형을 먼저 선택해주세요.");
        return;
    }
    setFlag("1");
    // localStorage에 myMbti 저장
    if (typeof window !== 'undefined') {
      localStorage.setItem('myMbti', selected);
    }
  }

  const mbtiJobs: Record<string, string[]> = {
    INTJ: ['전략기획가', '데이터 분석가', '엔지니어', '연구원'],
    INTP: ['연구원', '프로그래머', '과학자', '기술 컨설턴트'],
    ENTJ: ['경영자', '프로젝트 매니저', '변호사', '기업가'],
    ENTP: ['기획자', '마케팅 전문가', '창업가', '컨설턴트'],
    INFJ: ['상담사', '작가', '교사', '심리학자'],
    INFP: ['작가', '디자이너', '상담사', '예술가'],
    ENFJ: ['교사', 'HR 전문가', '상담사', '사회복지사'],
    ENFP: ['마케터', '기획자', '작가', '강연가'],
    ISTJ: ['회계사', '공무원', '엔지니어', '관리자'],
    ISFJ: ['간호사', '교사', '행정직', '사회복지사'],
    ESTJ: ['경영자', '관리자', '프로젝트 매니저', '공무원'],
    ESFJ: ['교사', '간호사', 'HR 전문가', '행정직'],
    ISTP: ['엔지니어', '기술자', '파일럿', '응급구조사'],
    ISFP: ['디자이너', '예술가', '작가', '치유사'],
    ESTP: ['영업사원', '기업가', '스포츠 코치', '마케터'],
    ESFP: ['연예인', '이벤트 플래너', '마케터', '강연가'],
  };

  return (
    <div className={styles.formSection}>
        <div className={styles.formBoxWrap}>
            <h2>나와 잘 맞는 MBTI 직업 & 유형 찾기 👀 </h2>
            <label>
                내 MBTI 유형을 선택하세요
                <div className={styles.mbtiTypeArea}>
                    <select value={selected} onChange={handleSelect}>
                    <option value="">-- 선택 --</option>
                    {mbtiTypes.map((type) => (
                        <option key={type.code} value={type.code}>
                        {type.code} - {type.name}
                        </option>
                    ))}
                    </select>
                </div>
            </label>

            <div style={{marginTop: '1rem'}}>
                <div className={styles.btnRecommendJob}>
                  <button className={styles.btnBasic} onClick={handleClick}>추천 직업 보기</button>
                </div>
                {flag === "1" && selected && (
                  <div style={{marginTop:'1rem'}}>
                      <strong>{selected} 추천 직업:</strong>                    
                      <ul className={styles.mbtiSection}>
                          {(mbtiJobs[selected] || []).map((job) => (
                          <li key={job}>{job}</li>
                          ))}
                      </ul>
                  </div>
                )}
            </div>

            {flag === "1" && selected && (
                <div style={{marginTop: '2rem'}}>
                    <strong>{selected} ({mbtiTypes.find(t => t.code === selected)?.name})</strong>와(과) 어울리는 궁합 유형:
                    <ul className={styles.mbtiSection}>
                        {result.map((code) => {
                        const t = mbtiTypes.find(t => t.code === code);
                        return (
                            <li key={code}>
                            <b>{code}</b> - {t?.name} <span style={{color:'#888'}}>{t?.desc}</span>
                            </li>
                        );
                        })}
                    </ul>
                </div>
            )}  

            <div style={{marginTop: '2rem'}}>
                <h3>MBTI 유형별 설명</h3>
                <ul>
                {mbtiTypes.map((type) => (
                    <li key={type.code}>
                    <b>{type.code}</b> - {type.name}: {type.desc}
                    </li>
                ))}
                </ul>
            </div>

            

                   
      </div>
    </div>
  );
}
