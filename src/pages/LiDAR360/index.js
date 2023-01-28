// 引入公共css
import "../common/reset.css";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/talk";
import "../common/footer";

// 首页使用的js
import "./index.less";
import { WOW } from "wowjs";
import axios from "axios";
new WOW().init();

$(".formShow").on("click", function () {
  $(".form-container").addClass("show");
  return false;
});

const vm = new Vue({
  el: "#forms",
  data: {
    formData: {
      "First Name": "",
      "Last Name": "",
      "Company/University": "",
      "Customer Type": "",
      "Job Title": "",
      Email: "",
      Industry: "",
      Country: "",
      "Which hardware are you using？": "",
      "Which software are you interested in?": "",
      "How Did You Find Us?": "",
    },
    jobTitle: false,
    Industry: false,
    Customer: false,
    hardware: false,
    find: false,
    other1: "",
    other2: "",
    other3: "",
    other4: "",
    other5: "",
  },
  methods: {
    close() {
      $(".form-container").removeClass("show");
    },
    async formSubmit(url) {
      const formData = { ...this.formData };
      if (this.other1) {
        formData["Job Title"] =
          formData["Job Title"] + "【" + this.other1 + "】";
      }
      if (this.other2) {
        formData["Industry"] = formData["Industry"] + "【" + this.other2 + "】";
      }
      if (this.other3) {
        formData["Customer Type"] =
          formData["Customer Type"] + "【" + this.other3 + "】";
      }
      if (this.other4) {
        formData["Which hardware are you using？"] =
          formData["Which hardware are you using？"] +
          "【" +
          this.other4 +
          "】";
      }
      if (this.other5) {
        formData["How Did You Find Us?"] =
          formData["How Did You Find Us?"] + "【" + this.other5 + "】";
      }
      var emailReg =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!formData["First Name"]) {
        alert("First Name is required!");
        return;
      }
      if (!formData["Last Name"]) {
        alert("Last Name is required!");
        return;
      }
      if (!formData["Company/University"]) {
        alert("Company/University is required!");
        return;
      }
      if (!formData["Customer Type"]) {
        alert("Customer Type is required!");
        return;
      }
      if (!formData["Job Title"]) {
        alert("Job Title is required!");
        return;
      }
      if (!formData["Email"]) {
        alert("Email is required!");
        return;
      }
      if (!emailReg.test(formData["Email"].trim())) {
        alert("Invalid Email Address!");
        return;
      }
      if (!formData["Industry"]) {
        alert("Industry is required!");
        return;
      }
      if (!formData["Country"]) {
        alert("Country is required!");
        return;
      }
      if (!formData["Which hardware are you using？"]) {
        alert("Which hardware are you using？ is required!");
        return;
      }
      if (!formData["Which software are you interested in?"]) {
        alert("Which software are you interested in? is required!");
        return;
      }
      if (!formData["How Did You Find Us?"]) {
        alert("How Did You Find Us? is required!");
        return;
      }
      console.log(formData);
      const result = await axios.post(
        "https://licloud.lidar360.com/admin/api/v1/webForm/action/604f2bbf06efed00312c55ee",
        formData
      );
      if (result.data) {
        this.close();
        alert("Thanks for your cooperation. The trial license will be sent within 24 hours to your email.")
        window.open(url);
      }
    },
    selectChange(form, show) {
      this[show] = false;
      var dataText = form;
      if (
        form === "Commercial Company - Other" ||
        form === "Government - Other" ||
        form === "NGO/NFO - Other" ||
        (form === "Other" && show[0] === "Industry") ||
        (form === "Others" && show[0] === "hardware") ||
        (form === "Others" && show[0] === "find")
      ) {
        this[show] = true;
      }
      // if(form === 'Commercial Company - Other'){
      //     this[show] = true
      //     dataText = `Commercial Company - ${this.other1}`
      // }else if(form === 'Government - Other'){
      //     this[show] = true
      //     dataText = `Government - ${this.other1}`
      // }else if(form === 'NGO/NFO - Other'){
      //     this[show] = true
      //     dataText = `NGO/NFO - ${this.other1}`
      // }
    },
  },
});
