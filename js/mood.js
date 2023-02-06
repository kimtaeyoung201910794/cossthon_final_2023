
//main을 선택해주어야 하기 때문에 queryselector을 이용해서 main을 가져와줌
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
//result queryselector로 불러와주기
const result = document.querySelector("#result");
//status bar을 만들기위해 엔드포인트 설정해주기
const endPoint = 5;

const select = [];

//const myChoose = document.getElementById("1_sec");
document.getElementById('1_sec').addEventListener('click',hel1);
function hel1() {
    return 0;
}

document.getElementById('2_sec').addEventListener('click',hel2);
function hel2() {
    return 0;
}

document.getElementById('3_sec').addEventListener('click',hel3);
function hel3() {
    return 0;
}

document.getElementById('4_sec').addEventListener('click',hel4);
function hel4() {
    return 0;
}


function addAnswer(answerText,qIdx,idx){
    var a = document.querySelector(".aBox");
    //버튼 형식으로 만들어주기
    var answer = document.createElement('button');
    
    answer.classList.add('answerList');
    answer.classList.add('my-5');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');

    answer.classList.add('fadeIn');
    a.appendChild(answer);
    answer.innerHTML = answerText;


    
    //클릭 이벤트 사용해주기
    answer.addEventListener("click",function(){
        var children= document.querySelectorAll('.answerList');
        for(let i=0; i<children.length; i++){
            children[i].disabled = true;

            //버튼 사라지게 하기
            children[i].style.WebkitAnimation = "fadeOut 0.5s"
            children[i].style.aniamtion = "fadeOut 0.5s"

        }
        //타이머 기능 사용하여 버튼들 안보이게 만들어주기
        setTimeout(()=> {
            
            var target = qnaList[qIdx].a[idx].type;

            //select에 값이 추가되게 하기
            for(let i =0; i<target.length; i++){
                select.push(target[i]);
                console.log(select);
            }
            // for(let i=0; i < target.length; i++){
            //     select=target;
            // }

            for(let i=0; i<children.length; i++){
                children[i].style.display="none";
            }
            goNext(++qIdx);
        },450)
    },false)

}

