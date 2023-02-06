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
        q: "일상생활이 지루하게 느껴지나요?",
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
        q: "하루종일 피로감이 있나요?",
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
        q: "사람들과 만남을 피하게 되나요?",
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
        q: "어떤일에도 의욕이 생기지 않나요?",
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
        name: "<플로럴>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "활동적인 느낌을 갖고 싶을 때",
        descTitle2:
            "꽃향기, 세련됨, 여성적, 활동적",
        desc2: "1번. 디올 - 디오리시모 (은방울꽃) \n2번. 기라로쉬 - 휘지 \n3번. 샤넬 - 크리스탈 (자스민)",
        purlist1:"https://search.shopping.naver.com/search/all?query=%EB%94%94%EC%98%AC%20%EB%94%94%EC%98%A4%EB%A6%AC%EC%8B%9C%EB%AA%A8%2050ml&frm=NVSHATC&prevQuery=%EB%94%94%EC%98%AC%20%EB%94%94%EC%98%A4%EB%A6%AC%EC%8B%9C%EB%AA%A8%2030",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EA%B8%B0%EB%9D%BC%EB%A1%9C%EC%89%AC%20%ED%9C%98%EC%A7%80%2050ml&frm=NVSHATC&prevQuery=%EA%B8%B0%EB%9D%BC%EB%A1%9C%EC%89%AC%20%ED%9C%98%EC%A7%80",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EC%83%A4%EB%84%AC%20%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88%2050ml&frm=NVSHATC&prevQuery=%EC%83%A4%EB%84%AC%20%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<그린>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "피곤하고 답답한 상황에서 머리를 맑게 하고 싶을 때",
        descTitle2:
            "풀과 나뭇잎 향, 신선, 산뜻, 상쾌, 친근감을 줌",
        desc2: "1번. 에스티로더 - 프라이빗콜렉션 \n 2번. 샤넬 - 샤넬 NO.19 \n 3번. 겐조 - 파르팽데떼",
        purlist1:"https://search.shopping.naver.com/search/all?query=%EC%97%90%EC%8A%A4%ED%8B%B0%EB%A1%9C%EB%8D%94%20%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B9%97%20%EC%BD%9C%EB%A0%89%EC%85%98%2030ml&frm=NVSHATC&prevQuery=%EC%97%90%EC%8A%A4%ED%8B%B0%EB%A1%9C%EB%8D%94%20%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B9%97%20%EC%BD%9C%EB%A0%89%EC%85%98",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EC%83%A4%EB%84%AC%20NO.19%204ml&frm=NVSHATC&prevQuery=%EC%83%A4%EB%84%AC%20NO.19",
            purlist3:"https://search.shopping.naver.com/search/all?frm=NVSHPRC&maxPrice=90000&minPrice=40000&origQuery=%EA%B2%90%EC%A1%B0%20%EB%8D%B0%20%EB%96%BC&pagingIndex=1&pagingSize=40&productSet=total&query=%EA%B2%90%EC%A1%B0%20%EB%8D%B0%20%EB%96%BC&sort=rel&timestamp=&viewType=list",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<모시>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "비온뒤의 상쾌함을 주는 향",
        descTitle2:
            "1번. 이솝 - 휠 오드 퍼퓸",
            desc2:" ",
            purlist1:"https://search.shopping.naver.com/search/all?query=%EC%9D%B4%EC%86%9D%20%ED%9C%A0%20%EC%98%A4%EB%93%9C%20%ED%8D%BC%ED%93%B8%2050ml&frm=NVSHATC&prevQuery=%EC%9D%B4%EC%86%9D%20%ED%9C%A0%20%EC%98%A4%EB%93%9C%20%ED%8D%BC%ED%93%B8%2030ml",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EC%83%A4%EB%84%AC%20NO.19%204ml&frm=NVSHATC&prevQuery=%EC%83%A4%EB%84%AC%20NO.19",
            purlist3:"https://search.shopping.naver.com/search/all?frm=NVSHPRC&maxPrice=90000&minPrice=40000&origQuery=%EA%B2%90%EC%A1%B0%20%EB%8D%B0%20%EB%96%BC&pagingIndex=1&pagingSize=40&productSet=total&query=%EA%B2%90%EC%A1%B0%20%EB%8D%B0%20%EB%96%BC&sort=rel&timestamp=&viewType=list",
       
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<플로럴 부케>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "여러송이의 꽃을 꽃다발로 한 것과 같은 향",
        descTitle2:
            "우아한 느낌, 달콤함, 부드러움, 여성스러운 느낌",
        desc2: "1번. 까샤렐 - 아나이스 아나이스 \n 2번. 까샤렐 - 장파투 조이 \n 3번. 에스티로더-뷰티풀",
        purlist1:"https://search.shopping.naver.com/search/all?query=%EA%B9%8C%EC%83%A4%EB%A0%90%20%EC%95%84%EB%82%98%EC%9D%B4%EC%8A%A4%20%EC%95%84%EB%82%98%EC%9D%B4%EC%8A%A4%2030ml&frm=NVSHATC&prevQuery=%EA%B9%8C%EC%83%A4%EB%A0%90%20%EC%95%84%EB%82%98%EC%9D%B4%EC%8A%A4%20%EC%95%84%EB%82%98%EC%9D%B4%EC%8A%A4",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EC%9E%A5%ED%8C%8C%ED%88%AC%20%EC%A1%B0%EC%9D%B4%2030ml&frm=NVSHATC&prevQuery=%EC%9E%A5%ED%8C%8C%ED%88%AC%20%EC%A1%B0%EC%9D%B4",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EC%97%90%EC%8A%A4%ED%8B%B0%EB%A1%9C%EB%8D%94%20%EB%B7%B0%ED%8B%B0%ED%92%80%206ml&frm=NVSHATC&prevQuery=%EC%97%90%EC%8A%A4%ED%8B%B0%EB%A1%9C%EB%8D%94%20%EB%B7%B0%ED%8B%B0%ED%92%80",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<알데히드>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "천연 또는 인공 원료로부터 얻어진 탄소, 수소, 산소 원자들을 포함한 유기 화합물로 조합한 향으로 플로럴 향이 기본인 향이에요",
        descTitle2:
            "나무와 과일향을 섞어 깊고 풍부한 향을 냄",
        desc2: "1번. 샤넬-샤넬 NO.5 \n 2번. 로샤스-마담 로샤스 \n 3번. 입생로랑-리브고쉬",
        purlist1:"https://search.shopping.naver.com/search/all?query=%EC%83%A4%EB%84%AC%20NO.5%201.5ml&frm=NVSHATC&prevQuery=%EC%83%A4%EB%84%AC%20NO.5",
            purlist2:"https://search.shopping.naver.com/search/all?frm=NVSHPRC&maxPrice=60000&minPrice=42000&origQuery=%EB%A1%9C%EC%83%A4%EC%8A%A4%20%EB%A7%88%EB%8B%B4%20%EB%A1%9C%EC%83%A4%EC%8A%A4&pagingIndex=1&pagingSize=40&productSet=total&query=%EB%A1%9C%EC%83%A4%EC%8A%A4%20%EB%A7%88%EB%8B%B4%20%EB%A1%9C%EC%83%A4%EC%8A%A4&sort=rel&timestamp=&viewType=list",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EC%9E%85%EC%83%9D%EB%A1%9C%EB%9E%91%20%EB%A6%AC%EB%B8%8C%EA%B3%A0%EC%89%AC%2050ml&frm=NVSHATC&prevQuery=%EC%9E%85%EC%83%9D%EB%A1%9C%EB%9E%91%20%EB%A6%AC%EB%B8%8C%EA%B3%A0%EC%89%AC",
    },
];
