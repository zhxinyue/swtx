<template>
  <div id="question_wrap" class="question1">
    <div class="question_content">
      <div class="question_box">
        <div
          class="box_text"
          :style="
            (emptyFlag && optionVal1 == '') ||
            (emptyFlag && causeFlag1 && inputVal1 == '')
              ? 'color: red'
              : 'color:#195693'
          "
        >
          01. {{ dataList.SD1 }}
        </div>
        <van-checkbox-group
          v-model="result1"
          class="box_checkbox_group"
          direction="horizontal"
          @change="checkboxChange(1, 'R')"
        >
          <van-checkbox
            v-for="(item, index) in dataList.answer1"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-checkbox
          >
        </van-checkbox-group>
        <input
          type="text"
          v-model="inputVal1"
          class="box_dec"
          :placeholder="dataList.answer20"
          v-if="causeFlag1"
        />
        <div
          class="errortip"
          v-if="
            (emptyFlag && optionVal1 == '') ||
              (emptyFlag && causeFlag1 && inputVal1 == '')
          "
        >
          {{ queTip }}
        </div>
      </div>
      <div class="question_box">
        <div
          class="box_text"
          :style="causeFlag2 ? 'color: red' : 'color:#195693'"
        >
          02. {{ dataList.SD5 }}
        </div>
        <table border="1" class="tab_class" v-if="nullans2">
          <tr>
            <th></th>
            <th v-for="(item, index) in dataList.answer24" :key="index">
              <img
                :src="require('../assets/img/' + item.img)"
                alt=""
                class="box_img"
              />

              <em class="box_em">{{ item.text }}</em>
            </th>
          </tr>
          <tr
            v-for="(item, index) in dataList.answer2"
            :key="index"
            v-if="item.ansFlag"
          >
            <td class="td1-style">{{ item.text }}</td>
            <td
              v-for="(itm, idx) in dataList.answer24"
              :key="idx"
              @click="
                chooseLevelTab(item.text, itm.score, index, idx, 'answer2')
              "
            >
              <img
                src="../assets/img/icon7.png"
                alt=""
                class="icon7_img"
                v-if="item.acindex == idx"
              />
            </td>
          </tr>
        </table>

        <div>
          <p class="p-tip" v-if="answer2IptFlag">{{ dataList.answer25 }}</p>
          <input
            v-for="(item, index) in dataList.answer2"
            :key="index"
            type="text"
            class="box_dec"
            :placeholder="item.text"
            v-if="item.iptFlag"
            v-model="item.iptVal"
          />
        </div>
      </div>

      <div class="question_box">
        <div
          class="box_text"
          :style="
            (emptyFlag && optionVal3 == '') ||
            (emptyFlag && causeFlag3 && inputVal3 == '')
              ? 'color: red'
              : 'color:#195693'
          "
        >
          03. {{ dataList.SD3 }}
        </div>
        <van-radio-group
          v-model="optionVal3"
          direction="horizontal"
          class="box_checkbox_group"
          @change="radioChange(3, 'D')"
        >
          <van-radio
            v-for="(item, index) in dataList.answer3"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-radio
          >
        </van-radio-group>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal3"
          :placeholder="dataList.answer20"
          v-if="causeFlag3"
        />
        <div
          class="errortip"
          v-if="
            (emptyFlag && optionVal3 == '') ||
              (emptyFlag && causeFlag3 && inputVal3 == '')
          "
        >
          {{ queTip }}
        </div>
      </div>

      <div class="question_box">
        <div
          class="box_text"
          :style="
            (emptyFlag && optionVal4 == '') ||
            (emptyFlag && causeFlag4 && inputVal4 == '')
              ? 'color: red'
              : 'color:#195693'
          "
        >
          04. {{ dataList.SD4 }}
        </div>
        <van-checkbox-group
          v-model="result4"
          class="box_checkbox_group"
          direction="horizontal"
          @change="checkboxChange(4, 'J')"
        >
          <van-checkbox
            v-for="(item, index) in dataList.answer4"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-checkbox
          >
        </van-checkbox-group>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal4"
          :placeholder="dataList.answer20"
          v-if="causeFlag4"
        />
        <div
          class="errortip"
          v-if="
            (emptyFlag && optionVal4 == '') ||
              (emptyFlag && causeFlag4 && inputVal4 == '')
          "
        >
          {{ queTip }}
        </div>
      </div>
      <div class="question_box">
        <div
          class="box_text"
          :style="causeFlag5 ? 'color: red' : 'color:#195693'"
        >
          05. {{ dataList.SD5 }}
        </div>
        <table border="1" class="tab_class">
          <tr>
            <th></th>
            <th v-for="(item, index) in dataList.answer24" :key="index">
              <img
                :src="require('../assets/img/' + item.img)"
                alt=""
                class="box_img"
              />

              <em class="box_em">{{ item.text }}</em>
            </th>
          </tr>
          <tr v-for="(item, index) in dataList.answer5" :key="index">
            <td class="td1-style">{{ item.text }}</td>
            <td
              v-for="(itm, idx) in dataList.answer24"
              :key="idx"
              @click="
                chooseLevelTab(item.text, itm.score, index, idx, 'answer5')
              "
            >
              <img
                src="../assets/img/icon7.png"
                alt=""
                class="icon7_img"
                v-if="item.acindex == idx"
              />
            </td>
          </tr>
        </table>

        <div>
          <p class="p-tip" v-if="answer5IptFlag">{{ dataList.answer25 }}</p>
          <input
            v-for="(item, index) in dataList.answer5"
            :key="index"
            type="text"
            class="box_dec"
            :placeholder="item.text"
            v-if="item.iptFlag"
            v-model="item.iptVal"
          />
        </div>
      </div>
      <div class="question_box">
        <div class="box_title">
          <div
            class="box_text"
            :style="
              (emptyFlag && optionVal6 == '') ||
              (emptyFlag && causeFlag6B && activeVal6 == '') ||
              (emptyFlag && causeFlag6 && inputVal6 == '')
                ? 'color: red'
                : 'color:#195693'
            "
          >
            06. {{ dataList.SD6 }}
          </div>
        </div>
        <van-radio-group
          v-model="optionVal6"
          direction="horizontal"
          class="box_checkbox_group"
          @change="radioChange(6, 'B', 'causeFlag6B')"
        >
          <van-radio
            v-for="(item, index) in dataList.answer6"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-radio
          >
        </van-radio-group>
        <div v-if="causeFlag6B">
          <div
            class="box_text"
            :style="
              (emptyFlag && optionVal6 == '') ||
              (emptyFlag && causeFlag6B && activeVal6 == '') ||
              (emptyFlag && causeFlag6 && inputVal6 == '')
                ? 'color: red'
                : 'color:#195693'
            "
          >
            {{ dataList.SD6B }}
          </div>
          <div class="box_div">
            <div
              v-for="(item, index) in dataList.answer24"
              :key="index"
              :class="[
                activeIndex6 == item.score ? 'box_options_on' : '',
                'box_options'
              ]"
              @click="chooseLevel(item.score, 6)"
            >
              <img
                :src="require('../assets/img/' + item.img)"
                alt=""
                class="box_img"
              />

              <em class="box_em">{{ item.text }}</em>
            </div>
          </div>
        </div>

        <input
          type="text"
          class="box_dec"
          v-model="inputVal6"
          :placeholder="dataList.answer23"
          v-if="causeFlag6"
        />
        <div
          class="errortip"
          v-if="
            (emptyFlag && optionVal6 == '') ||
              (emptyFlag && causeFlag6B && activeVal6 == '') ||
              (emptyFlag && causeFlag6 && inputVal6 == '')
          "
        >
          {{ queTip }}
        </div>
      </div>
      <div class="question_box">
        <div
          class="box_text"
          :style="causeFlag7 ? 'color: red' : 'color:#195693'"
        >
          07. {{ dataList.SD7 }}
        </div>
        <table border="1" class="tab_class">
          <tr>
            <th></th>
            <th v-for="(item, index) in dataList.answer24" :key="index">
              <img
                :src="require('../assets/img/' + item.img)"
                alt=""
                class="box_img"
              />

              <em class="box_em">{{ item.text }}</em>
            </th>
          </tr>
          <tr v-for="(item, index) in dataList.answer7" :key="index">
            <td class="td1-style">{{ item.text }}</td>
            <td
              v-for="(itm, idx) in dataList.answer24"
              :key="idx"
              @click="
                chooseLevelTab(item.text, itm.score, index, idx, 'answer7')
              "
            >
              <img
                src="../assets/img/icon7.png"
                alt=""
                class="icon7_img"
                v-if="item.acindex == idx"
              />
            </td>
          </tr>
        </table>

        <div>
          <p class="p-tip" v-if="answer7IptFlag">{{ dataList.answer25 }}</p>
          <input
            v-for="(item, index) in dataList.answer7"
            :key="index"
            type="text"
            class="box_dec"
            :placeholder="item.text"
            v-if="item.iptFlag"
            v-model="item.iptVal"
          />
        </div>
      </div>
      <div class="question_box">
        <div
          class="box_text"
          :style="
            (emptyFlag && optionVal8 == '') ||
            (emptyFlag && causeFlag8 && inputVal8 == '')
              ? 'color: red'
              : 'color:#195693'
          "
        >
          08. {{ dataList.SD8 }}
        </div>
        <van-checkbox-group
          v-model="result8"
          :min="3"
          :max="3"
          class="box_checkbox_group"
          direction="horizontal"
          @change="checkboxChange(8, 'G')"
        >
          <van-checkbox
            v-for="(item, index) in dataList.answer8"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-checkbox
          >
        </van-checkbox-group>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer20"
          v-if="causeFlag8"
          v-model="inputVal8"
        />
        <div
          class="errortip"
          v-if="
            (emptyFlag && optionVal8 == '') ||
              (emptyFlag && causeFlag8 && inputVal8 == '')
          "
        >
          {{ queTip }}
        </div>
      </div>
      <div class="question_box">
        <div
          class="box_text"
          :style="
            (emptyFlag && optionVal9 == '') ||
            (emptyFlag && causeFlag9 && inputVal9 == '')
              ? 'color: red'
              : 'color:#195693'
          "
        >
          09. {{ dataList.SD9 }}
        </div>
        <van-checkbox-group
          v-model="result9"
          :min="3"
          :max="3"
          class="box_checkbox_group"
          direction="horizontal"
          @change="checkboxChange(9, 'I')"
        >
          <van-checkbox
            v-for="(item, index) in dataList.answer9"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-checkbox
          >
        </van-checkbox-group>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer20"
          v-if="causeFlag9"
          v-model="inputVal9"
        />
        <div
          class="errortip"
          v-if="
            (emptyFlag && optionVal9 == '') ||
              (emptyFlag && causeFlag9 && inputVal9 == '')
          "
        >
          {{ queTip }}
        </div>
      </div>
      <div class="question_box">
        <div
          class="box_text"
          :style="
            (emptyFlag && optionVal10 == '') ||
            (emptyFlag && causeFlag10 && inputVal10 == '')
              ? 'color: red'
              : 'color:#195693'
          "
        >
          10. {{ dataList.SD10 }}
        </div>
        <van-radio-group
          v-model="optionVal10"
          direction="horizontal"
          class="box_checkbox_group"
          @change="radioChange(10, 'F')"
        >
          <van-radio
            v-for="(item, index) in dataList.answer10"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-radio
          >
        </van-radio-group>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal10"
          :placeholder="dataList.answer20"
          v-if="causeFlag10"
        />
        <div
          class="errortip"
          v-if="
            (emptyFlag && optionVal10 == '') ||
              (emptyFlag && causeFlag10 && inputVal10 == '')
          "
        >
          {{ queTip }}
        </div>
      </div>
      <div class="question_box">
        <div
          class="box_text"
          :style="
            (emptyFlag && recognizedMsg11 == '') ||
            (emptyFlag && improvedMsg11 == '')
              ? 'color: red'
              : 'color:#195693'
          "
        >
          11. {{ dataList.SD11 }}
        </div>
        <div class="box_div_textarea">
          <div class="message_tip">{{ dataList.answer21 }}</div>
          <van-field
            v-model="recognizedMsg11"
            rows="2"
            autosize
            type="textarea"
            :placeholder="dataList.answer20"
          />
          <div class="message_tip">{{ dataList.answer22 }}</div>
          <van-field
            v-model="improvedMsg11"
            rows="2"
            autosize
            type="textarea"
            :placeholder="dataList.answer20"
          />
        </div>
        <div
          class="errortip"
          v-if="
            (emptyFlag && recognizedMsg11 == '') ||
              (emptyFlag && improvedMsg11 == '')
          "
          style="margin-top:0.05rem"
        >
          {{ queTip }}
        </div>
      </div>
      <div class="question_box">
        <div
          class="box_text"
          :style="
            emptyFlag && optionVal12 == '' ? 'color: red' : 'color:#195693'
          "
        >
          12. {{ dataList.SD12 }}
        </div>
        <van-radio-group
          v-model="optionVal12"
          direction="horizontal"
          class="box_checkbox_group"
        >
          <van-radio
            v-for="(item, index) in dataList.answer12"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-radio
          >
        </van-radio-group>
        <div class="errortip" v-if="emptyFlag && optionVal12 == ''">
          {{ queTip }}
        </div>
      </div>
      <div class="question_box">
        <div
          class="box_text"
          :style="
            (emptyFlag && optionVal13 == '') ||
            (emptyFlag && causeFlag13 && inputVal13 == '')
              ? 'color: red'
              : 'color:#195693'
          "
        >
          13. {{ dataList.SD13 }}
        </div>
        <van-checkbox-group
          v-model="result13"
          class="box_checkbox_group"
          direction="horizontal"
          @change="checkboxChange(13, 'L')"
        >
          <van-checkbox
            v-for="(item, index) in dataList.answer13"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-checkbox
          >
        </van-checkbox-group>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal13"
          :placeholder="dataList.answer20"
          v-if="causeFlag13"
        />
        <div
          class="errortip"
          v-if="
            (emptyFlag && optionVal13 == '') ||
              (emptyFlag && causeFlag13 && inputVal13 == '')
          "
        >
          {{ queTip }}
        </div>
      </div>
      <div class="question_box">
        <div
          class="box_text"
          :style="
            (emptyFlag && optionVal14 == '') ||
            (emptyFlag && causeFlag14 && inputVal14 == '')
              ? 'color: red'
              : 'color:#195693'
          "
        >
          14. {{ dataList.SD14 }}
        </div>
        <van-checkbox-group
          v-model="result14"
          class="box_checkbox_group"
          direction="horizontal"
          @change="checkboxChange(14, 'O')"
        >
          <van-checkbox
            v-for="(item, index) in dataList.answer14"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-checkbox
          >
        </van-checkbox-group>
        <input
          type="text"
          class="box_dec"
          :placeholder="dataList.answer20"
          v-if="causeFlag14"
          v-model="inputVal14"
        />
        <div
          class="errortip"
          v-if="
            (emptyFlag && optionVal14 == '') ||
              (emptyFlag && causeFlag14 && inputVal14 == '')
          "
        >
          {{ queTip }}
        </div>
      </div>
      <div class="question_box">
        <div
          class="box_text"
          :style="
            (emptyFlag && optionVal15 == '') ||
            (emptyFlag && causeFlag15 && inputVal15 == '')
              ? 'color: red'
              : 'color:#195693'
          "
        >
          15. {{ dataList.SD15 }}
        </div>
        <van-checkbox-group
          v-model="result15"
          class="box_checkbox_group"
          direction="horizontal"
          @change="checkboxChange(15, 'R')"
        >
          <van-checkbox
            v-for="(item, index) in dataList.answer15"
            :key="index"
            :name="item.name"
            >{{ item.text }}</van-checkbox
          >
        </van-checkbox-group>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal15"
          :placeholder="dataList.answer20"
          v-if="causeFlag15"
        />
        <div
          class="errortip"
          v-if="
            (emptyFlag && optionVal15 == '') ||
              (emptyFlag && causeFlag15 && inputVal15 == '')
          "
        >
          {{ queTip }}
        </div>
      </div>
      <div class="question_box">
        <div
          class="box_text"
          :style="
            (emptyFlag && optionVal16 == '') || (emptyFlag && causeFlag16)
              ? 'color: red'
              : 'color:#195693'
          "
        >
          16. {{ dataList.SD16 }}
        </div>
        <van-checkbox-group
          v-model="result16"
          class="box_checkbox_group box_checkbox_group2"
          direction="horizontal"
          @change="checkboxChange(16, 'F')"
        >
          <van-checkbox
            v-for="(item, index) in dataList.answer16"
            :key="index"
            :name="item.name"
            v-if="
              item.parent == 'D'
                ? causeFlag16D
                : item.parent == 'E'
                ? causeFlag16E
                : true
            "
            :style="
              item.pad
                ? 'width:50%;box-sizing:border-box;padding-left:0.2rem'
                : ''
            "
            >{{ item.text }}
          </van-checkbox>
        </van-checkbox-group>
        <input
          type="text"
          class="box_dec"
          v-model="inputVal16"
          :placeholder="place16D"
        />

        <div
          class="errortip"
          v-if="(emptyFlag && optionVal16 == '') || (emptyFlag && causeFlag16)"
        >
          {{ queTip }}
        </div>
      </div>
      <div class="question_box question_box_nobor">
        <div class="box_div_textarea box_div_textarea2">
          <div class="box_tip">17.{{ dataList.SD17 }}</div>
          <van-field v-model="message17" rows="2" autosize type="textarea" />
        </div>
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
import { Dialog } from "vant";
export default {
  name: "Question1",
  data() {
    return {
      dataList: [],
      lanIdx: "",
      dialogText: "",
      confirmTxt: "",
      queTip: "",
      result1: [],
      causeFlag1: false,
      inputVal1: "",
      optionVal1: "",
      optionVal2: "",
      causeFlag2: false,
      answer2IptFlag: false,
      nullans2: false,
      causeFlag3: false,
      inputVal3: "",
      optionVal3: "",
      result4: [],
      causeFlag4: false,
      inputVal4: "",
      optionVal4: "",
      optionVal5: "",
      causeFlag5: false,
      answer5IptFlag: false,
      causeFlag6B: false,
      causeFlag6: false,
      inputVal6: "",
      optionVal6: "",
      activeIndex6: 6,
      activeVal6: "",
      optionVal7: "",
      causeFlag7: false,
      answer7IptFlag: false,
      result8: [],
      causeFlag8: false,
      inputVal8: "",
      optionVal8: "",
      result9: [],
      causeFlag9: false,
      inputVal9: "",
      optionVal9: "",
      causeFlag10: false,
      inputVal10: "",
      optionVal10: "",
      recognizedMsg11: "",
      improvedMsg11: "",
      optionVal12: "",
      result13: [],
      causeFlag13: false,
      inputVal13: "",
      optionVal13: "",
      result14: [],
      causeFlag14: false,
      inputVal14: "",
      optionVal14: "",
      result15: [],
      causeFlag15: false,
      inputVal15: "",
      optionVal15: "",
      result16: [],
      causeFlag16: false,
      causeFlag16D: false,
      causeFlag16E: false,
      place16D: "",
      place16E: "",
      result16D: [],
      inputVal16: "",
      inputVal16D: "",
      inputVal16E: "",
      optionVal16: "",
      message17: "",
      activeIcon: require("../assets/img/icon7.png"),
      inactiveIcon: require("../assets/img/icon6.png"),
      emptyFlag: false,
      tdIcon0: true,
      tdIcon1: true,
      tdIcon2: false,
      tdIcon3: false,
      tdIcon4: false,
      tdIcon5: true,
      indexArr5: [],
      indexArr2: []
    };
  },
  created() {
    this.lanIdx = this.$route.query.idx;
    if (this.$route.query.idx == 1) {
      this.dataList = list.cn;
      this.dialogText = list.cnDialog;
      this.confirmTxt = list.cnConfirm;
      this.queTip = list.cnQueTip;
      this.place16D = "请举例您常用的平台（非必填）";
    } else if (this.$route.query.idx == 2) {
      this.dataList = list.en;
      this.dialogText = list.enDialog;
      this.confirmTxt = list.enConfirm;
      this.queTip = list.enQueTip;
      this.place16D = "Please give examples";
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name == "Index") {
      this.$store.commit("noKeepAlive", "Question1");
      this.$store.commit("noKeepAlive", "PersonalInfo");
    }
    next();
  },
  methods: {
    lastStep() {
      this.$router.go(-1);
    },
    nextStep() {
      if (
        (this.result16.indexOf("D") != -1 &&
          this.result16.indexOf("D-a") == -1 &&
          this.result16.indexOf("D-b") == -1 &&
          this.result16.indexOf("D-c") == -1 &&
          this.result16.indexOf("D-d") == -1) ||
        (this.result16.indexOf("E") != -1 &&
          this.result16.indexOf("E-a") == -1 &&
          this.result16.indexOf("E-b") == -1 &&
          this.result16.indexOf("E-c") == -1 &&
          this.result16.indexOf("E-d") == -1 &&
          this.result16.indexOf("E-e") == -1 &&
          this.result16.indexOf("E-f") == -1)
      ) {
        this.emptyFlag = true;
        this.causeFlag16 = true;
      } else {
        this.causeFlag16 = false;
      }

      let optVal6 = this.optionVal6;
      if (this.causeFlag6B && !this.causeFlag6) {
        optVal6 = this.optionVal6 + "-" + this.activeVal6;
      }
      if (this.causeFlag6) {
        optVal6 =
          this.optionVal6 + "-" + this.activeVal6 + "-" + this.inputVal6;
      }
      let ans2Flag = false;
      let ans2Flagval = false;
      let optVal2 = "";
      ans2Flag = this.dataList.answer2.find(
        item => item.score == "" && item.ansFlag == true
      );
      ans2Flagval = this.dataList.answer2.find(item => {
        return item.iptFlag == true && item.iptVal == "";
      });

      if (ans2Flag || ans2Flagval) {
        this.causeFlag2 = true;
      } else {
        this.causeFlag2 = false;
      }
      console.log(optVal2);
      console.log("计算optVal2");
      if (!ans2Flag && !ans2Flagval) {
        this.dataList.answer2.map(item => {
          if (item.ansFlag == true) {
            optVal2 +=
              item.iptFlag == true
                ? item.score + "-" + item.iptVal
                : item.score;
          }
        });
      }

      let ans5Flag = false;
      let ans5Flagval = false;
      let optVal5 = "";
      ans5Flag = this.dataList.answer5.find(item => item.score == "");
      ans5Flagval = this.dataList.answer5.find(item => {
        return item.iptFlag == true && item.iptVal == "";
      });

      if (ans5Flag || ans5Flagval) {
        this.causeFlag5 = true;
      } else {
        this.causeFlag5 = false;
      }
      if (!ans5Flag && !ans5Flagval) {
        this.dataList.answer5.map(item => {
          optVal5 += item.iptFlag ? item.score + "-" + item.iptVal : item.score;
        });
      }
      let ans7Flag = false;
      let ans7Flagval = false;
      let optVal7 = "";
      ans7Flag = this.dataList.answer7.find(item => item.score == "");
      ans7Flagval = this.dataList.answer7.find(item => {
        return item.iptFlag == true && item.iptVal == "";
      });
      if (ans7Flag || ans7Flagval) {
        this.causeFlag7 = true;
      } else {
        this.causeFlag7 = false;
      }
      if (!ans7Flag && !ans7Flagval) {
        this.dataList.answer7.map(item => {
          optVal7 += item.iptFlag ? item.score + "-" + item.iptVal : item.score;
        });
      }
      if (
        this.optionVal1 == "" ||
        optVal2 == "" ||
        this.optionVal3 == "" ||
        this.optionVal4 == "" ||
        optVal5 == "" ||
        this.optionVal6 == "" ||
        optVal7 == "" ||
        this.optionVal8 == "" ||
        this.optionVal9 == "" ||
        this.optionVal10 == "" ||
        this.recognizedMsg11 == "" ||
        this.improvedMsg11 == "" ||
        this.optionVal12 == "" ||
        this.optionVal13 == "" ||
        this.optionVal14 == "" ||
        this.optionVal15 == "" ||
        this.optionVal16 == ""
      ) {
        this.emptyFlag = true;
        this.$dialog.alert({
          message: this.dialogText,
          confirmButtonText: this.confirmTxt
        });
        return;
      }

      if (
        (this.causeFlag1 && this.inputVal1 == "") ||
        (this.causeFlag2 && this.inputVal2 == "") ||
        (this.causeFlag3 && this.inputVal3 == "") ||
        (this.causeFlag4 && this.inputVal4 == "") ||
        (this.causeFlag5 && this.inputVal5 == "") ||
        (this.causeFlag6B && this.activeVal6 == "") ||
        (this.causeFlag6 && this.inputVal6 == "") ||
        (this.causeFlag7 && this.inputVal7 == "") ||
        (this.causeFlag8 && this.inputVal8 == "") ||
        (this.causeFlag9 && this.inputVal9 == "") ||
        (this.causeFlag10 && this.inputVal10 == "") ||
        (this.causeFlag13 && this.inputVal13 == "") ||
        (this.causeFlag14 && this.inputVal14 == "") ||
        (this.causeFlag15 && this.inputVal15 == "") ||
        this.causeFlag16
      ) {
        this.emptyFlag = true;
        this.$dialog.alert({
          message: this.dialogText,
          confirmButtonText: this.confirmTxt
        });
        return;
      }

      var val1 = "",
        val2 = "",
        val3 = "",
        val4 = "",
        val5 = "",
        val6 = "",
        val7 = "",
        val8 = "",
        val9 = "",
        val10 = "",
        val11 = "",
        val12 = "",
        val13 = "",
        val14 = "",
        val15 = "",
        val16 = "",
        val17 = "";
      val1 = this.causeFlag1
        ? this.optionVal1 + "-" + this.inputVal1
        : this.optionVal1;
      val2 = optVal2;
      val3 = this.causeFlag3
        ? this.optionVal3 + "-" + this.inputVal3
        : this.optionVal3;
      val4 = this.causeFlag4
        ? this.optionVal4 + "-" + this.inputVal4
        : this.optionVal4;
      val5 = optVal5;
      val6 = optVal6;
      val7 = optVal7;
      val8 = this.causeFlag8
        ? this.optionVal8 + "-" + this.inputVal8
        : this.optionVal8;
      val9 = this.causeFlag9
        ? this.optionVal9 + "-" + this.inputVal9
        : this.optionVal9;
      val10 = this.causeFlag10
        ? this.optionVal10 + "-" + this.inputVal10
        : this.optionVal10;
      val11 = this.recognizedMsg11 + "-" + this.improvedMsg11;
      val12 = this.optionVal12;
      val13 = this.causeFlag13
        ? this.optionVal13 + "-" + this.inputVal13
        : this.optionVal13;
      val14 = this.causeFlag14
        ? this.optionVal14 + "-" + this.inputVal14
        : this.optionVal14;
      val15 = this.causeFlag15
        ? this.optionVal15 + "-" + this.inputVal15
        : this.optionVal15;
      val16 =
        this.inputVal16 != ""
          ? this.optionVal16 + "-" + this.inputVal16
          : this.optionVal16;
      val17 = this.message17;
      var arr = [
        val1,
        val2,
        val3,
        val4,
        val5,
        val6,
        val7,
        val8,
        val9,
        val10,
        val11,
        val12,
        val13,
        val14,
        val15,
        val16,
        val17
      ];

      console.log("optionVal1", this.optionVal1);
      console.log("inputVal1", this.inputVal1);
      console.log("val1", val1);
      console.log("arr", arr);

      this.$router.push({
        path: "/personalInfo",
        query: { idx: this.lanIdx, result: JSON.stringify(arr) }
      });
    },
    checkboxChange(idx, option) {
      var arr = "result" + idx;
      var onflag = "causeFlag" + idx;
      var opval = "optionVal" + idx;
      var iptval = "inputVal" + idx;
      if (this[arr].indexOf(option) != -1) {
        this[onflag] = true;
      } else {
        this[onflag] = false;
        this[iptval] = "";
      }
      if (idx == "16") {
        if (this[arr].indexOf("D") != -1) {
          this.causeFlag16D = true;
        } else {
          this.causeFlag16D = false;
        }
        if (this[arr].indexOf("E") != -1) {
          this.causeFlag16E = true;
        } else {
          this.causeFlag16E = false;
        }
      }
      if (idx == 1) {
        this.dataList.answer2.map(item => {
          item.ansFlag = false;
          this[arr].map(itm => {
            if (item.name == itm) {
              item.ansFlag = true;
            }
          });
          if (item.ansFlag == false) {
            item.iptFlag = false;
          }
          // return item;
        });
      }
      this.nullans2 = this.dataList.answer2.find(item => item.ansFlag == true);
      this[opval] = this[arr].join("");
    },
    radioChange(idx, option, flag) {
      var onflag = "causeFlag" + idx;
      var opval = "optionVal" + idx;
      var iptval = "inputVal" + idx;

      if (this[opval] == option) {
        if (flag) {
          this[flag] = true;
          this[iptval] = "";
          this.activeIndex6 = 6;
          return;
        }
        this[onflag] = true;
      } else {
        this[onflag] = false;
        this[iptval] = "";
        this[flag] = false;
      }
    },
    chooseLevel(idx, num) {
      var onindex = "activeIndex" + num;
      var onflag = "causeFlag" + num;
      var opval = "activeVal" + num;
      var iptval = "inputVal" + num;
      this[onindex] = idx;
      this[opval] = idx;
      if (idx == 0) {
        this[opval] = "?";
      }
      if (idx == 3 || idx == 2 || idx == 1) {
        this[onflag] = true;
      } else {
        this[onflag] = false;
        this[iptval] = "";
      }
    },
    chooseLevelTab(text, score, ansIndex, ans2Index, ansName) {
      this.dataList[ansName][ansIndex].acindex = ans2Index;
      this.dataList[ansName][ansIndex].score = score;
      var iptFlag = ansName + "IptFlag";
      if (score == 3 || score == 2 || score == 1) {
        this.dataList[ansName][ansIndex].iptFlag = true;
        this.dataList[ansName][ansIndex].iptVal = "";
      } else {
        this.dataList[ansName][ansIndex].iptFlag = false;
      }
      this[iptFlag] = this.dataList[ansName].find(item => item.iptFlag == true);
    }
  }
};
</script>
<style>
@import url("../assets/css/reset.css");
</style>
<style scope>
#question_wrap {
  width: 100%;
  height: 100%;
  background: #f3f3f3 url(../assets/img/bg3.png) no-repeat top center;
  background-size: 100% 100%;
  padding-top: 0.5rem;
}
.question_content {
  width: 95%;
  box-sizing: border-box;
  margin: 0 auto;
  border: 0.03rem solid #195693;
  position: relative;
  padding-bottom: 0.1rem;
}
.question_box {
  padding: 0.1rem 0 0.15rem;
  border-bottom: 0.01rem dashed #00569c;
}
.question_box.question_box_nobor {
  border: none;
}
.box_text {
  width: 2.8rem;
  font-size: 0.14rem;
  margin: 0.1rem auto;
  color: #195693;
  line-height: 0.2rem;
}
.box_checkbox_group {
  width: 3.1rem;
  margin: 0 auto;
}
.img-icon {
  width: 0.18rem;
  height: 0.18rem;
}
.box_checkbox_group .van-checkbox,
.box_checkbox_group .van-radio {
  -webkit-align-items: stretch;
  align-items: stretch;
}
.box_checkbox_group .van-checkbox--horizontal,
.box_checkbox_group .van-radio--horizontal {
  width: 50%;
  margin: 0 0 0.12rem;
}
.box_checkbox_group2 .van-checkbox--horizontal,
.box_checkbox_group2 .van-radio--horizontal {
  width: 100%;
}
.box_checkbox_group .van-checkbox__icon .van-icon,
.box_checkbox_group .van-radio__icon .van-icon {
  width: 0.18rem;
  height: 0.18rem;
  background: url(../assets/img/icon6.png) no-repeat center;
  background-size: 100%;
  border: none;
  font-size: 0;
}