function calResult(){
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
        let a=hel1();
        let b=hel2();
        let c=hel3();
        let d=hel4();

        //기분이 좋을때 = a가0일때
        if (a==0) {
    
            //1sub: 0: 시트러스 1:아쿠아 2:오셔닉,마린 3:프루티 4: 플로럴 
            //2sub: 0:허벌 1: 얼씨 2:구르망 3:파우더리 4:시프레 
            //sub3: 0: 플로럴 1:그린 2: 모시 3: 플로럴 부케 4: 알데히드
            //sub4: 0:우디 1: 스파이시 2:티바코 레더 3: 푸제아/푸제르 4: 머스크 5: 오리엔탈
           
            //여기서 부터 남자일때 예//
            if (equals(select,[0,0,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,0,0,1])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,0,1,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,0,1,1])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[0,0,1,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,1,0,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[0,0,1,1,0])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[0,0,1,1,1])== true)
            {
                let result = 3;
                return result;
            }


            //여기서 부터 남자일때 아니오//

            else if (equals(select,[0,1,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,1,0,0,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[0,1,0,1,0])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[0,1,0,1,1])== true)
            {
                let result = 3;
                return result;
            }
            else if (equals(select,[0,1,1,0,0])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[0,1,1,0,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[0,1,1,1,0])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[0,1,1,1,1])== true)
            {
                let result = 3;
                return result;
            }
            
            //여기서부터 여자일때 예//

            else if (equals(select,[1,0,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,0,0,0,1])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,0,0,1,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,0,0,1,1])== true)
            {
                let result = 4;
                return result;
            }
            else if (equals(select,[1,0,1,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,0,1,0,1])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[1,0,1,1,0])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[1,0,1,1,1])== true)
            {
                let result = 3;
                return result;
            }
            

            //여기서부터 여자가 아니오일때//

            else if (equals(select,[1,1,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,1,0,0,1])== true)
            {
                let result = 3;
                return result;
            }
            else if (equals(select,[1,1,0,1,0])== true)
            {
                let result = 3;
                return result;
            }
            else if (equals(select,[1,1,0,1,1])== true)
            {
                let result = 4;
                return result;
            }
            else if (equals(select,[1,1,1,0,0])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[1,1,1,0,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[1,1,1,1,0])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[1,1,1,1,1])== true)
            {
                let result = 3;
                return result;
            }

        
        }

        //슬플때 b가0일때
        else if(b==0) {
            //여기서 부터 남자일때 예//
            if (equals(select,[0,0,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,0,0,1])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,0,1,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,0,1,1])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[0,0,1,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,1,0,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[0,0,1,1,0])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[0,0,1,1,1])== true)
            {
                let result = 1;
                return result;
            }
            //여기서 부터 남자일때 아니오//

            else if (equals(select,[0,1,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,1,0,0,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[0,1,0,1,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,1,0,1,1])== true)
            {
                let result = 3;
                return result;
            }
            else if (equals(select,[0,1,1,0,0])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[0,1,1,0,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[0,1,1,1,0])== true)
            {
                let result = 3;
                return result;
            }
            else if (equals(select,[0,1,1,1,1])== true)
            {
                let result = 3;
                return result;
            }
            
            //여기서부터 여자일때 예//

            else if (equals(select,[1,0,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,0,0,0,1])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,0,0,1,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,0,0,1,1])== true)
            {
                let result = 4;
                return result;
            }
            else if (equals(select,[1,0,1,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,0,1,0,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[1,0,1,1,0])== true)
            {
                let result = 4;
                return result;
            }
            else if (equals(select,[1,0,1,1,1])== true)
            {
                let result = 1;
                return result;
            }
            

            //여기서부터 여자가 아니오일때//

            else if (equals(select,[1,1,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,1,0,0,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[1,1,0,1,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,1,0,1,1])== true)
            {
                let result = 4;
                return result;
            }
            else if (equals(select,[1,1,1,0,0])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[1,1,1,0,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[1,1,1,1,0])== true)
            {
                let result = 4;
                return result;
            }
            else if (equals(select,[1,1,1,1,1])== true)
            {
                let result = 3;
                return result;
            }
        }

        //혼자있고 싶을때 c가0일때
        else if(c==0) {
            //여기서 부터 남자일때 예//
            if (equals(select,[0,0,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,0,0,1])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[0,0,0,1,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,0,1,1])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[0,0,1,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,1,0,1])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[0,0,1,1,0])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[0,0,1,1,1])== true)
            {
                let result = 2;
                return result;
            }


            //여기서 부터 남자일때 아니오//

            else if (equals(select,[0,1,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,1,0,0,1])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[0,1,0,1,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,1,0,1,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[0,1,1,0,0])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[0,1,1,0,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[0,1,1,1,0])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[0,1,1,1,1])== true)
            {
                let result = 2;
                return result;
            }
            
            //여기서부터 여자일때 예//

            else if (equals(select,[1,0,0,0,0])== true)
            {
                let result = 3;
                return result;
            }
            else if (equals(select,[1,0,0,0,1])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[1,0,0,1,0])== true)
            {
                let result = 3;
                return result;
            }
            else if (equals(select,[1,0,0,1,1])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[1,0,1,0,0])== true)
            {
                let result = 3;
                return result;
            }
            else if (equals(select,[1,0,1,0,1])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[1,0,1,1,0])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[1,0,1,1,1])== true)
            {
                let result = 2;
                return result;
            }
            

            //여기서부터 여자가 아니오일때//

            else if (equals(select,[1,1,0,0,0])== true)
            {
                let result = 4;
                return result;
            }
            else if (equals(select,[1,1,0,0,1])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[1,1,0,1,0])== true)
            {
                let result = 4;
                return result;
            }
            else if (equals(select,[1,1,0,1,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[1,1,1,0,0])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[1,1,1,0,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[1,1,1,1,0])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[1,1,1,1,1])== true)
            {
                let result = 2;
                return result;
            }
        }

        //차분해지고 싶을때 d가0일때
        else if(d==0) {
            //여기서 부터 남자일때 예//
            if (equals(select,[0,0,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,0,0,1])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,0,1,0])== true)
            {
                let result = 4;
                return result;
            }
            else if (equals(select,[0,0,0,1,1])== true)
            {
                let result = 1;
                return result;
            }
            else if (equals(select,[0,0,1,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,0,1,0,1])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[0,0,1,1,0])== true)
            {
                let result = 2;
                return result;
            }
            else if (equals(select,[0,0,1,1,1])== true)
            {
                let result = 1;
                return result;
            }


            //여기서 부터 남자일때 아니오//

            else if (equals(select,[0,1,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,1,0,0,1])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,1,0,1,0])== true)
            {
                let result = 3;
                return result;
            }
            else if (equals(select,[0,1,0,1,1])== true)
            {
                let result = 3;
                return result;
            }
            else if (equals(select,[0,1,1,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,1,1,0,1])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[0,1,1,1,0])== true)
            {
                let result = 4;
                return result;
            }
            else if (equals(select,[0,1,1,1,1])== true)
            {
                let result = 0;
                return result;
            }
            
            //여기서부터 여자일때 예//

            else if (equals(select,[1,0,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,0,0,0,1])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,0,0,1,0])== true)
            {
                let result = 4;
                return result;
            }
            else if (equals(select,[1,0,0,1,1])== true)
            {
                let result = 4;
                return result;
            }
            else if (equals(select,[1,0,1,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,0,1,0,1])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,0,1,1,0])== true)
            {
                let result = 5;
                return result;
            }
            else if (equals(select,[1,0,1,1,1])== true)
            {
                let result = 1;
                return result;
            }
            

            //여기서부터 여자가 아니오일때//

            else if (equals(select,[1,1,0,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,1,0,0,1])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,1,0,1,0])== true)
            {
                let result = 5;
                return result;
            }
            else if (equals(select,[1,1,0,1,1])== true)
            {
                let result = 5;
                return result;
            }
            else if (equals(select,[1,1,1,0,0])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,1,1,0,1])== true)
            {
                let result = 0;
                return result;
            }
            else if (equals(select,[1,1,1,1,0])== true)
            {
                let result = 4;
                return result;
            }
            else if (equals(select,[1,1,1,1,1])== true)
            {
                let result = 0;
                return result;
            }
        }
}


