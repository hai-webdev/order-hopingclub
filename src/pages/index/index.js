import "../common/reset.css";
import "@/assets/global.less";
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
import "../common/header";
import "../common/footer";
import "./index.less";


const bannerSwiper = new Swiper(".swiper-banner",{
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    loop: true
})

$(".play").on("click", function(){
    $("video").prop("controls", true)
    $("video").get(0).play()
})