.box_checkbox_group .van-checkbox__icon--checked .van-icon,
.box_checkbox_group .van-radio__icon--checked .van-icon {
  background: url(../assets/img/icon7.png) no-repeat center;
  background-size: 100%;
}
.box_checkbox_group .van-checkbox__label,
.box_checkbox_group .van-radio__label {
  font-size: 0.13rem;
  color: #001a2f;
  margin-left: 0.05rem;
}
.box_dec {
  display: block;
  width: 3rem;
  height: 0.34rem;
  line-height: 0.34rem;
  font-size: 0.14rem;
  color: #00569c;
  margin: 0 auto 0.05rem;
  border: none;
  background: url(../assets/img/icon8.png) no-repeat;
  background-size: 100%;
  text-indent: 0.1rem;
}
.text_underline {
  text-decoration: underline;
}
.box_div {
  width: 3.3rem;
  display: flex;
  margin: 0 auto 0.1rem;
  padding-top: 0.1rem;
}
.box_options {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 0.13rem;
  color: #001a2f;
}
.box_options_on {
  color: #005aff;
}
.box_img {
  width: 0.35rem;
  height: 0.3rem;
  margin-bottom: 0.1rem;
}
.box_em {
  text-align: center;

  line-height: 0.15rem;
}

.box_div_textarea {
  width: 3rem;
  min-height: 1.5rem;
  height: auto;
  margin: 0 auto;
  padding-top: 0.2rem;
  border: 0.01rem solid #195693;
  border-radius: 0.04rem;
  background: #fff;
  box-shadow: 0.05rem 0.05rem 0.05rem #f8f0d5;
}
.box_div_textarea .van-cell {
  background: none;
}
.box_div_textarea .van-field__label {
  color: #00569c;
  margin-right: 0;
  width: 0.7rem;
}
.box_div_textarea2 {
  margin-top: 0.1rem;
  position: relative;
}

