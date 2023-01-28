
// 引入公共css
import "../common/reset.css";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/talk";
import "../common/footer";

// 首页使用的js
import "./index.less";

import {WOW} from "wowjs";
new WOW().init();

// $(".network-nav-item").on("click", function(){
//     var index = $(this).index();
//     $(this).addClass("active").siblings().removeClass("active")
//     $(".network-subnav-list").eq(index).addClass("show").siblings().removeClass("show");

// })

// $(".network-subnav-item").on("click", function(){
//     $(this).addClass("active").siblings().removeClass("active");
//     var index = $(this).data("id");
//     $(".network-cont-item").removeClass("show");
//     $(`.network-cont-item[data-id=${index}]`).addClass("show");
// })