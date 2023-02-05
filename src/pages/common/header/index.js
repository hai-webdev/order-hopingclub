// 头部的js代码
import "./index.less";
import "font-awesome/css/font-awesome.min.css";

$(".language-box").hover(function(){
    $(".language-list").slideDown();
},function(){
    $(".language-list").slideUp();
})
$(".menu").on("click", function(){
    $(".nav-container").slideToggle();
})