.box_tip {
  padding-left: 0.15rem;
  color: #00569c;
  font-size: 0.14rem;
}
.bottom_btn {
  width: 3rem;
  height: 0.45rem;
  margin: 0.2rem auto;
}

.question1 .left_btn {
  width: 1.25rem;
  height: 0.36rem;
  float: left;
  background: url(../assets/img/last.png) no-repeat center;
  background-size: 100% 100%;
}
.question1 .left_btn1 {
  width: 1.25rem;
  height: 0.36rem;
  float: left;
  background: url(../assets/img/last1.png) no-repeat center;
  background-size: 100% 100%;
}
.question1 .right_btn {
  width: 1.25rem;
  height: 0.36rem;
  float: right;
  background: url(../assets/img/next.png) no-repeat center;
  background-size: 100% 100%;
}
.question1 .right_btn1 {
  width: 1.25rem;
  height: 0.36rem;
  float: right;
  background: url(../assets/img/next1.png) no-repeat center;
  background-size: 100% 100%;
}
.van-dialog__message {
  font-size: 0.16rem;
}
.van-dialog__confirm,
.van-dialog__confirm:active {
  color: #0189f9;
}
.message_tip {
  padding: 0 0.16rem;
  color: #00569c;
  font-size: 0.14rem;
}
.box_div_textarea .van-cell::after {
  border-bottom: none;
}

.errortip {
  width: 3rem;
  margin: 0 auto;
  color: red;
  font-size: 0.14rem;
}
.icon7_img {
  width: 0.19rem;
  height: 0.19rem;
  margin: auto;
  display: block;
}
.tab_class {
  border: 0.01rem solid #195693;
  margin: 0 auto;
  background: #fff;
}
.tab_class td {
  height: 0.3rem;
}
.p-check {
  font-size: 0.13rem;
  padding-bottom: 0.1rem;
  padding-left: 0.24rem;
}
.p-tip {
  width: 3rem;
  color: rgb(25, 86, 147);
  margin: 0.1rem auto;
  font-size: 0.14rem;
}
.td1-style {
  width: 0.8rem;
}
</style>
