<template>
  <div id="personal_wrap" class="personal">
    <div class="personal_title">{{ title }}</div>
    <div class="personal_content">
      <img src="../assets/img/icon12.png" alt="" class="img_icon" />
      <div class="personal_tip">{{ tip }}</div>

      <div class="heng"></div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon7.png" alt="" class="img_pos" />
          {{ dataList.userCompany }}
          <i style="color:red">*</i> ：
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="iptPlace"
          v-model="userCompany"
        />
      </div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon7.png" alt="" class="img_pos" />
          {{ dataList.userDepartment }}
          <i style="color:red">*</i> ：
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="iptPlace"
          v-model="userDepartment"
        />
      </div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon7.png" alt="" class="img_pos" />
          {{ dataList.userName }}
          <i style="color:red">*</i> ：
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="iptPlace"
          v-model="userName"
        />
      </div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon7.png" alt="" class="img_pos" />
          {{ dataList.userTelephone }}
          <i style="color:red">*</i> ：
        </div>
        <input class="box_dec" :placeholder="iptPlace" v-model="userTelephone" />
      </div>
      <div class="personal_box">
        <div class="input_title">
          <img src="../assets/img/icon7.png" alt="" class="img_pos" />
          {{ dataList.userMailingAddress }}
          <i style="color:red">*</i> ：
        </div>
        <input
          type="text"
          class="box_dec"
          :placeholder="iptPlace"
          v-model="userMailingAddress"
        />
      </div>
    </div>
    <div class="bottom_btn">
      <div
        :class="[lanIdx == 1 ? 'left_btn' : 'left_btn1']"
        @click="lastStep"
      ></div>
      <div
        :class="[lanIdx == 1 ? 'right_btn' : 'right_btn1']"
        @click="nextStep"
      ></div>
    </div>
  </div>
</template>
<script>
import list from "../../static/questionList.json";
export default {
  name: "PersonalInfo",
  data() {
    return {
      lanIdx: "",
      title: "",
      tip: "",
      dialogText: "",
      errorMsg: "",
      dataList: {},
      iptPlace: "",
      userTelephone: "",
          userCompany: "",
          userDepartment: "",
          userName: "",
          userMailingAddress: "",
      telTip: "",
      confirmTxt: ""
    };
  },
  created() {
    this.lanIdx = this.$route.query.idx;
    if (this.$route.query.idx == 1) {
      this.dataList = list.cnPerlist;
      this.title = list.cnPerTitle;
      this.tip = list.cnPerTip;
      this.dialogText = list.cnDialog;
      this.iptPlace = list.cn.answer20;
      this.telTip = list.cnTel;
      this.errorMsg = list.cnErrorMsg;
      this.confirmTxt = list.cnConfirm;
    } else if (this.$route.query.idx == 2) {
      this.dataList = list.enPerlist;
      this.title = list.enPerTitle;
      this.tip = list.enPerTip;
      this.dialogText = list.enDialog;
      this.iptPlace = list.en.answer20;
      this.telTip = list.enTel;
      this.errorMsg = list.enErrorMsg;
      this.confirmTxt = list.enConfirm;
    }
  },
  methods: {
    lastStep() {
      this.$router.go(-1);
    },
    nextStep() {
    
      if (
        this.userTelephone == "" ||
        this.userCompany == "" ||
        this.userDepartment == "" ||
        this.userName == "" ||
        this.userMailingAddress == ""
      ) {
        this.$dialog.alert({
          message: this.dialogText,
          confirmButtonText: this.confirmTxt
        });
        return;
      }
      var phone = Number(this.userTelephone);
      if (this.$route.query.idx == 1) {
        if (
          !/^[1][2,3,4,5,6,7,8,9][0-9]{9}$/.test(phone) ||
          this.userTelephone.length != 11
        ) {
          this.$dialog.alert({
            message: this.telTip,
            confirmButtonText: this.confirmTxt
          });
          return;
        }
      }

      this.$ajax
        .post("http://qa.travbao.com/goabraod/news/QuestionnaireResult.do", {
          resultList: JSON.parse(this.$route.query.result),
          userTelephone: this.userTelephone,
          userCompany: this.lanIdx==1?'C-'+this.userCompany:'E-'+this.userCompany,
          userDepartment:this.userDepartment,
          userName: this.userName,
          userMailingAddress: this.userMailingAddress
        })
        .then(res => {
          if (res.data.code == 0) {
            this.$router.push({
              path: "/thanks",
              query: { idx: this.$route.query.idx }
            });
          } else {
            this.$dialog.alert({
              message: this.errorMsg,
              confirmButtonText: this.confirmTxt
            });
          }
        });
    }
  }
};
</script>
<style>
@import url("../assets/css/reset.css");
</style>
<style scope>
#personal_wrap {
  width: 100%;
  height: 100%;
  height: auto;
  background: #f3f3f3 url(../assets/img/bg5.png) no-repeat;
  background-size: 100%;
  padding: 0.3rem 0;
}

