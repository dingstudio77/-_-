
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
    images: ['https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop'],
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
    images: ['https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1200&auto=format&fit=crop'],
    description: 'MBC의 방대한 자료들을 현대적 감각으로 보존하는 브랜드 패키지 및 플랫폼입니다.',
    problem: '방대한 자료가 단조롭게 보여지는 한계.',
    solution: '강렬한 타이포그래피와 모듈형 그리드 레이아웃을 통해 세련된 이미지를 구현함.',
    clientComment: '방송사의 정체성을 유지하면서도 트렌디한 감각을 놓치지 않았습니다.'
  },
  {
    id: 'minimal-coffee',
    title: '루프탑 커피 (Rooftop)',
    category: 'LOGO',
    industry: 'F&B Coffee Shop',
    keywords: ['미니멀', '도심', '여유'],
    thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop'],
    description: '도심 속 휴식을 지향하는 카페의 아이덴티티를 담은 로고 디자인입니다.',
    problem: '브랜드 가치가 낮은 저가형 이미지.',
    solution: '선 위주의 심플한 심볼로 고급스럽고 차분한 분위기를 연출했습니다.',
    clientComment: '매장 분위기와 너무 잘 어울리는 로고입니다.'
  },
  {
    id: 'tech-hub',
    title: '테크허브 (Tech Hub)',
    category: 'WEB',
    industry: 'SaaS Platform',
    keywords: ['IT', '플랫폼', '직관적'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'],
    description: '복잡한 데이터를 시각적으로 쉽게 이해할 수 있는 대시보드 중심의 웹사이트입니다.',
    problem: '기능은 많으나 사용자가 사용하기 너무 복잡함.',
    solution: 'UX 라이팅과 컬러 시스템을 통해 기능별 위계를 재설정했습니다.',
    clientComment: '사용자들의 서비스 만족도가 눈에 띄게 좋아졌습니다.'
  },
  {
    id: 'eco-living',
    title: '에코리빙 (Eco Living)',
    category: 'PACKAGE',
    industry: 'Eco-friendly Home',
    keywords: ['내추럴', '친환경', '편안함'],
    thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop'],
    description: '지속 가능한 삶을 제안하는 라이프스타일 브랜드의 전체 패키징 디자인입니다.',
    problem: '친환경 이미지가 부족한 패키지 디자인.',
    solution: '크라프트지와 식물성 잉크 느낌을 살린 톤앤매너로 신뢰도를 높였습니다.',
    clientComment: '패키지 만으로도 브랜드의 가치가 잘 전달됩니다.'
  },
  {
    id: 'urban-fashion',
    title: '어반 스트릿 (Urban)',
    category: 'LOGO',
    industry: 'Fashion Brand',
    keywords: ['트렌디', '강렬함', '힙'],
    thumbnail: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop'],
    description: 'MZ세대를 타겟으로 한 역동적인 스트릿 패션 로고 디자인입니다.',
    problem: '패션 브랜드로서 개성이 부족함.',
    solution: '과감한 타이포그래피 변형을 통해 기억에 남는 심볼을 개발했습니다.',
    clientComment: '우리가 원하던 바로 그 힙한 감성입니다.'
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

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "작업 기간은 얼마나 걸리나요?",
    answer: "로고 디자인은 평균 1-2주, 홈페이지 제작은 기획 범위에 따라 3-6주 정도 소요됩니다. 급한 프로젝트의 경우 상담 시 미리 말씀해 주시면 일정 조율이 가능합니다."
  },
  {
    question: "수정은 몇 번까지 가능한가요?",
    answer: "딩스튜디오는 고객 만족을 위해 기본적으로 '로고 시안 무제한 수정'을 원칙으로 합니다. (단, 전체 컨셉이 바뀌는 재작업 수준의 수정은 추가 비용이 발생할 수 있습니다.)"
  },
  {
    question: "비용은 왜 이 정도인가요?",
    answer: "우리는 단순히 예쁜 그림을 그리는 것이 아니라, 고객의 매출을 올리는 '전략'을 디자인합니다. 시장 조사, 경쟁사 분석, 타겟 심리 분석이 포함된 전문적인 브랜딩 서비스의 가치를 담았습니다."
  },
  {
    question: "로고만 또는 홈페이지 디자인만도 가능한가요?",
    answer: "네, 물론입니다. 로고 단독 패키지와 홈페이지 단독 패키지가 준비되어 있으며, 필요하신 범위에 맞춰 유연하게 서비스를 제공해 드립니다."
  },
  {
    question: "레퍼런스가 없는데도 진행 가능해요?",
    answer: "걱정하지 마세요. 상담 과정에서 저희가 보유한 수많은 업종별 데이터와 트렌드를 바탕으로 고객님의 브랜드에 가장 적합한 스타일을 역으로 제안해 드립니다."
  },
  {
    question: "결제 및 계약 방식은 어떻게 되나요?",
    answer: "착수금 50%, 잔금 50% 분할 결제를 원칙으로 하며, 모든 프로젝트는 전자 계약서를 작성하여 안전하게 진행됩니다. 세금계산서 발행도 당연히 가능합니다."
  }
];
