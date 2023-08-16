const $more_btn = document.querySelectorAll(".slide-nb li")[3];
const $main_indicator = document.querySelectorAll(".all-menu .indicator ul li");
const $all_menu_wrap = document.querySelectorAll(".all-menu-wrap ul");
const $main_checkbox = document.querySelectorAll(".main_board .cash-bn .cash-underbar .checkbox ul li");
const $cash_img = document.querySelectorAll(".main_board .main_board-wrap .cash-bn > ul li")
const $main_thumbs = document.querySelectorAll(".thumbs .thumbs-wrap .thumbs-area > ul li")
const $family = document.querySelectorAll(".footer .footer-text .familysite span")
const $familyList = document.querySelectorAll(".footer .footer-text .familysite .list")
const $main_slide = document.querySelectorAll(".main-slide > ul > li")

$main_checkbox[0].classList.add("on")
$main_indicator[0].classList.add("on")
$all_menu_wrap[0].classList.add("on")
$cash_img[0].classList.add("on")
$(".slide-nb li").eq(3).click(function(){
    $(".all-menu").fadeIn(1500)
})
$(".close").click(function(){
    $(".all-menu").fadeOut(1500)
})
let count = 0
let slide_chk = false;
let cnt = 1;
let move_cnt = 0;
let timer = setInterval(autoPlay, 5000)
$(".header .main-bar .thumbs ul li").eq(0).addClass("on")
$(".main-slide > ul > li").eq(0).show()
$(".slide-nb ul li").eq(0).text("01")
$(".slide-nb ul li").eq(2).text($(".header .main-bar .thumbs .thumbs-wrap .thumbs-area ul li").length)
let chk_move =false;
let move_array = [5, 9, 13, 17, 21];
let move_array2 = [4, 8, 12, 16, 20];
$(".arrow ul li").click(function(){
    if(chk_move)return;
    setTimeout(() => {
        chk_move = false;
    }, 1000);
    chk_move= true
    let i = $(this).index();
    if(i == 0){
        cnt--;
        if(cnt <= 0){
            cnt = $(".header .main-bar .thumbs .thumbs-wrap .thumbs-area ul li").length;
            move_cnt = $(".header .main-bar .thumbs .thumbs-wrap .thumbs-area ul").length-1;
            $(".header .main-bar .thumbs .thumbs-wrap .thumbs-area").stop().animate({
                left:  -move_cnt * 1088 + "px"
            },1000)
        }
        if(move_array2.indexOf(cnt) >= 0)  {
            move_cnt--;
            $(".header .main-bar .thumbs .thumbs-wrap .thumbs-area").stop().animate({
                left:  -move_cnt * 1088 + "px"
            },1000)
        }
     
    }else{
        cnt++;
        if(move_array.indexOf(cnt) >= 0)  {
            move_cnt++;
            $(".header .main-bar .thumbs .thumbs-wrap .thumbs-area").stop().animate({
                left:  -move_cnt * 1088 + "px"
            },1000)
        }
        
        if(cnt > $(".header .main-bar .thumbs .thumbs-wrap .thumbs-area ul li").length - 1){
            cnt = 1;
            move_cnt = 0;
            $(".header .main-bar .thumbs .thumbs-wrap .thumbs-area").stop().animate({
                left:  -move_cnt * 1088 + "px"
            },1000)
        }
     
    }
    
    $(".header .main-bar .thumbs ul li").removeClass("on").eq(cnt-1).addClass("on");
    $(".main-slide > ul > li").hide().eq(cnt-1).fadeIn()
    
    
    if(cnt < 10){
        $(".slide-nb ul li").eq(0).text("0"+(cnt))

    }else{
        $(".slide-nb ul li").eq(0).text((cnt))
    }
})
$(".header .main-bar .thumbs ul").eq(0).addClass("on")
function Main_Indi(i){

    if(i == 0){
        $main_indicator[1].classList.remove("on")
        $all_menu_wrap[0].classList.remove("out")
        $all_menu_wrap[1].classList.remove("on")
        $all_menu_wrap[1].classList.add("out")
        $main_indicator[0].classList.add("on")
        $main_indicator[0].classList.remove("on")
        $all_menu_wrap[0].classList.add("on")
    }else{
        $main_indicator[0].classList.remove("on")
        $all_menu_wrap[0].classList.remove("on")
        $all_menu_wrap[0].classList.add("out")
        $all_menu_wrap[1].classList.remove("out")
        $main_indicator[1].classList.add("on")
        $all_menu_wrap[1].classList.add("on")
    }
}
function Main_cash(i){
    $main_checkbox.forEach((e,index)=>{
        $main_checkbox[index].classList.remove("on")
        $cash_img[index].classList.remove("on")
        
    })
    $main_checkbox[i].classList.add("on")
    $cash_img[i].classList.add("on")
    
}
function Main_slide(i){
    if(chk_move)return;
    setTimeout(() => {
        chk_move = false;
    }, 1000);
    chk_move= true
    $main_thumbs.forEach((e,index)=>{
        $main_thumbs[index].classList.remove("on")
    })
    $main_thumbs[i].classList.add("on")
    $(".main-slide > ul > li").hide().eq(i).fadeIn()
    if(i < 9){
        $(".slide-nb ul li").eq(0).text("0"+(i+1))

    }else{
        $(".slide-nb ul li").eq(0).text((i+1))
    }
    cnt = i+1;
}

function AllMenu(){

}


$family.forEach((e,i)=>{
    console.log(e,i)
    e.addEventListener("click",function(){
        $familyList[i].classList.toggle("on")
    })
})

function autoPlay(){
    if(chk_move)return;
    setTimeout(() => {
        chk_move = false;
    }, 1000);
    chk_move= true
    $main_slide[cnt-1].style.display = "none"
    $main_thumbs[cnt-1].classList.remove("on")
    cnt++
    if(cnt > $main_thumbs.length -1){
        cnt = 1
        move_cnt = 0;
        $(".header .main-bar .thumbs .thumbs-wrap .thumbs-area").stop().animate({
            left:  -move_cnt * 1088 + "px"
        },1000)
    }
    if(cnt < 10){
        $(".slide-nb ul li").eq(0).text("0"+(cnt))

    }else{
        $(".slide-nb ul li").eq(0).text((cnt))
    }
    if(move_array.indexOf(cnt) >= 0)  {
        move_cnt++;
        $(".header .main-bar .thumbs .thumbs-wrap .thumbs-area").stop().animate({
            left:  -move_cnt * 1088 + "px"
        },1000)
    }
    
    $main_slide[cnt-1].style.display = "block"
    $main_thumbs[cnt-1].classList.add("on")
}