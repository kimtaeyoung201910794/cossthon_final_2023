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
        q: "왠지 모르게 작은 일에 쉽게 화가 나나요?",
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
        q: "정밀한일에 주의를 기울이지 못하나요?",
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
        q: "잠에 쉽게 들지 못하나요?",
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
        q: "요즘 마음이 불안하고 조급하며 기분이 쉽게 가라앉지 않나요?",
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
        name: "<우디>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "수면에 도움을 주며 나무향, 나무껍질과 향목 연상",
        descTitle2:
            "무게감, 안정적, 차분하고 중후함, 남성적",
        desc2: "1번. 조말론 - 154 \n 2번. 디올 - 화렌화이트 \n 3번. 겐조 - 뿌르 옴므",
        purlist1:"https://search.shopping.naver.com/search/all?query=%EC%A1%B0%EB%A7%90%EB%A1%A0%20154%2030ml&frm=NVSHATC&prevQuery=%EC%A1%B0%EB%A7%90%EB%A1%A0%20154",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EB%94%94%EC%98%AC%20%ED%99%94%EB%A0%8C%ED%99%94%EC%9D%B4%ED%8A%B8%2050ml&frm=NVSHATC&prevQuery=%EB%94%94%EC%98%AC%20%ED%99%94%EB%A0%8C%ED%99%94%EC%9D%B4%ED%8A%B8",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EA%B2%90%EC%A1%B0%20%EB%BF%8C%EB%A5%B4%EC%98%B4%EB%AF%80%205ml&frm=NVSHATC&prevQuery=%EA%B2%90%EC%A1%B0%20%EB%BF%8C%EB%A5%B4%EC%98%B4%EB%AF%80",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<스파이시>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "강한 향신료들이 지니는 자극적인 향",
        descTitle2:
            "톡쏘는 매콤한 향, 강한 첫 느낌을 준다(시나몬, 정향나무, 너트맥, 생강, 후추, 계피, 클로버, 진저, 홉, 쥬니버)",
        desc2: "1번. 샤넬 - 코코 \n 2번. 베르사체 - 에로스",
        purlist1:"https://search.shopping.naver.com/search/all?query=%EC%83%A4%EB%84%AC%20%EC%BD%94%EC%BD%94%201.5ml&frm=NVSHATC&prevQuery=%EC%83%A4%EB%84%AC%20%EC%BD%94%EC%BD%94",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EB%B2%A0%EB%A5%B4%EC%82%AC%EC%B2%B4%20%EC%97%90%EB%A1%9C%EC%8A%A4%205ml&frm=NVSHATC&prevQuery=%EB%B2%A0%EB%A5%B4%EC%82%AC%EC%B2%B4%20%EC%97%90%EB%A1%9C%EC%8A%A4",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EA%B2%90%EC%A1%B0%20%EB%BF%8C%EB%A5%B4%EC%98%B4%EB%AF%80%205ml&frm=NVSHATC&prevQuery=%EA%B2%90%EC%A1%B0%20%EB%BF%8C%EB%A5%B4%EC%98%B4%EB%AF%80",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<티바고 레더>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "자작나무 타르와 동물향에 따르는 연초향이 어우러진 남성적인향",
        descTitle2:
            "강하고 묵직한 향",
        desc2: "1번. 톰 포드 - 투스칸 레더 \n 2번. 샤넬 - 안테우스 \n 3번. 샤넬 - 플래티넘 에고이스트",
        purlist1:"https://search.shopping.naver.com/search/all?query=%ED%86%B0%20%ED%8F%AC%EB%93%9C%20%ED%88%AC%EC%8A%A4%EC%B9%B8%20%EB%A0%88%EB%8D%94%2010ml&frm=NVSHATC&prevQuery=%ED%86%B0%20%ED%8F%AC%EB%93%9C%20%ED%88%AC%EC%8A%A4%EC%B9%B8%20%EB%A0%88%EB%8D%94",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EC%83%A4%EB%84%AC%20%EC%95%88%ED%85%8C%EC%9A%B0%EC%8A%A4%2050ml&frm=NVSHATC&prevQuery=%EC%83%A4%EB%84%AC%20%EC%95%88%ED%85%8C%EC%9A%B0%EC%8A%A4",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EC%83%A4%EB%84%AC%20%ED%94%8C%EB%9E%98%ED%8B%B0%EB%84%98%20%EC%97%90%EA%B3%A0%EC%9D%B4%EC%8A%A4%ED%8A%B8%2010ml&frm=NVSHATC&prevQuery=%EC%83%A4%EB%84%AC%20%ED%94%8C%EB%9E%98%ED%8B%B0%EB%84%98%20%EC%97%90%EA%B3%A0%EC%9D%B4%EC%8A%A4%ED%8A%B8",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<푸제아/푸제르>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "푸제아는 양치식물로 싱싱하고 촉촉한 느낌의 향, 중후한 느낌으로 남성에게 어울리는 향",
        descTitle2:
            "최근 개성 강한 여성 사이에서 사용이 증가하고 있어요.",
        desc2: "1번. 아라미스-투스카니 \n 2번. 버버리-미스터 버버리 오드 뚜왈렛",
        purlist1:"https://search.shopping.naver.com/search/all?frm=NVSHPRC&maxPrice=160000&minPrice=120000&origQuery=%EC%95%84%EB%9D%BC%EB%AF%B8%EC%8A%A4%20%ED%88%AC%EC%8A%A4%EC%B9%B4%EB%8B%88&pagingIndex=1&pagingSize=40&productSet=total&query=%EC%95%84%EB%9D%BC%EB%AF%B8%EC%8A%A4%20%ED%88%AC%EC%8A%A4%EC%B9%B4%EB%8B%88&sort=rel&timestamp=&viewType=list",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EB%B2%84%EB%B2%84%EB%A6%AC%20%EB%AF%B8%EC%8A%A4%ED%84%B0%20%EB%B2%84%EB%B2%84%EB%A6%AC%20%EC%98%A4%EB%93%9C%20%EB%9A%9C%EC%99%88%EB%A0%9B%2030ml&frm=NVSHATC&prevQuery=%EB%B2%84%EB%B2%84%EB%A6%AC%20%EB%AF%B8%EC%8A%A4%ED%84%B0%20%EB%B2%84%EB%B2%84%EB%A6%AC%20%EC%98%A4%EB%93%9C%20%EB%9A%9C%EC%99%88%EB%A0%9B",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EC%83%A4%EB%84%AC%20%ED%94%8C%EB%9E%98%ED%8B%B0%EB%84%98%20%EC%97%90%EA%B3%A0%EC%9D%B4%EC%8A%A4%ED%8A%B8%2010ml&frm=NVSHATC&prevQuery=%EC%83%A4%EB%84%AC%20%ED%94%8C%EB%9E%98%ED%8B%B0%EB%84%98%20%EC%97%90%EA%B3%A0%EC%9D%B4%EC%8A%A4%ED%8A%B8",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<머스크>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "동물성 향료",
        descTitle2:
            "인상이 강함, 따뜻한 분위기, 무겁고 안정감, 포근함",
        desc2: "1번. 키엘 - 오리지널 머스크 \n 2번. 더바디샵 - 화이트 머스크 \n 3번. 구찌 - 바이 구찌 뿌르 옴므",
        purlist1:"https://search.shopping.naver.com/search/all?frm=NVSHPRC&maxPrice=60000&minPrice=30000&origQuery=%ED%82%A4%EC%97%98%20%EC%98%A4%EB%A6%AC%EC%A7%80%EB%84%90%20%EB%A8%B8%EC%8A%A4%ED%81%AC&pagingIndex=1&pagingSize=40&productSet=total&query=%ED%82%A4%EC%97%98%20%EC%98%A4%EB%A6%AC%EC%A7%80%EB%84%90%20%EB%A8%B8%EC%8A%A4%ED%81%AC&sort=rel&timestamp=&viewType=list",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EB%8D%94%20%EB%B0%94%EB%94%94%EC%83%B5%20%ED%99%94%EC%9D%B4%ED%8A%B8%EB%A8%B8%EC%8A%A4%ED%81%AC%2030ml%20%ED%96%A5%EC%88%98&frm=NVSHATC&prevQuery=%EB%8D%94%20%EB%B0%94%EB%94%94%EC%83%B5%20%ED%99%94%EC%9D%B4%ED%8A%B8%EB%A8%B8%EC%8A%A4%ED%81%AC%20%ED%96%A5%EC%88%98",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EA%B5%AC%EC%B0%8C%20%EB%B0%94%EC%9D%B4%20%EA%B5%AC%EC%B0%8C%20%EB%BF%8C%EB%A5%B4%20%EC%98%B4%EB%AF%80%2050ml&frm=NVSHATC&prevQuery=%EA%B5%AC%EC%B0%8C%20%EB%B0%94%EC%9D%B4%20%EA%B5%AC%EC%B0%8C%20%EB%BF%8C%EB%A5%B4%20%EC%98%B4%EB%AF%80",
    },
    {
        nameIntro: "이런향수를 추천해요",
        name: "<오리엔탈>",
        descTitle1: "당신의 기분과 어울리는 향이에요",
        desc1: "무겁고 어두운 느낌을 주는 향이에요",
        descTitle2:
            "부드러운 바닐라향, 자극적, 우아함, 열정적, 에로틱, 여성적",
        desc2: "1번. 디올 - 쁘와종 \n 2번. 샤넬 - 코코샤넬 \n 3번. 입생로랑 - 오피움 \n 겔랑 - 삼샤라 \n 불가리 - 옴니아 아메시스트 \n 랑콤 - 트레즐 \n 에스티로더 - 스펠바운드",
        purlist1:"https://search.shopping.naver.com/search/all?query=%EB%94%94%EC%98%AC%20%EC%81%98%EC%99%80%EC%A2%85%2020ml&frm=NVSHATC&prevQuery=%EB%94%94%EC%98%AC%20%EC%81%98%EC%99%80%EC%A2%85",
            purlist2:"https://search.shopping.naver.com/search/all?query=%EC%83%A4%EB%84%AC%20%EC%BD%94%EC%BD%94%201.5ml&frm=NVSHATC&prevQuery=%EC%83%A4%EB%84%AC%20%EC%BD%94%EC%BD%94",
            purlist3:"https://search.shopping.naver.com/search/all?query=%EC%9E%85%EC%83%9D%EB%A1%9C%EB%9E%91%20%EC%98%A4%ED%94%BC%EC%9B%80%207.5ml&frm=NVSHATC&prevQuery=%EC%9E%85%EC%83%9D%EB%A1%9C%EB%9E%91%20%EC%98%A4%ED%94%BC%EC%9B%80",
    },
];
