const qnaList = [
    {
        q: "당신의 성별은 무엇인가요?",
        a: [
            {
                answer: "a. 남",
                type: [0],
            },
            {
                answer: "b. 여",
                type: [1],
            },
            
        ],
    },
    
    {
        q: "눈물이 자주 나나요?",
        a: [
            {
                answer: "a. 예",
                type: [0],
            },
            {
                answer: "b. 아니오",
                type: [1],
            },
            
        ],
    },
    {
        q: "기분이 좋은일이 생겨도 행복하지 않나요?",
        a: [
            {
                answer: "a. 예",
                type: [0],
            },
            {
                answer: "b. 아니오",
                type: [1],
            },
            
        ],
    },
    {
        q: "입맛이 없나요?",
        a: [
            {
                answer: "a. 예",
                type: [0],
            },
            {
                answer: "b. 아니오",
                type: [1],
            },
            
        ],
    },
    {
        q: "자신이 불행하다고 생각하나요?",
        a: [
            {
                answer: "a. 예",
                type: [0],
            },
            {
                answer: "b. 아니오",
                type: [1],
            },
           
        ],
    },
    
];

const infoList = [
    {
        nameIntro: "이런향수를 추천해요",
        name: "<허벌>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "허브, 로즈마리, 페퍼민트 향",
        descTitle2:
            "안정감, 청량감, 포근함",
        desc2: "1번. 햅지바 - 화이트티 \n 2번. 엘리자베스아덴 - 그린티라벤더 \n 3번.교보문고 - 룸스프레이",
        purlist1:"https://search.shopping.naver.com/search/all?query=%ED%96%85%EC%A7%80%EB%B0%94%20%ED%99%94%EC%9D%B4%ED%8A%B8%ED%8B%B0%2050ml&frm=NVSHATC&prevQuery=%ED%96%85%EC%A7%80%EB%B0%94%20%ED%99%94%EC%9D%B4%ED%8A%B8%ED%8B%B0",
            purlist2:"https://search.shopping.naver.com/search/all?frm=NVSHPRC&origQuery=%EC%97%98%EB%A6%AC%EC%9E%90%EB%B2%A0%EC%8A%A4%EC%95%84%EB%8D%B4%EA%B7%B8%EB%A6%B0%ED%8B%B0%EB%9D%BC%EB%B2%A4%EB%8D%94&pagingIndex=1&pagingSize=40&productSet=total&query=%EC%97%98%EB%A6%AC%EC%9E%90%EB%B2%A0%EC%8A%A4%EC%95%84%EB%8D%B4%EA%B7%B8%EB%A6%B0%ED%8B%B0%EB%9D%BC%EB%B2%A4%EB%8D%94&sort=rel&timestamp=&uncorrectedQuery=%EC%97%98%EB%A6%AC%EC%9E%90%EB%B2%A0%EC%95%84%EB%8D%B4%20%EA%B7%B8%EB%A6%B0%ED%8B%B0%EB%9D%BC%EB%B2%A4%EB%8D%94&viewType=list",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EA%B5%90%EB%B3%B4%EB%AC%B8%EA%B3%A0%EB%A3%B8%EC%8A%A4%ED%94%84%EB%A0%88%EC%9D%B4%2015ml&frm=NVSHATC&prevQuery=%EA%B5%90%EB%B3%B4%EB%AC%B8%EA%B3%A0%EB%A3%B8%EC%8A%A4%ED%94%84%EB%A0%88%EC%9D%B4%2015ml",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<얼씨>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "비오는날의 젖은 흙에서 올라오는 특유의 촉촉한 향, 숲길을 산책하는 것 같은 신선한 느낌이 드는 것이 특징",
        descTitle2:
            "1번. 디에스앤더가-그레이프프룻 제너레이션",
            desc2:" ",
            purlist1:"https://search.shopping.naver.com/search/all?query=%EB%94%94%EC%97%90%EC%8A%A4%EC%95%A4%EB%8D%94%EA%B0%80%20%EA%B7%B8%EB%A0%88%EC%9D%B4%ED%94%84%ED%94%84%EB%A3%BB%20%EC%A0%9C%EB%84%88%EB%A0%88%EC%9D%B4%EC%85%98%2050ml&frm=NVSHATC&prevQuery=%EB%94%94%EC%97%90%EC%8A%A4%EC%95%A4%EB%8D%94%EA%B0%80%20%EA%B7%B8%EB%A0%88%EC%9D%B4%ED%94%84%ED%94%84%EB%A3%BB%20%EC%A0%9C%EB%84%88%EB%A0%88%EC%9D%B4%EC%85%98",
            purlist2:"https://search.shopping.naver.com/search/all?frm=NVSHPRC&origQuery=%EC%97%98%EB%A6%AC%EC%9E%90%EB%B2%A0%EC%8A%A4%EC%95%84%EB%8D%B4%EA%B7%B8%EB%A6%B0%ED%8B%B0%EB%9D%BC%EB%B2%A4%EB%8D%94&pagingIndex=1&pagingSize=40&productSet=total&query=%EC%97%98%EB%A6%AC%EC%9E%90%EB%B2%A0%EC%8A%A4%EC%95%84%EB%8D%B4%EA%B7%B8%EB%A6%B0%ED%8B%B0%EB%9D%BC%EB%B2%A4%EB%8D%94&sort=rel&timestamp=&uncorrectedQuery=%EC%97%98%EB%A6%AC%EC%9E%90%EB%B2%A0%EC%95%84%EB%8D%B4%20%EA%B7%B8%EB%A6%B0%ED%8B%B0%EB%9D%BC%EB%B2%A4%EB%8D%94&viewType=list",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EA%B5%90%EB%B3%B4%EB%AC%B8%EA%B3%A0%EB%A3%B8%EC%8A%A4%ED%94%84%EB%A0%88%EC%9D%B4%2015ml&frm=NVSHATC&prevQuery=%EA%B5%90%EB%B3%B4%EB%AC%B8%EA%B3%A0%EB%A3%B8%EC%8A%A4%ED%94%84%EB%A0%88%EC%9D%B4%2015ml",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<구르망>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "미식가라는 뜻",
        descTitle2:
            "달콤한 향, 미각적 후각적 자극을 준다",
        desc2: "1번 캘빈클라인 - 시크릿 옵세션 \n 2번. 장 폴 고티에 -  마담",
        purlist1:"https://search.shopping.naver.com/search/all?query=%EC%BA%98%EB%B9%88%ED%81%B4%EB%9D%BC%EC%9D%B8%20%EC%8B%9C%ED%81%AC%EB%A6%BF%20%EC%98%B5%EC%84%B8%EC%85%98%2050ml&frm=NVSHATC&prevQuery=%EC%BA%98%EB%B9%88%ED%81%B4%EB%9D%BC%EC%9D%B8%20%EC%8B%9C%ED%81%AC%EB%A6%BF%20%EC%98%B5%EC%84%B8%EC%85%98",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EC%9E%A5%20%ED%8F%B4%20%EA%B3%A0%ED%8B%B0%EC%97%90%20%EB%A7%88%EB%8B%B4%2050ml&frm=NVSHATC&prevQuery=%EC%9E%A5%20%ED%8F%B4%20%EA%B3%A0%ED%8B%B0%EC%97%90%20%EB%A7%88%EB%8B%B4",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EA%B5%90%EB%B3%B4%EB%AC%B8%EA%B3%A0%EB%A3%B8%EC%8A%A4%ED%94%84%EB%A0%88%EC%9D%B4%2015ml&frm=NVSHATC&prevQuery=%EA%B5%90%EB%B3%B4%EB%AC%B8%EA%B3%A0%EB%A3%B8%EC%8A%A4%ED%94%84%EB%A0%88%EC%9D%B4%2015ml",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<파우더리>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "부드럽고 포근함,벨벳이나 파우더 같은 부드러운 느낌을 표현한 향, 흔히 맡을 수 있는 화장품 향이나 베이비 파우더 향",
        descTitle2:
            "1번. 샤넬-샤넬 NO.22 \n 2번. 겐조-플라워 바이 겐조 \n3번. 불가리-쁘띠마망",
            desc2:" ",
            purlist1:"https://search.shopping.naver.com/search/all?query=%EC%83%A4%EB%84%AC%20%EB%84%98%EB%B2%8422%204ml&frm=NVSHATC&prevQuery=%EC%83%A4%EB%84%AC%20%EB%84%98%EB%B2%8422",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EA%B2%90%EC%A1%B0%20%ED%94%8C%EB%9D%BC%EC%9B%8C%20%EB%B0%94%EC%9D%B4%20%EA%B2%90%EC%A1%B0%204ml&frm=NVSHATC&prevQuery=%EA%B2%90%EC%A1%B0%20%ED%94%8C%EB%9D%BC%EC%9B%8C%20%EB%B0%94%EC%9D%B4%20%EA%B2%90%EC%A1%B0",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EB%B6%88%EA%B0%80%EB%A6%AC%20%EC%81%98%EB%9D%A0%EB%A7%88%EB%A7%9D%205ml&frm=NVSHATC&prevQuery=%EB%B6%88%EA%B0%80%EB%A6%AC%20%EC%81%98%EB%9D%A0%EB%A7%88%EB%A7%9D",
       
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<시프레>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "나뭇잎 젖은 듯 그을은 듯 한 향, 시원함, 상큼함, 부드러움",
        descTitle2:
            "마음을 편안히 해주고, 조용하면서도 격조 있는 성숙한 여성미를 지님",
        desc2: "1번. 디올 - 미스디올 \n 2번. 지방시 - 이자티스 \n3번. 에스티로더 - 노잉",
        purlist1:"https://search.shopping.naver.com/search/all?query=%EB%94%94%EC%98%AC%20%EB%AF%B8%EC%8A%A4%EB%94%94%EC%98%AC%2030ml&frm=NVSHATC&prevQuery=%EB%94%94%EC%98%AC%20%EB%AF%B8%EC%8A%A4%EB%94%94%EC%98%AC",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EC%A7%80%EB%B0%A9%EC%8B%9C%20%EC%9D%B4%EC%9E%90%ED%8B%B0%EC%8A%A4%2030ml&frm=NVSHATC&prevQuery=%EC%A7%80%EB%B0%A9%EC%8B%9C%20%EC%9D%B4%EC%9E%90%ED%8B%B0%EC%8A%A4",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EC%97%90%EC%8A%A4%ED%8B%B0%EB%A1%9C%EB%8D%94%20%EB%85%B8%EC%9E%89%2030ml&frm=NVSHATC&prevQuery=%EC%97%90%EC%8A%A4%ED%8B%B0%EB%A1%9C%EB%8D%94%20%EB%85%B8%EC%9E%89",
    },
];