function setResult(){
    
    let point=calResult();

    const resultNameIntro = document.querySelector('.resultIntro');
  
    resultNameIntro.innerHTML = infoList[point].nameIntro;

    
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;
    if (window.localStorage.getItem("result_data") === null) {
        const arr = [infoList[point].name];
        window.localStorage.setItem('result_data', JSON.stringify(arr));
    }
    else {
        const arr = JSON.parse(localStorage.getItem("result_data"));
        arr.push(infoList[point].name);
        window.localStorage.setItem('result_data', JSON.stringify(arr));
    }

    // var resultImg = document.createElement('img');
    // const imgDiv = document.querySelector("#resultImg");
    // var imgURL = 'img/image-' +point+'.png';

    // resultImg.src = imgURL;
    // resultImg.alt = point;
    // resultImg.classList.add('img-fluid');
    // imgDiv.appendChild(resultImg);

    //point에 반환된 값으로 infoList에서 결과 값들 가져오기
    const resultDesc1 = document.querySelector('.resultDesc1');
    const resultDescTitle1 = document.querySelector('.resultDescTitle1');
    resultDescTitle1.innerHTML = infoList[point].descTitle1;
    resultDesc1.innerHTML = infoList[point].desc1;

    //point에 반환된 값으로 infoList에서 결과 값들 가져오기
    const resultDesc2 = document.querySelector('.resultDesc2');
    const resultDescTitle2 = document.querySelector('.resultDescTitle2');
    const sd1 = document.querySelector('.pur_list1');
    const sd2 =  document.querySelector('.pur_list2');
    const sd3 =  document.querySelector('.pur_list3');
    
    resultDescTitle2.innerHTML = infoList[point].descTitle2;
    resultDesc2.innerHTML = infoList[point].desc2;
    
    sd1.addEventListener('click', ()=>{
        window.open(infoList[point].purlist1);
    })
    sd2.addEventListener('click', ()=>{
        window.open(infoList[point].purlist2);
    })
    sd3.addEventListener('click', ()=>{
        window.open(infoList[point].purlist3);
    })
    
}

const result_data=window.localStorage.getItem('result_data');

function goResult() {
    //크롬은 webkit도 적어줘야해서 추가적으로 적어줌
    qna.style.webkitAnimation = "fadeOut 1s"
    qna.style.animation = "fadeOut 1s";
    //qna화면이 사라지고 result화면이 나타날때 자연스럽게 나타나게
    //하기위해서 애니매이션 기능을 추가하고 시간도 걸어주기
    setTimeout(()=>{
        result.style.webkitAnimation = "fadeIn 1s"
        result.style.animation = "fadeIn 1s";
        setTimeout(()=> {
            qna.style.display = "none";
            result.style.display = "block";
        }, 450);

    }, 450);

    //result 셋팅해주기
    setResult();
   
    


   
}

//다음질문 넘어가는 함수 작성해주기
function goNext(qIdx){

    //q인덱스가 앤드포인트에 도달했을때 goresult로 가기
    if(qIdx == endPoint) {
        goResult();
        return;
    }

    var q= document.querySelector('.Qbox');
    q.innerHTML = qnaList[qIdx].q;

    //data.js에있는 값을 가져오기
    for(let i in qnaList[qIdx].a)
    {
        //질문을 더해주는 함수
        //i값 전달해주기
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
    }

    var countStatusNum = document.querySelector('.countStatus');
    countStatusNum.innerHTML = (qIdx +1)+"/"+ endPoint;

    //statusbar생성해주기
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint)*(qIdx+1) +"%"
}




// start함수를 만들어서 클릭이 되었을때 main페이지는 사라지고 
// qna페이지가 나타나게끔 하는 함수 만들기
function start() {
    //크롬은 webkit도 적어줘야해서 추가적으로 적어줌

    main.style.webkitAnimation = "fadeOut 1s"
    main.style.animation = "fadeOut 1s";
    //main화면이 사라지고 qna화면이 나타날때 자연스럽게 나타나게
    //하기위해서 애니매이션 기능을 추가하고 시간도 걸어주기
    setTimeout(()=>{
        qna.style.webkitAnimation = "fadeIn 1s"
        qna.style.animation = "fadeIn 1s";
        setTimeout(()=> {
            main.style.display = "none";
            qna.style.display = "block";
        }, 450);
        let qIdx = 0;
        goNext(qIdx);

    }, 450);
   
    


   
}
