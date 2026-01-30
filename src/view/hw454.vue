<template>
  <div id="app">
    <el-form :model="TXTForm" ref="TXTForm" label-width="100px">
      <h1>国内271/251</h1>
      <div>
        <el-form-item label="设计理念" prop="designInspiration">
          <el-input
            v-model="TXTForm.designInspiration"
            style="width: 600px"
            placeholder="请输入设计理念"
          ></el-input
        ></el-form-item>
      </div>
      <el-form-item label="设计师" prop="designer">
        <el-select
          style="width: 300px"
          v-model="TXTForm.designer"
          placeholder="请选择平台账号/设计师"
        >
          <el-option
            v-for="item in designerOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <!-- 基础模板模块 -->
      <div>
        <el-form-item label="中文名称" prop="dialName">
          <el-input
            v-model="TXTForm.dialName"
            style="width: 300px"
            placeholder="请输入中文名称"
          ></el-input
        ></el-form-item>
        <el-form-item label="英文名称" prop="dialNameEn">
          <el-input
            v-model="TXTForm.dialNameEn"
            style="width: 300px"
            placeholder="请输入英文名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="设计亮点" prop="designHighlights">
          <el-input
            v-model="TXTForm.designHighlights"
            style="width: 600px"
            placeholder="请输入设计亮点"
          ></el-input
        ></el-form-item>

        <el-form-item label="功能选项" prop="functionOptions">
          <div style="font-size: 14px; color: #606266; line-height: 40px">
            <div>PS:</div>
            <div>1、如果同时存在跳转功能与图标跳转中，只需选择跳转功能</div>
            <div>
              2、如果只存在进度条不存在数据（例如电量存在进度条但是不存在电量数字），只选择电量进度条
            </div>
          </div>
          <el-checkbox-group v-model="TXTForm.functionOptions1">
            <el-checkbox label="时间" name="time"></el-checkbox>
            <el-checkbox label="时辰" name="Hours"></el-checkbox>
            <el-checkbox label="上/下午" name="ampm"></el-checkbox>
            <el-checkbox label="日期" name="date"></el-checkbox>
            <el-checkbox label="星期" name="week"></el-checkbox>
            <el-checkbox label="农历" name="Chinese_Calendar"></el-checkbox>
            <el-checkbox label="信息" name="ms"></el-checkbox>
            <el-checkbox label="电量" name="power"></el-checkbox>
            <el-checkbox label="电量进度条" name="power"></el-checkbox>
            <el-checkbox label="天气" name="weather"></el-checkbox>
            <el-checkbox label="温度" name="Temperature"></el-checkbox>
            <el-checkbox
              label="最高/低温"
              name="LowTemperature/HighTemperature"
            ></el-checkbox>
            <el-checkbox label="湿度" name="Humidity"></el-checkbox>
            <el-checkbox label="空气质量" name="Air_quality"></el-checkbox>
            <el-checkbox
              label="海平面气压"
              name="Sea_level pressure"
            ></el-checkbox>
            <el-checkbox label="步数" name="step"></el-checkbox>
            <el-checkbox
              label="步数目标"
              name="Step_count_target"
            ></el-checkbox>
            <el-checkbox
              label="步数完成进度"
              name="Step_completion_progress"
            ></el-checkbox>
            <el-checkbox label="心率" name="Heart_rate"></el-checkbox>
            <el-checkbox
              label="心率区间"
              name="Hart_rate_interval"
            ></el-checkbox>
            <el-checkbox label="卡路里" name="Calorie"></el-checkbox>
            <el-checkbox label="卡路里目标" name="Calorie_target"></el-checkbox>
            <el-checkbox
              label="卡路里完成度"
              name="Calorie_completion_degree"
            ></el-checkbox>
            <el-checkbox label="距离" name="Distance"></el-checkbox>
            <el-checkbox label="站立次数" name="Number_of_stands"></el-checkbox>
            <el-checkbox label="站立目标" name="Standing_target"></el-checkbox>
            <el-checkbox
              label="站立完成进度"
              name="Stand_to_complete_the_progress"
            ></el-checkbox>
            <el-checkbox
              label="锻炼时长"
              name="Exercise_duration"
            ></el-checkbox>
            <el-checkbox label="锻炼目标" name="Exercise_goals"></el-checkbox>
            <el-checkbox
              label="锻炼完成度"
              name="Exercise_completion_degree"
            ></el-checkbox>
            <el-checkbox label="血氧" name="Blood_oxygen"></el-checkbox>
            <el-checkbox label="压力" name="Pressure"></el-checkbox>
            <el-checkbox label="睡眠时长" name="Sleep_duration"></el-checkbox>
            <el-checkbox label="睡眠目标" name="Sleep_goal"></el-checkbox>
            <el-checkbox
              label="睡眠完成度"
              name="Sleep_completion_degree"
            ></el-checkbox>
            <el-checkbox label="日出/日落" name="Sunrise/Sunset"></el-checkbox>
            <el-checkbox label="外圈文字跳转" name="WordJump"></el-checkbox>
            <el-checkbox label="微信支付" name="Wechat_Pay"></el-checkbox>
            <el-checkbox label="支付宝" name="Alipay"></el-checkbox>
            <el-checkbox
              label="呼吸训练"
              name="Breathing_training"
            ></el-checkbox>
            <el-checkbox label="睡眠" name="Sleep"></el-checkbox>
            <el-checkbox label="血压" name="Blood_pressure"></el-checkbox>
            <el-checkbox label="运动" name="Sports"></el-checkbox>
            <el-checkbox label="音乐" name="Music"></el-checkbox>
            <el-checkbox label="设置" name="Settings"></el-checkbox>
            <el-checkbox label="指南针" name="Compass"></el-checkbox>
            <el-checkbox label="日程" name="Schedule"></el-checkbox>
            <el-checkbox label="运动记录" name="Sports_record"></el-checkbox>
            <el-checkbox label="秒表" name="Stopwatch"></el-checkbox>
            <el-checkbox label="电话" name="Telephone"></el-checkbox>
            <el-checkbox label="倒计时" name="Countdown"></el-checkbox>
            <el-checkbox label="闹钟" name="Alarm_clock"></el-checkbox>
            <el-checkbox label="录音机" name="Tape_recorder"></el-checkbox>
            <el-checkbox label="气压计" name="Barometer"></el-checkbox>
            <el-checkbox
              label="常用联系人"
              name="Common_contacts"
            ></el-checkbox>
            <el-checkbox label="日历" name="calendar"></el-checkbox>
          </el-checkbox-group>
          <div style="font-size: 14px; color: #606266; line-height: 40px">
            换图功能：
          </div>
          <el-checkbox-group
            v-model="TXTForm.functionOptions4"
            @change="setChange(TXTForm)"
          >
            <el-checkbox label="长按编辑" name="user_change"></el-checkbox>
            <el-checkbox label="压力" name="pressure_change"></el-checkbox>
            <el-checkbox label="时辰" name="hour_change"></el-checkbox>
            <el-checkbox label="星期" name="week"></el-checkbox>
            <el-checkbox label="上下午" name="ampm"></el-checkbox>
          </el-checkbox-group>
          <!-- 长按编辑区间 -->
          <div v-if="TXTForm.changeControl0">
            <div>长按编辑可切换的图片数量：</div>
            <div
              style="
                display: inline-block;
                margin-right: 20px;
                margin-bottom: 10px;
              "
            >
              <el-input-number
                v-model="TXTForm.changeRulesUser"
                :min="1"
                :max="10"
              ></el-input-number>
            </div>
          </div>
          <!-- 时间区间 -->
          <div v-if="TXTForm.changeControl1">
            <div>时间段区间选择：</div>
            <div
              v-for="(x, i) in TXTForm.changeRulesTime"
              :key="i"
              style="
                display: inline-block;
                margin-right: 20px;
                margin-bottom: 10px;
              "
            >
              <el-select
                style="width: 150px"
                v-model="x.min"
                placeholder="请选择区间"
              >
                <el-option
                  v-for="item in timeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
              ><span style="margin-left: 15px; margin-right: 15px">~</span>
              <el-select
                style="width: 150px"
                v-model="x.max"
                placeholder="请选择区间"
              >
                <el-option
                  v-for="item in timeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div style="display: inline-block">
              <el-button
                type="success"
                class="el-icon-plus"
                circle
                @click="addTimeChange(TXTForm)"
                v-if="TXTForm.changeRulesTime.length < 4"
              ></el-button>
              <el-button
                type="info"
                class="el-icon-minus"
                circle
                @click="delTimeChange(TXTForm)"
                v-if="TXTForm.changeRulesTime.length > 1"
              ></el-button>
            </div>
          </div>
          <!-- 压力区间 -->
          <div v-if="TXTForm.changeControl2">
            <div>压力区间选择：</div>
            <div
              v-for="(x, i) in TXTForm.changeRulesPressure"
              :key="i"
              style="
                display: inline-block;
                margin-right: 20px;
                margin-bottom: 10px;
              "
            >
              <el-input-number
                v-model="x.min"
                :min="0"
                :max="100"
              ></el-input-number
              ><span style="margin-left: 15px; margin-right: 15px">~</span>
              <el-input-number
                v-model="x.max"
                :min="0"
                :max="100"
              ></el-input-number>
            </div>
            <div style="display: inline-block">
              <el-button
                type="success"
                class="el-icon-plus"
                circle
                @click="addPressureChange(TXTForm)"
                v-if="TXTForm.changeRulesPressure.length < 10"
              ></el-button>
              <el-button
                type="info"
                class="el-icon-minus"
                circle
                @click="delPressureChange(TXTForm)"
                v-if="TXTForm.changeRulesPressure.length > 1"
              ></el-button>
            </div>
          </div>
          <!-- 时辰区间 -->
          <div v-if="TXTForm.changeControl3">
            <div>时辰区间选择：</div>
            <div
              v-for="(x, i) in TXTForm.changeRulesHour"
              :key="i"
              style="
                display: inline-block;
                margin-right: 20px;
                margin-bottom: 10px;
              "
            >
              <el-select
                style="width: 150px"
                v-model="x.min"
                placeholder="请选择区间"
              >
                <el-option
                  v-for="item in hourOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
              ><span style="margin-left: 15px; margin-right: 15px">~</span>
              <el-select
                style="width: 150px"
                v-model="x.max"
                placeholder="请选择区间"
              >
                <el-option
                  v-for="item in hourOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div style="display: inline-block">
              <el-button
                type="success"
                class="el-icon-plus"
                circle
                @click="addHourChange(TXTForm)"
                v-if="TXTForm.changeRulesHour.length < 12"
              ></el-button>
              <el-button
                type="info"
                class="el-icon-minus"
                circle
                @click="delHourChange(TXTForm)"
                v-if="TXTForm.changeRulesHour.length > 1"
              ></el-button>
            </div>
          </div>
          <!-- 星期区间 -->
          <div v-if="TXTForm.changeControl4">
            <div>星期区间选择：</div>
            <div
              v-for="(x, i) in TXTForm.changeRulesWeek"
              :key="i"
              style="
                display: inline-block;
                margin-right: 20px;
                margin-bottom: 10px;
              "
            >
              <el-select
                style="width: 150px"
                v-model="x.min"
                placeholder="请选择区间"
              >
                <el-option
                  v-for="item in weekOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
              ><span style="margin-left: 15px; margin-right: 15px">~</span>
              <el-select
                style="width: 150px"
                v-model="x.max"
                placeholder="请选择区间"
              >
                <el-option
                  v-for="item in weekOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div style="display: inline-block">
              <el-button
                type="success"
                class="el-icon-plus"
                circle
                @click="addWeekChange(TXTForm)"
                v-if="TXTForm.changeRulesWeek.length < 7"
              ></el-button>
              <el-button
                type="info"
                class="el-icon-minus"
                circle
                @click="delWeekChange(TXTForm)"
                v-if="TXTForm.changeRulesWeek.length > 1"
              ></el-button>
            </div>
          </div>
        </el-form-item>
      </div>
      <!-- 导出按钮 -->
      <el-form-item>
        <div style="text-align: center">
          <el-button type="primary" @click="importForm">保存</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Hw",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // 设计师列表
      designerOptions: [
        { value: "以品字库", label: "以品字库" },
        { value: "三尺设计", label: "三尺设计" },
        { value: "制造家", label: "制造家" },
        { value: "猫里", label: "猫里" },
      ],
      // 时间段列表
      timeOptions: [
        { value: "凌晨", label: "凌晨" },
        { value: "黎明", label: "黎明" },
        { value: "清晨", label: "清晨" },
        { value: "上午", label: "上午" },
        { value: "中午", label: "中午" },
        { value: "下午", label: "下午" },
        { value: "傍晚", label: "傍晚" },
        { value: "黄昏", label: "黄昏" },
        { value: "晚上", label: "晚上" },
      ],
      // 时辰列表
      hourOptions: [
        { value: "子时", label: "子时23:00-01:00" },
        { value: "丑时", label: "丑时01:00-03:00" },
        { value: "寅时", label: "寅时03:00-05:00" },
        { value: "卯时", label: "卯时05:00-07:00" },
        { value: "辰时", label: "辰时07:00-09:00" },
        { value: "巳时", label: "巳时09:00-11:00" },
        { value: "午时", label: "午时11:00-13:00" },
        { value: "未时", label: "未时13:00-15:00" },
        { value: "申时", label: "申时15:00-17:00" },
        { value: "酉时", label: "酉时17:00-19:00" },
        { value: "戌时", label: "戌时19:00-21:00" },
        { value: "亥时", label: "亥时21:00-23:00" },
      ],
      // 星期列表
      weekOptions: [
        { value: "周一", label: "周一" },
        { value: "周二", label: "周二" },
        { value: "周三", label: "周三" },
        { value: "周四", label: "周四" },
        { value: "周五", label: "周五" },
        { value: "周六", label: "周六" },
        { value: "周日", label: "周日" },
      ],
      // 需制作型号
      sizeOptions: [],
      sizes: [],
      // 表盘信息
      TXTForm: {
        designer: "",
        dialName: "",
        dialNameEn: "",
        designHighlights: "",
        designInspiration: "",
        functionOptions1: [],
        functionOptions4: [],
        changeControl0: false,
        changeControl1: false,
        changeControl2: false,
        changeControl3: false,
        changeControl4: false,
        changeRulesUser: 1,
        changeRulesTime: [{ min: "凌晨", max: "凌晨" }],
        changeRulesPressure: [{ min: 0, max: 0 }],
        changeRulesHour: [{ min: "子时", max: "子时" }],
        changeRulesWeek: [{ min: "周日", max: "周日" }],
        changeRulesAmpm: false,
        changeRulesWeather: false,
      },
      // 总数据整理
      formContent: {
        designer: null,
        designInspiration: null,
        designInspirationEN: null,
        contentList: {},
      },
      // 校验内容
      temp: "",
      tempEn: "",
      // txt文案内容
      txtcontent: "",
    };
  },
  created() {},
  methods: {
    // 切换规则
    setChange(Form) {
      Form.changeControl0 = Form.functionOptions4.includes("长按编辑");
      Form.changeControl2 = Form.functionOptions4.includes("压力");
      Form.changeControl3 = Form.functionOptions4.includes("时辰");
      Form.changeControl4 = Form.functionOptions4.includes("星期");
      if (Form.changeControl0 == true) {
        console.log();
      } else {
        Form.changeRulesUser = 1;
      }
      if (Form.changeControl1 == true) {
        console.log();
      } else {
        Form.changeRulesTime = [{ min: "凌晨", max: "凌晨" }];
      }
      if (Form.changeControl2 == true) {
        console.log();
      } else {
        Form.changeRulesPressure = [{ min: 0, max: 0 }];
      }
      if (Form.changeControl3 == true) {
        console.log();
      } else {
        Form.changeRulesHour = [{ min: "子时", max: "子时" }];
      }
      if (Form.changeControl4 == true) {
        console.log();
      } else {
        Form.changeRulesWeek = [{ min: "周日", max: "周日" }];
      }
    },
    // 时间段区间控制
    addTimeChange(Form) {
      let obj = {
        group: Form.changeRulesTime.length + 1,
        min: "凌晨",
        max: "凌晨",
      };
      Form.changeRulesTime.push(obj);
    },
    delTimeChange(Form) {
      Form.changeRulesTime.splice(Form.changeRulesTime.length - 1, 1);
    },
    // 压力区间控制
    addPressureChange(Form) {
      let obj = {
        group: Form.changeRulesPressure.length + 1,
        min: 0,
        max: 0,
      };
      Form.changeRulesPressure.push(obj);
    },
    delPressureChange(Form) {
      Form.changeRulesPressure.splice(Form.changeRulesPressure.length - 1, 1);
    },
    // 时辰区间控制
    addHourChange(Form) {
      let obj = {
        group: Form.changeRulesHour.length + 1,
        min: "凌晨",
        max: "凌晨",
      };
      Form.changeRulesHour.push(obj);
    },
    delHourChange(Form) {
      Form.changeRulesHour.splice(Form.changeRulesHour.length - 1, 1);
    },
    // 星期区间控制
    addWeekChange(Form) {
      let obj = {
        group: Form.changeRulesWeek.length + 1,
        min: "周一",
        max: "周一",
      };
      Form.changeRulesWeek.push(obj);
    },
    delWeekChange(Form) {
      Form.changeRulesWeek.splice(Form.changeRulesWeek.length - 1, 1);
    },
    // 导出
    importForm() {
      this.formContent.contentList = {};
      this.formContent.designer = this.TXTForm.designer;
      this.formContent.designInspiration = this.TXTForm.designInspiration;
      this.translateToEnglishInspiration(this.formContent.designInspiration);
      let obj = {
        dialName: this.TXTForm.dialName,
        dialNameEn: this.TXTForm.dialNameEn,
        designHighlights: this.TXTForm.designHighlights,
        functionOptions1: this.TXTForm.functionOptions1,
        functionOptions4: this.TXTForm.functionOptions4,
        changeControl0: this.TXTForm.changeControl0,
        changeControl1: this.TXTForm.changeControl1,
        changeControl2: this.TXTForm.changeControl2,
        changeControl3: this.TXTForm.changeControl3,
        changeControl4: this.TXTForm.changeControl4,
        changeRulesUser: this.TXTForm.changeRulesUser,
        changeRulesTime: this.TXTForm.changeRulesTime,
        changeRulesPressure: this.TXTForm.changeRulesPressure,
        changeRulesHour: this.TXTForm.changeRulesHour,
        changeRulesWeek: this.TXTForm.changeRulesWeek,
        changeRulesAmpm: this.TXTForm.changeRulesWeek,
        changeRulesWeather: this.TXTForm.changeRulesWeek,
      };
      this.formContent.contentList = obj;
      // 整理txt字符串
      setTimeout(() => {
        this.getTxtContent(this.formContent);
      }, 700);
    },
    // 获取txt内容
    getTxtContent(content) {
      //   console.log(content);
      // 基础信息
      this.txtcontent =
        "中文名：" +
        content.contentList.dialName +
        "\n英文名：" +
        content.contentList.dialNameEn +
        "\n开发者：" +
        content.designer +
        "\n设计师：" +
        content.designer +
        "\n\n\n设计理念：" +
        content.designInspiration +
        "\n英文设计理念：" +
        content.designInspirationEN;
      // 尺寸
      this.txtcontent = this.txtcontent + "\n\n\n【国内271/251】：\n";
      // 亮点
      this.temp = "亮点：" + content.contentList.designHighlights + "\n";
      // 功能
      this.temp = this.temp + "功能介绍：";
      for (let o = 0; o < content.contentList.functionOptions1.length; o++) {
        this.temp = this.temp + content.contentList.functionOptions1[o] + "、";
      }
      this.temp = this.temp.slice(0, -1) + "；\n";
      // 切换规则的添加
      if (content.contentList.functionOptions4.length > 0) {
        this.temp = this.temp + "切换规则：";
        if (content.contentList.functionOptions4.includes("长按编辑")) {
          this.temp =
            this.temp +
            "共" +
            content.contentList.changeRulesUser +
            "张图任意切换，点击空白处切换" +
            "；\n";
        }
        if (content.contentList.functionOptions4.includes("压力")) {
          this.temp =
            this.temp +
            "共" +
            (content.contentList.changeRulesPressure.length + 1) +
            "张图跟随压力变化而变换" +
            "；\n";
        }
        if (content.contentList.functionOptions4.includes("时辰")) {
          this.temp =
            this.temp +
            "共" +
            content.contentList.changeRulesPressure.length +
            "张图跟随时辰变化而变换" +
            "；\n";
        }
        if (content.contentList.functionOptions4.includes("星期")) {
          this.temp = this.temp + "根据星期进行换图功能，";
          for (let o = 0; o < content.contentList.changeRulesWeek.length; o++) {
            this.temp =
              this.temp +
              content.contentList.changeRulesWeek[o].min +
              "到" +
              content.contentList.changeRulesWeek[o].max +
              "为一张图，";
          }
          this.temp = this.temp.slice(0, -1);
          this.temp =
            this.temp +
            "共" +
            content.contentList.changeRulesWeek.length +
            "张图" +
            "；\n";
        }
        if (content.contentList.functionOptions4.includes("上下午")) {
          this.temp =
            this.temp + "根据上下午进行背景的切换，共2张背景图" + "；\n";
        }
      }
      // 备注
      this.temp =
        this.temp +
        "备注：跳转功能依赖于手表版本；以表盘实际应用效果为准。" +
        "\n";
      // 英文尺寸
      this.translateToEnglishTxt(this.temp);

      // this.exportText(this.txtcontent);
    },
    // 下载txt
    exportText(txt) {
      const textToExport = txt; // 你的文本内容
      const blob = new Blob([textToExport], {
        type: "text/plain;charset=utf-8;",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "测试文本.txt"; // 设置下载文件的名称
      link.click(); // 模拟点击事件以触发下载
      URL.revokeObjectURL(link.href); // 清理内存
    },

    // 翻译灵感为英文
    async translateToEnglishInspiration(txt) {
      try {
        const response = await axios.get(
          "https://translate.googleapis.com/translate_a/single",
          {
            params: {
              client: "gtx",
              sl: "zh-CN", // 源语言代码，例如中文是zh-CN
              tl: "en", // 目标语言代码，例如英文是en
              dt: "t", // 数据类型，'t'表示文本翻译
              q: txt, // 要翻译的文本
            },
          }
        );
        this.formContent.designInspirationEN = response.data[0][0][0];
      } catch (error) {
        console.error("翻译失败:", error);
      }
    },
    // 翻译整体文案
    async translateToEnglishTxt(txt) {
      try {
        const response = await axios.get(
          "https://translate.googleapis.com/translate_a/single",
          {
            params: {
              client: "gtx",
              sl: "zh-CN", // 源语言代码，例如中文是zh-CN
              tl: "en", // 目标语言代码，例如英文是en
              dt: "t", // 数据类型，'t'表示文本翻译
              q: txt, // 要翻译的文本
            },
          }
        );
        for (let i = 0; i < response.data[0].length; i++) {
          this.tempEn = this.tempEn + response.data[0][i][0];
        }
        this.txtcontent = this.txtcontent + this.temp + this.tempEn;
        this.$emit("value271251", this.txtcontent);
      } catch (error) {
        console.error("翻译失败:", error);
      }
    },
    // 翻译为英文
    async translateToEnglish(txt) {
      try {
        const response = await axios.get(
          "https://translate.googleapis.com/translate_a/single",
          {
            params: {
              client: "gtx",
              sl: "zh-CN", // 源语言代码，例如中文是zh-CN
              tl: "en", // 目标语言代码，例如英文是en
              dt: "t", // 数据类型，'t'表示文本翻译
              q: txt, // 要翻译的文本
            },
          }
        );
        return response.data[0][0][0];
      } catch (error) {
        console.error("翻译失败:", error);
      }
    },
    // 翻译为中文
    async translateToChinese(txt) {
      try {
        const response = await axios.get(
          "https://translate.googleapis.com/translate_a/single",
          {
            params: {
              client: "gtx",
              sl: "en", // 源语言代码，例如中文是zh-CN
              tl: "zh-CN", // 目标语言代码，例如英文是en
              dt: "t", // 数据类型，'t'表示文本翻译
              q: txt, // 要翻译的文本
            },
          }
        );
        return response.data[0][0][0];
      } catch (error) {
        console.error("翻译失败:", error);
      }
    },
  },
};
</script>

<style>
.sizeChangeBox {
  position: absolute;
  top: 100px;
  left: 1200px;
}
.el-checkbox-group {
  max-width: 1000px !important;
}
</style>
