

window.addEventListener("wheel", (e) => {
    e.preventDefault();
}, {passive : false});

const $html = $("html");
const lastPage = $("section").length;
let page = 1;

$html.animate({scrollTop:0}, 10);

$(window).on("wheel", (e) => {
	if ($html.is(":animated")) return;
 
	if (e.originalEvent.deltaY > 0){
		if(page == lastPage) return;
		page++;
	}

    if (e.originalEvent.deltaY < 0) {
		if(page == 1) return;
		page--;
	}

	const posTop = (page-1) * $(window).height();
	$html.animate({scrollTop : posTop});
});


$(() => {
    $(document).on('scroll', function(){
        if ($(window).scrollTop() > 100){
            $(".svgburg").addClass("menuStrong");
        }
        else {
            $(".svgburg").removeClass("menuStrong"); 
        }
    })
});
$(() => {
    $(document).on('scroll', function(){
        sitemap.classList.add("hidden"); 
    })
});

var window_width = window.matchMedia("screen and (max-width:780px)");
if(window_width.matches){
    burgAnimation = () =>{
        const burger = document.querySelector('.svgburg');
        const path1 = document.querySelector('.path1');
        const path2 = document.querySelector('.path2');
        const mline = document.querySelector('.mline');
    
        burger.addEventListener('click',() =>{     
            path1.classList.toggle('cross');
            path2.classList.toggle('cross');
            mline.classList.toggle('hide');
            console.log("mobile");
    
            const tl = gsap.timeline();
            tl.from('.sitemap', {duration: 0.1, x: 0});
        });
    }
}
else{
    burgAnimation = () =>{
        const burger = document.querySelector('.svgburg');
        const path1 = document.querySelector('.path1');
        const path2 = document.querySelector('.path2');
        const mline = document.querySelector('.mline');
    
        burger.addEventListener('click',() =>{     
            path1.classList.toggle('cross');
            path2.classList.toggle('cross');
            mline.classList.toggle('hide');
            
        });
        

    }
}
burgAnimation();
const clickdata = document.querySelector(".data");
const opendata = document.querySelector(".opened-data");

function dataopen() {
    opendata.classList.remove("hidden2");
}
function dataclose() {
    opendata.classList.add("hidden2");
}
clickdata.addEventListener('click', () => {
    if (opendata.classList.contains('hidden2')){
        dataopen();
        const tl = gsap.timeline();
        tl.from('.opened-data', {duration: 0.3, x: -1000});
    }
    else{
        dataclose();
    }
})

//MENU CLICK EVENT
const menuIcon = document.querySelector(".svgburg");
const sitemap = document.querySelector(".sitemap");

function menuOpen() {
    sitemap.classList.remove("hidden");
    if ($(window).scrollTop() < 100){
        $(".svgburg").addClass("menuStrong");
    }
}

function menuClose() {
    sitemap.classList.add("hidden");    
}

menuIcon.addEventListener('click', () => {
    if (sitemap.classList.contains('hidden')) {
        menuOpen();
        const tl = gsap.timeline();
        tl.from('.sitemap', {duration: 0.3, x: -1000});
    }
    else {
       menuClose();
    }
});
const activetitle = document.querySelector(".svgburg2");
const testmenu = document.querySelector(".test");

function testopen(){
    testmenu.classList.remove("hidden3");
}

function testclose(){
    testmenu.classList.add("hidden3");
}

activetitle.addEventListener('click', () => {
    if (testmenu.classList.contains("hidden3")){
        testopen();
        const tl = gsap.timeline();
        tl.from('.test', {duration: 0.3, y: -100});
    }
    else{
        testclose();
    }
})
testmenu.addEventListener('click', () => {
    if (opendata.classList.contains('hidden2')){
        dataopen();
    }
    else{
        dataclose();
    }
})

//SECTION2 MOUSE HOVER HANDLER
const mouseOverHandler = (event) => {
    const child = document.getElementById(event.target.children[1].id);
    if (child.classList.contains("hidden")) {
        child.classList.remove("hidden");
    }
}
const mouseLeaveHandler = (event) => {
    const child = document.getElementById(event.target.children[1].id);
    if (!child.classList.contains("hidden")) {
        child.classList.add("hidden");
    }
}
const items = document.querySelectorAll('.i');
[].forEach.call(items ,(item) => { 
    item.addEventListener("mouseover", mouseOverHandler, false); 
    item.addEventListener("mouseleave", mouseLeaveHandler, false);
});

