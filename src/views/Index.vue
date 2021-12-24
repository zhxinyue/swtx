<template>
  <div id="index_wrap">
    <div class="index_btn">
      <div class="btn cn_btn" @click="nextStep(1)"></div>
      <div class="btn en_btn" @click="nextStep(2)"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {};
  },
  created(){
    console.log(this.$router)
  },
 
  methods: {
    nextStep(idx) {
   
      this.$router.push({ path: "/question1", query: { idx: idx } });
    }
  }
};
</script>
<style>
@import url("../assets/css/reset.css");
</style>
<style scope>

#index_wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #f3f3f3 url(../assets/img/bg.png) no-repeat;
  background-size: 100% 6.67rem;
}
.index_btn {
  width: 70%;
  position: absolute;
  top: 5.4rem;
  left: 15%;
}
.btn {
  width: 1.3rem;
  height: 0.36rem;
  float: left;
  background: url(../assets/img/cn.png) no-repeat center;
  background-size: 100% 100%;
}
.btn.en_btn {
  float: right;
  background-image: url(../assets/img/en.png);
}
</style>
