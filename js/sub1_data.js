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
        q: "웃음이 나는 일이 많나요?",
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
        q: "일상생활에 활력이 넘치나요?",
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
        q: "아침마다 설렘이 가득한가요?",
        a: [
            { 
                answer: "a. 예",
                type: [0] 
            },
            {
                answer: "b. 아니오",
                type: [1],
            },
            
        ],
    },
    {
        q: "하늘에 둥둥 떠있는 기분인가요?",
        a: [
            { 
                answer: "a. 예", 
                type: [0] },
            {
                answer: "b. 아니오",
                type: [1],
            },
        ],
    },
    
];


const infoList = [
    {
        nameIntro: "이런 향수를 추천해요",
        name: "<시트러스>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "시원함, 상큼함, 신선함, 친근감, 가벼움",
        descTitle2:"1번.캘빈클라인 - 씨케이원  \n  2번.샤넬 - 뿌르무슈  \n  3번.겔랑 - 오 드 콜로뉴 임페리얼",
        desc2:" ",
        purlist1:"https://search.shopping.naver.com/search/all?query=%EC%BA%98%EB%B9%88%ED%81%B4%EB%9D%BC%EC%9D%B8%20%EC%94%A8%EC%BC%80%EC%9D%B4%EC%9B%90%2015ml&frm=NVSHATC&prevQuery=%EC%BA%98%EB%B9%88%ED%81%B4%EB%9D%BC%EC%9D%B8%20%EC%94%A8%EC%BC%80%EC%9D%B4%EC%9B%90",
        purlist2:"https://search.shopping.naver.com/search/all?query=%EC%83%A4%EB%84%AC%20%EB%BF%8C%EB%A5%B4%EB%AC%B4%EC%8A%88%2050ml&frm=NVSHATC&prevQuery=%EC%83%A4%EB%84%AC%20%EB%BF%8C%EB%A5%B4%EB%AC%B4%EC%8A%88",
        purlist3:"https://search.shopping.naver.com/search/all?query=%EA%B2%94%EB%9E%91%20%EC%98%A4%20%EB%93%9C%20%EC%BD%9C%EB%A1%9C%EB%89%B4%20%EC%9E%84%ED%8E%98%EB%A6%AC%EC%96%BC&frm=NVSHATC&prevQuery=%EA%B2%94%EB%9E%91%20%EC%98%A4%20%EB%93%9C%20%EC%BD%94%EB%A1%B1%20%EC%9E%84%ED%8E%98%EB%A6%AC%EC%96%BC",
       
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<아쿠아>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "상쾌함, 시원함, 바다향",
        descTitle2: "1번 다비보프 - 쿨워터포우먼  \n  2번.니코스 - 스컬프춰  \n  3번.겐조 - 르파겐조",
        desc2:" ",
        purlist1:"https://search.shopping.naver.com/search/all?query=%EB%8B%A4%EB%B9%84%EB%8F%84%ED%94%84%20%EC%BF%A8%EC%9B%8C%ED%84%B0%ED%8F%AC%EC%9A%B0%EB%A8%BC%2030ml&frm=NVSHATC&prevQuery=%EB%8B%A4%EB%B9%84%EB%8F%84%ED%94%84%20%EC%BF%A8%EC%9B%8C%ED%84%B0%ED%8F%AC%EC%9A%B0%EB%A8%BC",
        purlist2:"https://search.shopping.naver.com/search/all?query=%EB%8B%88%EC%BD%94%EC%8A%A4%20%EC%8A%A4%EC%BB%AC%ED%94%84%EC%B2%98&frm=NVSHATC&prevQuery=%EB%8B%88%EC%BD%94%EC%8A%A4%20%EC%8A%A4%EC%BB%AC%ED%94%84%EC%B2%98",
        purlist3:"https://search.shopping.naver.com/search/all?query=%EA%B2%90%EC%A1%B0%20%EB%A5%B4%ED%8C%8C%EA%B2%90%EC%A1%B0%2030ml&frm=NVSHATC&prevQuery=%EA%B2%90%EC%A1%B0%20%EB%A5%B4%ED%8C%8C%EA%B2%90%EC%A1%B0",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<오셔닉,마린>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "바다향, 짭짤한 향으로 시원하고 상쾌한 향, 여행지가 연상되는 밝은 느낌을 주는 향이에요",
        descTitle2:
            "1번. 아라미스 - 뉴 웨스트 스킨센트 포 맨  \n  2번.아라미스 - 뉴 웨스트 우먼  \n  3번. 겐조 - 뿌르 옴므",
            desc2:" ",
            purlist1:"https://search.shopping.naver.com/search/all?query=%EC%95%84%EB%9D%BC%EB%AF%B8%EC%8A%A4%20%EB%89%B4%20%EC%9B%A8%EC%8A%A4%ED%8A%B8%20%EC%8A%A4%ED%82%A8%EC%84%BC%ED%8A%B8%20%ED%8F%AC%20%EB%A7%A8&frm=NVSHATC&prevQuery=%EC%95%84%EB%9D%BC%EB%AF%B8%EC%8A%A4%20%EB%89%B4%20%EC%9B%A8%EC%8A%A4%ED%8A%B8%20%EC%8A%A4%ED%82%A8%EC%84%BC%ED%8A%B8%20%ED%8F%AC%20%ED%97%88",
            purlist2:"https://search.shopping.naver.com/search/all?frm=NVSHPRC&maxPrice=200000&minPrice=48900&origQuery=%EC%95%84%EB%9D%BC%EB%AF%B8%EC%8A%A4%20%EB%89%B4%20%EC%9B%A8%EC%8A%A4%ED%8A%B8%20%EC%9A%B0%EB%A8%BC&pagingIndex=1&pagingSize=40&productSet=total&query=%EC%95%84%EB%9D%BC%EB%AF%B8%EC%8A%A4%20%EB%89%B4%20%EC%9B%A8%EC%8A%A4%ED%8A%B8%20%EC%9A%B0%EB%A8%BC&sort=price_asc&timestamp=&viewType=list",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EA%B2%90%EC%A1%B0%20%EB%BF%8C%EB%A5%B4%EC%98%B4%EB%AF%80%205ml&frm=NVSHATC&prevQuery=%EA%B2%90%EC%A1%B0%20%EB%BF%8C%EB%A5%B4%EC%98%B4%EB%AF%80",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<프루티>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "복숭아, 딸기, 사과, 멜론, 파인애플, 바나나, 열대과일향",
        descTitle2:
            "달콤함, 상큼함, 귀여운 느낌",
        desc2: "1번. 겔랑 - 미츠코  \n  2번. 로샤스 - 팜므  \n  3번. 안나수이 - 돌리걸",
        purlist1:"https://search.shopping.naver.com/search/all?frm=NVSHPRC&maxPrice=200000&minPrice=62090&origQuery=%EA%B2%94%EB%9E%91%20%EB%AF%B8%EC%B8%A0%EC%BD%94&pagingIndex=1&pagingSize=40&productSet=total&query=%EA%B2%94%EB%9E%91%20%EB%AF%B8%EC%B8%A0%EC%BD%94&sort=rel&timestamp=&viewType=list",
            purlist2:"https://search.shopping.naver.com/search/all?frm=NVSHPRC&maxPrice=60000&minPrice=17700&origQuery=%EB%A1%9C%EC%83%A4%EC%8A%A4%20%ED%8C%9C%EB%AF%80&pagingIndex=1&pagingSize=40&productSet=total&query=%EB%A1%9C%EC%83%A4%EC%8A%A4%20%ED%8C%9C%EB%AF%80&sort=rel&timestamp=&viewType=list",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EC%95%88%EB%82%98%EC%88%98%EC%9D%B4%20%EB%8F%8C%EB%A6%AC%EA%B1%B8%2030ml&frm=NVSHATC&prevQuery=%EC%95%88%EB%82%98%EC%88%98%EC%9D%B4%20%EB%8F%8C%EB%A6%AC%EA%B1%B8",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<플로럴>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "활동적인 느낌을 갖고 싶을 때",
        descTitle2:
            "꽃향기, 세련됨, 여성적, 활동적",
        desc2: "1번. 디올 - 디오리시모 (은방울꽃)  \n  2번. 기라로쉬 - 휘지  \n  3번. 샤넬 - 크리스탈 (자스민)",
        purlist1:"https://search.shopping.naver.com/search/all?query=%EB%94%94%EC%98%AC%20%EB%94%94%EC%98%A4%EB%A6%AC%EC%8B%9C%EB%AA%A8%2050ml&frm=NVSHATC&prevQuery=%EB%94%94%EC%98%AC%20%EB%94%94%EC%98%A4%EB%A6%AC%EC%8B%9C%EB%AA%A8%2030",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EA%B8%B0%EB%9D%BC%EB%A1%9C%EC%89%AC%20%ED%9C%98%EC%A7%80%2050ml&frm=NVSHATC&prevQuery=%EA%B8%B0%EB%9D%BC%EB%A1%9C%EC%89%AC%20%ED%9C%98%EC%A7%80",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EC%83%A4%EB%84%AC%20%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88%2050ml&frm=NVSHATC&prevQuery=%EC%83%A4%EB%84%AC%20%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88",
    },
];
