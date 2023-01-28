
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

import {WOW} from "wowjs";
new WOW().init();
