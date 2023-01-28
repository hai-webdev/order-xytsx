// 头部的js代码
import "./index.less";
import "swiper/css/swiper.min.css";
import "wowjs/css/libs/animate.css";
import {WOW} from "wowjs";
import axios from 'axios';
new WOW().init();

$(".menu").on("click", function(){
    $(this).toggleClass("active");
    $(".main-head-container").slideToggle();
})

$(".nav-item > a").on("click", function(){
    $(this).find("i.icon").toggleClass("on");
    $(this).parents(".nav-item").find("ul.nav-sub-list").slideToggle();
})
$(".nav-sub-item > a").on("click", function(){
    $(this).find("i.icon").toggleClass("on");
    $(this).parents(".nav-sub-item").find("ul.nav-sub3-list").slideToggle();
})

$(".common-formShow").on("click", function () {
    $(".common-form-container").addClass("show");
    return false;
  });
  const commonVm = new Vue({
    el: "#common_forms",
    data: {
      formData: {
        "First Name": "",
        "Last Name": "",
        "Company/University": "",
        "Email": "",
        "Which software are you interested in?":"",
      },

    },
    methods: {
      close() {
        $(".common-form-container").removeClass("show");
      },
      async formSubmit() {
        const formData = { ...this.formData };
        var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!formData['First Name']){
          alert("First Name is required!");
          return;
        }
        if(!formData['Last Name']){
          alert("Last Name is required!");
          return;
        }
        if(!formData['Company/University']){
          alert("Company/University is required!");
          return;
        }

        if(!formData['Email']){
          alert("Email is required!");
          return;
        }
        if(!emailReg.test(formData['Email'].trim())){
          alert("Invalid Email Address!");
          return;
        }

        if(!formData['Which software are you interested in?']){
          alert("Which software are you interested in? is required!");
          return;
        }
        const result = await axios.post("https://licloud.lidar360.com/admin/api/v1/webForm/action/6113a47a680ad1001f783e86",formData);
        if(result.data === 'ok'){
          this.close();
            alert("Submit success. Thanks for your subscription.");
        }
      },
    },
  });