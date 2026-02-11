// MBTI 유형별 설명과 궁합 데이터
export const mbtiTypes = [
  { code: 'INTJ', name: '전략가', desc: '독립적이고 분석적인 성향' },
  { code: 'INTP', name: '논리술사', desc: '논리적이고 창의적인 성향' },
  { code: 'ENTJ', name: '통솔자', desc: '리더십이 강하고 목표지향적' },
  { code: 'ENTP', name: '변론가', desc: '토론을 즐기고 혁신적' },
  { code: 'INFJ', name: '옹호자', desc: '이상주의적이고 통찰력 있음' },
  { code: 'INFP', name: '중재자', desc: '이해심 많고 이상주의적' },
  { code: 'ENFJ', name: '선도자', desc: '사교적이고 타인 배려' },
  { code: 'ENFP', name: '활동가', desc: '열정적이고 창의적' },
  { code: 'ISTJ', name: '현실주의자', desc: '신중하고 책임감 강함' },
  { code: 'ISFJ', name: '수호자', desc: '성실하고 온화함' },
  { code: 'ESTJ', name: '경영자', desc: '체계적이고 실용적' },
  { code: 'ESFJ', name: '집정관', desc: '친절하고 협동적' },
  { code: 'ISTP', name: '장인', desc: '실용적이고 논리적' },
  { code: 'ISFP', name: '모험가', desc: '온화하고 예술적' },
  { code: 'ESTP', name: '사업가', desc: '적극적이고 현실적' },
  { code: 'ESFP', name: '연예인', desc: '사교적이고 에너지 넘침' },
];

// 각 MBTI별 궁합 추천 (예시)
export const mbtiMatches: Record<string, string[]> = {
  INTJ: ['ENFP', 'ENTP'],
  INTP: ['ENTJ', 'ESTJ'],
  ENTJ: ['INFP', 'INTP'],
  ENTP: ['INFJ', 'INTJ'],
  INFJ: ['ENFP', 'ENTP'],
  INFP: ['ENFJ', 'ENTJ'],
  ENFJ: ['INFP', 'ISFP'],
  ENFP: ['INFJ', 'INTJ'],
  ISTJ: ['ESFP', 'ESTP'],
  ISFJ: ['ESFP', 'ESTP'],
  ESTJ: ['ISFP', 'ISTP'],
  ESFJ: ['ISFP', 'ISTP'],
  ISTP: ['ESFJ', 'ENFJ'],
  ISFP: ['ESFJ', 'ENFJ'],
  ESTP: ['ISFJ', 'ISTJ'],
  ESFP: ['ISFJ', 'ISTJ'],
};