#personal_wrap .personal_content {
  width: 95%;
  box-sizing: border-box;
  margin: 0 auto;
  border: 0.03rem solid #195693;
  position: relative;
  padding-bottom: 0.2rem;
}

#personal_wrap .personal_title {
  font-size: 0.16rem;
  font-weight: bold;
  text-align: center;
  line-height: 0.4rem;
  color: #282929;
}

.img_icon {
  display: block;
  width: 0.24rem;
  height: 0.36rem;
  margin: 0.2rem auto 0.1rem;
}
#personal_wrap .personal_tip {
  color: #0b50a2;
  font-size: 0.15rem;
  line-height: 0.22rem;
  /* width: 3rem; */
  margin: 0 auto;
  padding: 0 0.2rem;
}
.heng {
  padding: 0.1rem 0 0;
  border-bottom: 0.01rem dashed #00569c;
}

.personal_box {
  /* width: 3rem; */
  padding: 0 0.2rem;
  margin: 0.1rem auto 0;
}
.input_title {
  font-size: 0.16rem;
  color: #000000;
  margin-bottom: 0.1rem;
}
.img_pos {
  width: 0.19rem;
  height: 0.19rem;
  display: inline-block;
  vertical-align: middle;
  padding-right: 0.05rem;
}


#personal_wrap .box_dec {
  display: block;
  /* width: 3rem; */
  width:100%;
  height: 0.34rem;
  line-height: 0.34rem;
  font-size: 0.14rem;
  color: #00569c;
  margin: 0 auto 0.05rem;
  border: 0.01rem solid #195693;
  background: #fff;
  border-radius: 0.04rem;
  box-shadow: 0 0 0.10rem #f8f0d5 inset;
  text-indent: 0.1rem;
}

#personal_wrap .bottom_btn {
  width: 3rem;
  height: 0.45rem;
  margin: 0.2rem auto;
}

.personal .left_btn {
  width: 1.25rem;
  height: 0.36rem;
  float: left;
  background: url(../assets/img/last.png) no-repeat center;
  background-size: 100% 100%;
}
.personal .left_btn1 {
  width: 1.25rem;
  height: 0.36rem;
  float: left;
  background: url(../assets/img/last1.png) no-repeat center;
  background-size: 100% 100%;
}
.personal .right_btn {
  width: 1.25rem;
  height: 0.36rem;
  float: right;
  background: url(../assets/img/confirm.png) no-repeat center;
  background-size: 100% 100%;
}
.personal .right_btn1 {
  width: 1.25rem;
  height: 0.36rem;
  float: right;
  background: url(../assets/img/confirm1.png) no-repeat center;
  background-size: 100% 100%;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #bababa;
}

input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #bababa;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #bababa;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #bababa;
}
.van-dialog__message {
  font-size: 0.16rem;
}
.van-dialog__confirm,
.van-dialog__confirm:active {
  color: #0189f9;
}
</style>
