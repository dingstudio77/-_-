
import React from 'react';
import { Zap, MessageSquare, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { PortfolioItem, PackageInfo, ReviewItem } from './types.ts';

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
    name: 'Brand Starter',
    price: '220,000원~',
    description: '로고디자인으로 시작하는 브랜딩',
    features: ['로고시안 3종', '수정 무제한', '응용이미지 3종', '원본파일 제공'],
    recommendation: '1인 사업자 추천'
  },
  {
    id: 'launch',
    name: 'Website Builder',
    price: '1,000,000원~',
    description: '홈페이지 제작으로 시작하는 브랜딩',
    features: ['홈페이지 기획부터 제작까지', '기본SEO셋팅', '반응형 UI/UX', '홈페이지 사용법 가이드'],
    recommendation: '초기 스타트업 추천'
  },
  {
    id: 'allinone',
    name: 'Brand All-in-One',
    price: '1,500,000원~',
    description: '로고부터 홈페이지까지 완벽한 시작',
    features: ['로고 프리미엄 패키지', '반응형 홈페이지(5P)', '브랜드 가이드라인', '명함/서식지 디자인'],
    recommendation: '브랜드 리뉴얼 추천'
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
    images: [
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop'
    ],
    description: '줄기세포 배양액 기반의 프리미엄 안티에이징 브랜드 에버셀의 기술력과 품격을 담아낸 공식 웹사이트입니다.',
    problem: '기존 사이트의 브랜드 이미지가 노후화됨.',
    solution: '깊이 있는 퍼플 톤과 메탈릭한 질감을 활용하여 럭셔리 바이오 이미지를 구축함.',
    clientComment: '사이트 개편 후 브랜드 가치가 확실히 올라갔다는 평을 듣고 있습니다.'
  },
  {
    id: 'archive-mbc',
    title: 'Archive by MBC',
    category: 'PACKAGE',
    industry: 'Media & Cultural Heritage',
    keywords: ['아카이브', '감각적', '정교함'],
    thumbnail: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'MBC의 방대한 자료들을 현대적 감각으로 보존하는 브랜드 패키지 및 플랫폼입니다.',
    problem: '방대한 자료가 단조롭게 보여지는 한계.',
    solution: '강렬한 타이포그래피와 모듈형 그리드 레이아웃을 통해 세련된 이미지를 구현함.',
    clientComment: '방송사의 정체성을 유지하면서도 트렌디한 감각을 놓치지 않았습니다.'
  }
];

export const REVIEWS: ReviewItem[] = [
  { id: 'r1', author: 'K 대표', industry: '코스메틱 브랜드', service: '홈페이지 제작', content: '기획 단계부터 저희 브랜드의 강점을 정확히 파악해 주셨습니다. 제작 후 사이트 체류 시간이 이전보다 2배 이상 늘어났습니다.', rating: 5 },
  { id: 'r2', author: 'S 대표', industry: '심리 상담 센터', service: '홈페이지 제작', content: '따뜻하면서도 전문적인 느낌을 홈페이지에 담고 싶었는데, 결과물이 기대 이상입니다.', rating: 5 },
  { id: 'r3', author: 'P 대표', industry: '친환경 푸드 브랜드', service: '로고 디자인', content: '심플하면서도 브랜드의 철학이 잘 녹아있는 로고를 만들어 주셨습니다.', rating: 5 },
  { id: 'r4', author: 'L 대표', industry: '인테리어 스튜디오', service: '브랜드 패키지', content: '디테일한 부분까지 신경 써주시는 모습에 감동했습니다. 완벽한 브랜딩이었습니다.', rating: 5 },
];

export const PROCESS_STEPS = [
  { title: '상담 & 견적', desc: '목표, 예산, 일정을 꼼꼼히 체크합니다.', icon: <MessageSquare size={32} /> },
  { title: '자료 수집', desc: '레퍼런스 분석 및 브랜드 톤앤매너를 설정합니다.', icon: <Clock size={32} /> },
  { title: '시안 제안', desc: '논리적인 근거를 담은 디자인을 제안합니다.', icon: <Zap size={32} /> },
  { title: '수정 & 확정', desc: '디테일을 다듬어 최종 디자인을 완성합니다.', icon: <CheckCircle size={32} /> },
  { title: '납품 & 오픈', desc: '가이드와 함께 최종 결과물을 전달합니다.', icon: <ShieldCheck size={32} /> },
];
