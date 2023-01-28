// 引入公共css
import "../common/reset.css";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/copyright";

// 首页使用的js
import "./index.less";

let headHeight = null;
// 获取底部foot的高度
const footHeight = $("footer").outerHeight();
// 获取视口高度
let viewHeight = $(window).outerHeight();
// 获取head的高度
if ($(".pc-head").css("display") !== "none") {
  headHeight = $(".pc-head").outerHeight();
} else if ($(".mobile-head").css("display") !== "none") {
  headHeight = $(".mobile-head").outerHeight();
}

// 设置容器高度
let wrapHeight = viewHeight - headHeight - footHeight;
setStyle({
  wrap: ".pics-switch-container",
  el: ".pic-item",
  wrapHeight,
});

function setStyle(options = {}) {
  let wrap = options.wrap;
  let el = options.el;
  let wrapHeight = options.wrapHeight;
  $(wrap).height(wrapHeight);
  let els = $(wrap).find(el);
  let wrapWidth = $(wrap).outerWidth();
  let elWidth = wrapWidth / els.length;
  for (let i = 0; i < els.length; i++) {
    const el = els[i];
    $(el).css({
      width: elWidth + "px",
    });
  }
  handleHover({
    el,
    elWidth,
    wrapWidth,
    len: els.length,
  });
}

function handleHover(options = {}) {
  const el = options.el;
  const wrapWidth = options.wrapWidth;
  const elWidth = options.elWidth;
  const len = options.len;
  //手风琴动画效果
  $(el).hover(function () {
    $(el).removeClass("active");
    $(this)
      .addClass("active")
      .stop()
      .stop()
      .animate({ width: elWidth * 2 }, 500)
      .siblings(el)
      .stop()
      .animate({ width: (wrapWidth - elWidth * 2) / (len - 1) }, 500);
  });

}
