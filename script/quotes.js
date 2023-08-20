const quotes = [
  {
    quote: '삶이 있는 한 희망은 있다.',
    author: '키케로',
  },
  {
    quote: '평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.',
    author: '제임스 딘',
  },
  {
    quote:
      '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해',
    author: '찰리 채플린',
  },
  {
    quote:
      '먼저핀꽃은 먼저진다 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다',
    author: '채근담',
  },
  {
    quote:
      '해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.',
    author: '톨스토이',
  },
  {
    quote: '화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라.',
    author: '마크 트웨인',
  },
  {
    quote: '좋습니다!',
    author: '김형수',
  },
  {
    quote: '세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.',
    author: '헬렌 켈러',
  },
  {
    quote: '자신감 있는 표정을 지으면 자신감이 생긴다.',
    author: '찰스 다윈',
  },
  {
    quote: '겨울이 오면 봄이 멀지 않으리.',
    author: '셸리',
  },
  {
    quote:
      '자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.',
    author: '오손 웰스',
  },
  {
    quote: ' 행복은 습관이다,그것을 몸에 지니라.',
    author: '허버드',
  },
  {
    quote: '사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다.',
    author: '생떽쥐베리',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
