// 引入公共css
import "../common/reset.css";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/talk";
import "../common/footer";

// 首页使用的js
import "./index.less";
import Swiper from "swiper";

import { WOW } from "wowjs";
new WOW().init();
const homeBanner = new Swiper(".home-banner", {
  // autoplay: {
  //     delay: 5000
  // },
  loop: true,
  speed: 1000,
  parallax: true,
  pagination:{
    el:".swiper-pagination",
    clickable: true
  }
});

// // 获取applications距离顶部的距离
// const applicationsTop = $(".applications-container").offset().top;
// // 获取视口高度
// const viewHeight = $(window).outerHeight();
// // 到达什么位置，开始运动
// const startMotion = applicationsTop - viewHeight;

// $(document).scroll(function () {
//   const scrollTop = $(this).scrollTop();
//   if (scrollTop > startMotion) {
//     const opacityStr = (scrollTop - startMotion) / 1000;
//     const opacity = +opacityStr.toFixed(2);
//     $("section.applications-container .main-view ul.applications-list li.application-item .img").css({
//       opacity
//     })
//   }
// });
