
import React from 'react';
import { Zap, MessageSquare, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { PortfolioItem, PackageInfo, ReviewItem, FAQItem } from './types.ts';

export const COLORS = {
  primary: '#8b5cf6',
  secondary: '#7c3aed',
  background: '#050505',
  card: '#111111',
  text: '#ffffff',
  muted: '#94a3b8'
};

export const PACKAGES: PackageInfo[] = [
  {
    id: 'starter',
    name: 'Logo Essentials',
    price: '250,000원~',
    description: '브랜드의 정체성을 담는 가장 확실한 방법',
    features: ['전문 디자이너 1:1 상담', '로고 시안 3종 제안', '수정 횟수 3회 (무상)', '고해상도 원본파일 및 가이드'],
    recommendation: '신규 창업자 추천'
  },
  {
    id: 'launch',
    name: 'Pro Website',
    price: '1,200,000원~',
    description: '단순한 정보를 넘어 문의를 만드는 홈페이지',
    features: ['기획 중심의 맞춤형 UI/UX', '네이버/구글 검색 최적화(SEO)', '모바일/태블릿 반응형 구현', '관리자 페이지 교육 포함'],
    recommendation: '서비스 확장 기업 추천'
  },
  {
    id: 'allinone',
    name: 'Brand Identity Full',
    price: '1,800,000원~',
    description: '로고부터 웹까지, 일관된 브랜드 경험 설계',
    features: ['프리미엄 로고 패키지', '반응형 홈페이지 (메인+5P)', '브랜드 컬러 & 폰트 가이드', '명함 및 홍보물 디자인(택2)'],
    recommendation: '토털 브랜딩 추천'
  }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: 'evercell',
    title: '에버셀 (Evercell)',
    category: 'WEB',
    industry: 'Premium Bio Cosmetics',
    keywords: ['신뢰감', '혁신', '고급'],
    thumbnail: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop'],
    description: '차세대 바이오 기술력을 시각적으로 증명하고, 브랜드의 프리미엄 가치를 전달하는 공식 웹사이트 구축 프로젝트입니다.',
    problem: '기술력은 뛰어나지만, 기존 웹사이트가 저가형 이미지로 비춰져 타겟층 확장에 어려움을 겪음.',
    solution: '깊이 있는 퍼플 톤과 메탈릭 텍스처를 활용해 \'과학적 정교함\'과 \'럭셔리\'를 동시에 구현함.',
    clientComment: '사이트 오픈 후 문의량이 40% 증가했으며, 브랜드 이미지가 확실히 개선되었다는 평을 듣고 있습니다.'
  },
  {
    id: 'minimal-coffee',
    title: '루프탑 커피 (Rooftop)',
    category: 'LOGO',
    industry: 'F&B Coffee Shop',
    keywords: ['미니멀', '도심', '여유'],
    thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop'],
    description: '도심 속 휴식을 제공하는 카페 브랜드의 정체성을 담은 미니멀 아이덴티티 디자인입니다.',
    problem: '주변 대형 프랜차이즈 사이에서 차별화된 감각을 보여주지 못함.',
    solution: '선 위주의 심플한 심볼로 고급스럽고 차분한 분위기를 연출하여 2030 타겟의 인스타그래머블한 무드를 형성함.',
    clientComment: '로고 하나로 매장 분위기가 완전히 바뀌었습니다. 굿즈 제작 시에도 너무 예뻐서 만족합니다.'
  },
  {
    id: 'tech-hub',
    title: '테크허브 (Tech Hub)',
    category: 'WEB',
    industry: 'SaaS Platform',
    keywords: ['IT', '플랫폼', '직관적'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'],
    description: '복잡한 SaaS 솔루션의 기능을 직관적으로 설명하고, 사용자의 회원가입 전환율을 높이는 것에 집중한 랜딩페이지입니다.',
    problem: '서비스 설명이 너무 길어 사용자들이 핵심 기능을 파악하기 전에 이탈함.',
    solution: '카드형 레이아웃과 직관적인 아이콘을 배치하여 정보의 위계를 재설정하고 행동 유도(CTA) 버튼을 최적화함.',
    clientComment: '전환율이 이전 대비 2배 이상 올랐습니다. 기획의 힘을 느꼈습니다.'
  }
];

export const REVIEWS: ReviewItem[] = [
  { id: 'r1', author: '박OO 대표', industry: '코스메틱 브랜드', service: '홈페이지 제작', content: '기획 단계부터 저희 브랜드의 강점을 정확히 파악해 주셨습니다. 제작 후 사이트 체류 시간이 이전보다 2배 이상 늘어났습니다.', rating: 5 },
  { id: 'r2', author: '김OO 대표', industry: '심리 상담 센터', service: '홈페이지 제작', content: '따뜻하면서도 전문적인 느낌을 홈페이지에 담고 싶었는데, 결과물이 기대 이상입니다. 특히 모바일에서 너무 예뻐요.', rating: 5 },
  { id: 'r3', author: '이OO 대표', industry: '푸드 스타트업', service: '로고 디자인', content: '심플하면서도 브랜드의 철학이 잘 녹아있는 로고를 만들어 주셨습니다. 수정 피드백도 정말 빠르십니다.', rating: 5 },
];

export const PROCESS_STEPS = [
  { title: '상담 & 기획', desc: '단순 견적을 넘어 비즈니스의 목표와 시장을 분석합니다.', icon: <MessageSquare size={32} /> },
  { title: '톤앤매너 설정', desc: '브랜드에 가장 적합한 컬러와 폰트, 무드를 제안합니다.', icon: <Clock size={32} /> },
  { title: '디자인 설계', desc: '논리적인 근거를 담은 최적의 시안을 제작합니다.', icon: <Zap size={32} /> },
  { title: '수정 & 보완', desc: '고객님의 피드백을 반영하여 디테일을 완벽하게 다듬습니다.', icon: <CheckCircle size={32} /> },
  { title: '최종 납품', desc: '바로 사용 가능한 결과물과 활용 가이드를 전달합니다.', icon: <ShieldCheck size={32} /> },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "다른 업체와 차별점은 무엇인가요?",
    answer: "딩스튜디오는 '예쁜 디자인'은 기본으로 하되, '비즈니스의 목적'에 집중합니다. 고객이 웹사이트에 들어와서 왜 문의를 해야 하는지, 로고가 고객에게 어떤 신뢰를 주는지 논리적으로 설계합니다."
  },
  {
    question: "작업 기간은 얼마나 걸리나요?",
    answer: "로고 디자인은 평균 7-10일, 홈페이지 제작은 규모에 따라 3-5주 정도 소요됩니다. 급한 일정은 미리 말씀해주시면 조율 가능합니다."
  },
  {
    question: "수정 횟수 제한이 있나요?",
    answer: "패키지별로 상이하지만, 기본적으로 고객이 만족하실 때까지 소통하는 것을 원칙으로 합니다. 단, 전체 컨셉을 바꾸는 재작업은 추가 비용이 발생할 수 있습니다."
  }
];
