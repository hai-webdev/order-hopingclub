import "../common/reset.css";
import "@/assets/global.less";
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
import "../common/header";
import "../common/footer";
import "./index.less";


const realEstate = new Swiper(".real-estate-swiper",{
    navigation:{
        prevEl:".swiper-button-prev",
        nextEl:".swiper-button-next"
    },
    loop: true,
    autoHeight:true
})