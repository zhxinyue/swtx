<template>
  <div id="thanks_wrap">
    <img src="../assets/img/icon19.png" alt="" class="img_gift" />
    <p class="p_tip">{{ Thanks1 }}</p>
    <p class="p_tip">{{ Thanks2 }}</p>
  </div>
</template>
<script>
import list from "../../static/questionList.json";
export default {
  name: "Thanks",
  data() {
    return {
      Thanks1: "",
      Thanks2: ""
    };
  },
  created() {
    if (this.$route.query.idx == 1) {
      this.Thanks1 = list.cnThanks1;
      this.Thanks2 = list.cnThanks2;
    } else if (this.$route.query.idx == 2) {
      this.Thanks1 = list.enThanks1;
      this.Thanks2 = list.enThanks2;
    }
  }
};
</script>
<style>
@import url("../assets/css/reset.css");
#thanks_wrap {
  width: 100%;
  height: 100vh;
  background: #f3f3f3 url(../assets/img/bg4.png) no-repeat;
  background-size: 100% 100%;
  padding-top: 1rem;
}
.img_gift {
  display: block;
  width: 0.78rem;
  height: 0.81rem;
  margin: 0 auto 0.3rem;
}
.p_tip {
  font-size: 0.18rem;
  text-align: center;
  font-weight: bold;
  color: #1a5a9c;
  margin-bottom: 0.18rem;
}
</style>
