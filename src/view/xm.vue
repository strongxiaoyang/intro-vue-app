<template>
  <div id="app">
    <el-form :model="TXTForm" ref="TXTForm" label-width="100px">
      <h1>通用模块</h1>
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
        <el-form-item label="表盘名称" prop="dialName">
          <el-input
            v-model="TXTForm.dialName"
            style="width: 300px"
            placeholder="请输入表盘名称"
          ></el-input
        ></el-form-item>
        <el-form-item label="设计亮点" prop="designHighlights">
          <el-input
            v-model="TXTForm.designHighlights"
            style="width: 600px"
            placeholder="请输入设计亮点"
          ></el-input
        ></el-form-item>
        <el-form-item label="设计灵感" prop="designInspiration">
          <el-input
            v-model="TXTForm.designInspiration"
            style="width: 600px"
            placeholder="请输入设计灵感"
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
          <div style="font-size: 14px; color: #606266; line-height: 40px">
            基础功能：
          </div>
          <el-checkbox-group v-model="TXTForm.functionOptions1">
            <el-checkbox label="时间" name="time"></el-checkbox>
            <el-checkbox label="时辰" name="Hours"></el-checkbox>
            <el-checkbox label="上/下午" name="ampm"></el-checkbox>
            <el-checkbox label="日期" name="date"></el-checkbox>
            <el-checkbox label="星期" name="week"></el-checkbox>
            <el-checkbox label="农历" name="Chinese_Calendar"></el-checkbox>
            <el-checkbox label="电量" name="power"></el-checkbox>
            <el-checkbox label="电量进度条" name="power"></el-checkbox>
            <el-checkbox label="紫外线指数" name="uvData"></el-checkbox>
            <el-checkbox label="日出/日落" name="Sunrise/Sunset"></el-checkbox>
            <el-checkbox label="风向" name="windDirection"></el-checkbox>
            <el-checkbox label="风向角" name="windDirectionAngle"></el-checkbox>
            <el-checkbox label="风力级别" name="windForceLevel"></el-checkbox>
            <el-checkbox
              label="天干地支"
              name="heavenlyStemsAndEarthlyBranches"
            ></el-checkbox>
            <el-checkbox label="24H" name="24H"></el-checkbox>
            <el-checkbox label="勿扰模式" name="DNDmode"></el-checkbox>
            <el-checkbox label="蓝牙状态" name="BluetoothStatus"></el-checkbox>
            <el-checkbox label="WIFI状态" name="WIFIStatus"></el-checkbox>
            <el-checkbox label="充电状态" name="ChargingState"></el-checkbox>
            <el-checkbox label="屏幕锁定" name="ScreenLock"></el-checkbox>
          </el-checkbox-group>
          <div style="font-size: 14px; color: #606266; line-height: 40px">
            跳转功能：
          </div>
          <el-checkbox-group v-model="TXTForm.functionOptions2">
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
            <el-checkbox
              label="心率进度条"
              name="Hart_rate_range"
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
            <el-checkbox
              label="中高强度锻炼时长"
              name="exerciseTime"
            ></el-checkbox>
            <el-checkbox
              label="中高强度目标"
              name="exerciseObjective"
            ></el-checkbox>
            <el-checkbox
              label="中高强度锻炼完成度"
              name="exerciseProgress"
            ></el-checkbox>
            <el-checkbox label="元气值" name="vitavlityValue"></el-checkbox>
            <el-checkbox
              label="近7日累计元气值"
              name="vitalityValue7"
            ></el-checkbox>
            <el-checkbox label="外圈文字跳转" name="WordJump"></el-checkbox>
          </el-checkbox-group>
          <div style="font-size: 14px; color: #606266; line-height: 40px">
            图标跳转功能：
          </div>
          <el-checkbox-group v-model="TXTForm.functionOptions3">
            <el-checkbox label="微信支付" name="Wechat_Pay"></el-checkbox>
            <el-checkbox label="支付宝" name="Alipay"></el-checkbox>
            <el-checkbox label="压力" name="Pressure"></el-checkbox>
            <el-checkbox
              label="呼吸训练"
              name="Breathing_training"
            ></el-checkbox>
            <el-checkbox label="心率" name="Heart_rate"></el-checkbox>
            <el-checkbox label="睡眠" name="Sleep"></el-checkbox>
            <el-checkbox label="血压" name="Blood_pressure"></el-checkbox>
            <el-checkbox label="运动" name="Sports"></el-checkbox>
            <el-checkbox label="音乐" name="Music"></el-checkbox>
            <el-checkbox label="设置" name="Settings"></el-checkbox>
            <el-checkbox label="指南针" name="Compass"></el-checkbox>
            <el-checkbox label="日程" name="Schedule"></el-checkbox>
            <el-checkbox label="运动记录" name="Sports_record"></el-checkbox>
            <el-checkbox label="秒表" name="Stopwatch"></el-checkbox>
            <el-checkbox label="天气" name="Weather"></el-checkbox>
            <el-checkbox label="电话" name="Telephone"></el-checkbox>
            <el-checkbox label="倒计时" name="Countdown"></el-checkbox>
            <el-checkbox label="计时器" name="Countdowns"></el-checkbox>
            <el-checkbox label="闹钟" name="Alarm_clock"></el-checkbox>
            <el-checkbox label="录音机" name="Tape_recorder"></el-checkbox>
            <el-checkbox label="气压计" name="Barometer"></el-checkbox>
            <el-checkbox
              label="小爱同学"
              name="Classmate_Xiao_Ai"
            ></el-checkbox>
            <el-checkbox
              label="常用联系人"
              name="Common_contacts"
            ></el-checkbox>
            <el-checkbox label="温度" name="Temperature"></el-checkbox>
            <el-checkbox label="日历" name="calendar"></el-checkbox>
            <el-checkbox label="手电筒" name="Flashlight"></el-checkbox>
            <el-checkbox
              label="远程拍照"
              name="Remote_photography"
            ></el-checkbox>
            <el-checkbox label="女性健康" name="Womens_health"></el-checkbox>
            <el-checkbox
              label="找手机"
              name="Look_for_the_mobile_phone"
            ></el-checkbox>
            <el-checkbox label="卡包" name="Card_bag"></el-checkbox>
            <el-checkbox label="跑步课程" name="Running_course"></el-checkbox>
            <el-checkbox label="妙想中心" name="Fantasy_Center"></el-checkbox>
            <el-checkbox label="心电" name="Electrocardiogram"></el-checkbox>
            <el-checkbox label="元气值" name="Yuanqi_Value"></el-checkbox>
          </el-checkbox-group>
          <div style="font-size: 14px; color: #606266; line-height: 40px">
            换图功能：
          </div>
          <el-checkbox-group
            v-model="TXTForm.functionOptions4"
            @change="setChange(TXTForm)"
          >
            <el-checkbox label="长按编辑" name="user_change"></el-checkbox>
            <el-checkbox label="时间段" name="time_change"></el-checkbox>
            <el-checkbox label="压力" name="pressure_change"></el-checkbox>
            <el-checkbox label="时辰" name="hour_change"></el-checkbox>
            <el-checkbox label="星期" name="week"></el-checkbox>
            <el-checkbox label="上下午" name="ampm"></el-checkbox>
            <el-checkbox label="天气" name="weather_change"></el-checkbox>
            <el-checkbox label="睡眠" name="sleep_change"></el-checkbox>
            <el-checkbox label="自定义图标" name="div_change"></el-checkbox>
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
                v-if="TXTForm.changeRulesTime.length < 9"
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
          <!-- 睡眠区间 -->
          <div v-if="TXTForm.changeControl5">
            <div>睡眠区间选择：</div>
            <div
              v-for="(x, i) in TXTForm.changeRulesSleep"
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
                @click="addSleepChange(TXTForm)"
                v-if="TXTForm.changeRulesSleep.length < 10"
              ></el-button>
              <el-button
                type="info"
                class="el-icon-minus"
                circle
                @click="delSleepChange(TXTForm)"
                v-if="TXTForm.changeRulesSleep.length > 1"
              ></el-button>
            </div>
          </div>
        </el-form-item>
      </div>
      <!-- 差异性模块 -->
      <div v-if="difArr.length > 0" style="position: relative">
        <div v-for="(item, index) in difArr" :key="index">
          <div
            style="background-color: #000000; width: 100%; height: 1px"
          ></div>
          <h1>{{ item.size }}</h1>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            style="
              cursor: pointer;
              position: relative;
              left: 1200px;
              top: -65px;
            "
            @click="del(item)"
          ></el-button>
          <el-form-item label="表盘名称" prop="dialName">
            <el-input
              v-model="item.dialName"
              style="width: 300px"
              placeholder="请输入表盘名称"
            ></el-input
          ></el-form-item>
          <el-form-item label="设计亮点" prop="designHighlights">
            <el-input
              v-model="item.designHighlights"
              style="width: 600px"
              placeholder="请输入设计亮点"
            ></el-input
          ></el-form-item>
          <el-form-item label="设计灵感" prop="designInspiration">
            <el-input
              v-model="item.designInspiration"
              style="width: 600px"
              placeholder="请输入设计灵感"
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
            <div style="font-size: 14px; color: #606266; line-height: 40px">
              基础功能：
            </div>
            <el-checkbox-group v-model="item.functionOptions1">
              <el-checkbox label="时间" name="time"></el-checkbox>
              <el-checkbox label="时辰" name="Hours"></el-checkbox>
              <el-checkbox label="上/下午" name="ampm"></el-checkbox>
              <el-checkbox label="日期" name="date"></el-checkbox>
              <el-checkbox label="星期" name="week"></el-checkbox>
              <el-checkbox label="农历" name="Chinese_Calendar"></el-checkbox>
              <el-checkbox label="电量" name="power"></el-checkbox>
              <el-checkbox label="电量进度条" name="power"></el-checkbox>
              <el-checkbox label="紫外线指数" name="uvData"></el-checkbox>
              <el-checkbox
                label="日出/日落"
                name="Sunrise/Sunset"
              ></el-checkbox>
              <el-checkbox label="风向" name="windDirection"></el-checkbox>
              <el-checkbox
                label="风向角"
                name="windDirectionAngle"
              ></el-checkbox>
              <el-checkbox label="风力级别" name="windForceLevel"></el-checkbox>
              <el-checkbox
                label="天干地支"
                name="heavenlyStemsAndEarthlyBranches"
              ></el-checkbox>
              <el-checkbox label="24H" name="24H"></el-checkbox>
              <el-checkbox label="勿扰模式" name="DNDmode"></el-checkbox>
              <el-checkbox
                label="蓝牙状态"
                name="BluetoothStatus"
              ></el-checkbox>
              <el-checkbox label="WIFI状态" name="WIFIStatus"></el-checkbox>
              <el-checkbox label="充电状态" name="ChargingState"></el-checkbox>
              <el-checkbox label="屏幕锁定" name="ScreenLock"></el-checkbox>
            </el-checkbox-group>
            <div style="font-size: 14px; color: #606266; line-height: 40px">
              跳转功能：
            </div>
            <el-checkbox-group v-model="item.functionOptions2">
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
              <el-checkbox
                label="心率进度条"
                name="Hart_rate_range"
              ></el-checkbox>
              <el-checkbox label="卡路里" name="Calorie"></el-checkbox>
              <el-checkbox
                label="卡路里目标"
                name="Calorie_target"
              ></el-checkbox>
              <el-checkbox
                label="卡路里完成度"
                name="Calorie_completion_degree"
              ></el-checkbox>
              <el-checkbox label="距离" name="Distance"></el-checkbox>
              <el-checkbox
                label="站立次数"
                name="Number_of_stands"
              ></el-checkbox>
              <el-checkbox
                label="站立目标"
                name="Standing_target"
              ></el-checkbox>
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
              <el-checkbox
                label="中高强度锻炼时长"
                name="exerciseTime"
              ></el-checkbox>
              <el-checkbox
                label="中高强度目标"
                name="exerciseObjective"
              ></el-checkbox>
              <el-checkbox
                label="中高强度锻炼完成度"
                name="exerciseProgress"
              ></el-checkbox>
              <el-checkbox label="元气值" name="vitavlityValue"></el-checkbox>
              <el-checkbox
                label="近7日累计元气值"
                name="vitalityValue7"
              ></el-checkbox>
              <el-checkbox label="外圈文字跳转" name="WordJump"></el-checkbox>
            </el-checkbox-group>
            <div style="font-size: 14px; color: #606266; line-height: 40px">
              图标跳转功能：
            </div>
            <el-checkbox-group v-model="item.functionOptions3">
              <el-checkbox label="微信支付" name="Wechat_Pay"></el-checkbox>
              <el-checkbox label="支付宝" name="Alipay"></el-checkbox>
              <el-checkbox label="压力" name="Pressure"></el-checkbox>
              <el-checkbox
                label="呼吸训练"
                name="Breathing_training"
              ></el-checkbox>
              <el-checkbox label="心率" name="Heart_rate"></el-checkbox>
              <el-checkbox label="睡眠" name="Sleep"></el-checkbox>
              <el-checkbox label="血压" name="Blood_pressure"></el-checkbox>
              <el-checkbox label="运动" name="Sports"></el-checkbox>
              <el-checkbox label="音乐" name="Music"></el-checkbox>
              <el-checkbox label="设置" name="Settings"></el-checkbox>
              <el-checkbox label="指南针" name="Compass"></el-checkbox>
              <el-checkbox label="日程" name="Schedule"></el-checkbox>
              <el-checkbox label="运动记录" name="Sports_record"></el-checkbox>
              <el-checkbox label="秒表" name="Stopwatch"></el-checkbox>
              <el-checkbox label="天气" name="Weather"></el-checkbox>
              <el-checkbox label="电话" name="Telephone"></el-checkbox>
              <el-checkbox label="倒计时" name="Countdown"></el-checkbox>
              <el-checkbox label="计时器" name="Countdowns"></el-checkbox>
              <el-checkbox label="闹钟" name="Alarm_clock"></el-checkbox>
              <el-checkbox label="录音机" name="Tape_recorder"></el-checkbox>
              <el-checkbox label="气压计" name="Barometer"></el-checkbox>
              <el-checkbox
                label="小爱同学"
                name="Classmate_Xiao_Ai"
              ></el-checkbox>
              <el-checkbox
                label="常用联系人"
                name="Common_contacts"
              ></el-checkbox>
              <el-checkbox label="温度" name="Temperature"></el-checkbox>
              <el-checkbox label="日历" name="calendar"></el-checkbox>
              <el-checkbox label="手电筒" name="Flashlight"></el-checkbox>
              <el-checkbox
                label="远程拍照"
                name="Remote_photography"
              ></el-checkbox>
              <el-checkbox label="女性健康" name="Womens_health"></el-checkbox>
              <el-checkbox
                label="找手机"
                name="Look_for_the_mobile_phone"
              ></el-checkbox>
              <el-checkbox label="卡包" name="Card_bag"></el-checkbox>
              <el-checkbox label="跑步课程" name="Running_course"></el-checkbox>
              <el-checkbox label="妙想中心" name="Fantasy_Center"></el-checkbox>
              <el-checkbox label="心电" name="Electrocardiogram"></el-checkbox>
              <el-checkbox label="元气值" name="Yuanqi_Value"></el-checkbox>
            </el-checkbox-group>
            <div style="font-size: 14px; color: #606266; line-height: 40px">
              换图功能：
            </div>
            <el-checkbox-group
              v-model="item.functionOptions4"
              @change="setChange(item)"
            >
              <el-checkbox label="长按编辑" name="user_change"></el-checkbox>
              <el-checkbox label="时间段" name="time_change"></el-checkbox>
              <el-checkbox label="压力" name="pressure_change"></el-checkbox>
              <el-checkbox label="时辰" name="hour_change"></el-checkbox>
              <el-checkbox label="星期" name="week"></el-checkbox>
              <el-checkbox label="上下午" name="ampm"></el-checkbox>
              <el-checkbox label="天气" name="weather_change"></el-checkbox>
              <el-checkbox label="睡眠" name="sleep_change"></el-checkbox>
              <el-checkbox label="自定义图标" name="div_change"></el-checkbox>
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
                  v-model="item.changeRulesUser"
                  :min="1"
                  :max="10"
                ></el-input-number>
              </div>
            </div>
            <!-- 时间区间 -->
            <div v-if="item.changeControl1">
              <div>时间段区间选择：</div>
              <div
                v-for="(x, i) in item.changeRulesTime"
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
                  @click="addTimeChange(item)"
                  v-if="item.changeRulesTime.length < 4"
                ></el-button>
                <el-button
                  type="info"
                  class="el-icon-minus"
                  circle
                  @click="delTimeChange(item)"
                  v-if="item.changeRulesTime.length > 1"
                ></el-button>
              </div>
            </div>
            <!-- 压力区间 -->
            <div v-if="item.changeControl2">
              <div>压力区间选择：</div>
              <div
                v-for="(x, i) in item.changeRulesPressure"
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
                  @click="addPressureChange(item)"
                  v-if="item.changeRulesPressure.length < 10"
                ></el-button>
                <el-button
                  type="info"
                  class="el-icon-minus"
                  circle
                  @click="delPressureChange(item)"
                  v-if="item.changeRulesPressure.length > 1"
                ></el-button>
              </div>
            </div>
            <!-- 时辰区间 -->
            <div v-if="item.changeControl3">
              <div>时辰区间选择：</div>
              <div
                v-for="(x, i) in item.changeRulesHour"
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
                  @click="addHourChange(item)"
                  v-if="item.changeRulesHour.length < 12"
                ></el-button>
                <el-button
                  type="info"
                  class="el-icon-minus"
                  circle
                  @click="delHourChange(item)"
                  v-if="item.changeRulesHour.length > 1"
                ></el-button>
              </div>
            </div>
            <!-- 星期区间 -->
            <div v-if="item.changeControl4">
              <div>星期区间选择：</div>
              <div
                v-for="(x, i) in item.changeRulesWeek"
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
                  @click="addWeekChange(item)"
                  v-if="item.changeRulesWeek.length < 7"
                ></el-button>
                <el-button
                  type="info"
                  class="el-icon-minus"
                  circle
                  @click="delWeekChange(item)"
                  v-if="item.changeRulesWeek.length > 1"
                ></el-button>
              </div>
            </div>
            <!-- 睡眠区间 -->
            <div v-if="item.changeControl5">
              <div>睡眠区间选择：</div>
              <div
                v-for="(x, i) in item.changeRulesSleep"
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
                  @click="addSleepChange(item)"
                  v-if="item.changeRulesSleep.length < 10"
                ></el-button>
                <el-button
                  type="info"
                  class="el-icon-minus"
                  circle
                  @click="delSleepChange(item)"
                  v-if="item.changeRulesSleep.length > 1"
                ></el-button>
              </div>
            </div>
          </el-form-item>
        </div>
      </div>
      <!-- 右侧选项 -->
      <div class="sizeChangeBox">
        <div style="margin-bottom: 10px">请选择制作的型号</div>
        <el-checkbox-group v-model="sizeOptions" style="margin-bottom: 10px">
          <div>圆盘</div>
          <el-checkbox label="小米表盘S3" name="小米表盘S3"></el-checkbox>
          <el-checkbox label="小米表盘S4" name="小米表盘S4"></el-checkbox>
          <el-checkbox
            label="小米表盘S4 Sport"
            name="小米表盘S4 Sport"
          ></el-checkbox>
          <el-checkbox
            label="小米表盘S4 eSIM"
            name="小米表盘S4 eSIM"
          ></el-checkbox>
          <el-checkbox
            label="小米表盘S4 41mm"
            name="小米表盘S4 41mm"
          ></el-checkbox>
          <el-checkbox
            label="小米表盘watch 5"
            name="小米表盘watch 5"
          ></el-checkbox>
          <el-checkbox label="小米表盘P62" name="小米表盘P62"></el-checkbox>
          <div>方盘</div>
          <el-checkbox label="红米手表4" name="红米手表4"></el-checkbox>
          <el-checkbox label="红米手表5" name="红米手表5"></el-checkbox>
          <el-checkbox label="小米手环8pro" name="小米手环8pro"></el-checkbox>
          <el-checkbox label="小米手环9pro" name="小米手环9pro"></el-checkbox>
          <el-checkbox label="红米手表P65" name="红米手表P65"></el-checkbox>
          <div>跑道环</div>
          <el-checkbox label="小米手环8" name="小米手环8"></el-checkbox>
          <el-checkbox label="小米手环9" name="小米手环9"></el-checkbox>
          <el-checkbox label="小米手环10" name="小米手环10"></el-checkbox>
        </el-checkbox-group>
        <el-button style="margin-bottom: 30px" @click="submitSize"
          >确定制作型号</el-button
        >
        <div style="margin-bottom: 10px">请选择存在功能差异的型号</div>
        <el-checkbox-group v-model="difSize" style="margin-bottom: 10px">
          <div>圆盘</div>
          <div
            v-for="item in difSizeOptions"
            :key="item"
            style="display: inline-block; margin-right: 30px"
          >
            <el-checkbox :label="item" :name="item"></el-checkbox>
          </div>
        </el-checkbox-group>
        <el-button @click="setDiff">添加差异型号简介</el-button>
      </div>
      <!-- 导出按钮 -->
      <el-form-item>
        <div style="text-align: center">
          <el-button @click="backPage">返回首页</el-button>
          <el-button
            type="primary"
            @click="importForm"
            :disabled="!importControl"
            >导出</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Xm",
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
      // 差异尺寸
      difSizeOptions: [],
      difSize: [],
      difArr: [],
      // 导出控制按钮
      importControl: false,
      // 表盘信息
      TXTForm: {
        designer: "",
        dialName: "",
        designHighlights: "",
        designInspiration: "",
        functionOptions1: [],
        functionOptions2: [],
        functionOptions3: [],
        functionOptions4: [],
        functionOptions5: [],
        changeControl0: false,
        changeControl1: false,
        changeControl2: false,
        changeControl3: false,
        changeControl4: false,
        changeControl5: false,
        changeRulesUser: 1,
        changeRulesTime: [{ min: "凌晨", max: "凌晨" }],
        changeRulesPressure: [{ min: 0, max: 0 }],
        changeRulesSleep: [{ min: 0, max: 0 }],
        changeRulesHour: [{ min: "子时", max: "子时" }],
        changeRulesWeek: [{ min: "周日", max: "周日" }],
        changeRulesAmpm: false,
        changeRulesWeather: false,
      },
      // 总数据整理
      formContent: { designer: null, contentList: [] },
      // 校验内容
      temp: "",
      // txt文案内容
      txtcontent: "",
      // 手环8
      dial8Control: false,
      dial8Arr: [],
    };
  },
  created() {
    this.importControl = false;
    this.dial8Control = false;
  },
  methods: {
    // 切换规则
    setChange(Form) {
      Form.changeControl0 = Form.functionOptions4.includes("长按编辑");
      Form.changeControl1 = Form.functionOptions4.includes("时间段");
      Form.changeControl2 = Form.functionOptions4.includes("压力");
      Form.changeControl3 = Form.functionOptions4.includes("时辰");
      Form.changeControl4 = Form.functionOptions4.includes("星期");
      Form.changeControl5 = Form.functionOptions4.includes("睡眠");
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
      if (Form.changeControl5 == true) {
        console.log();
      } else {
        Form.changeRulesSleep = [{ min: 0, max: 0 }];
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
    // 睡眠区间控制
    addSleepChange(Form) {
      let obj = {
        group: Form.changeRulesSleep.length + 1,
        min: 0,
        max: 0,
      };
      Form.changeRulesSleep.push(obj);
    },
    delSleepChange(Form) {
      Form.changeRulesSleep.splice(Form.changeRulesSleep.length - 1, 1);
    },
    // 时辰区间控制
    addHourChange(Form) {
      let obj = {
        group: Form.changeRulesHour.length + 1,
        min: "子时",
        max: "子时",
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
    // 确认制作型号
    submitSize() {
      this.sizes = this.sizeOptions;
      this.difSizeOptions = this.sizeOptions;
      this.importControl = true;
      this.$forceUpdate();
    },
    // 添加差异型号
    setDiff() {
      this.difArr = [];
      for (let i = 0; i < this.difSize.length; i++) {
        let obj = {
          size: this.difSize[i],
          designer: this.TXTForm.designer,
          dialName: this.TXTForm.dialName,
          designHighlights: this.TXTForm.designHighlights,
          designInspiration: this.TXTForm.designInspiration,
          functionOptions1: this.TXTForm.functionOptions1,
          functionOptions2: this.TXTForm.functionOptions2,
          functionOptions3: this.TXTForm.functionOptions3,
          functionOptions4: this.TXTForm.functionOptions4,
          changeControl0: this.TXTForm.changeControl0,
          changeControl1: this.TXTForm.changeControl1,
          changeControl2: this.TXTForm.changeControl2,
          changeControl3: this.TXTForm.changeControl3,
          changeControl4: this.TXTForm.changeControl4,
          changeControl5: this.TXTForm.changeControl5,
          changeRulesUser: this.TXTForm.changeRulesUser,
          changeRulesTime: this.TXTForm.changeRulesTime,
          changeRulesPressure: this.TXTForm.changeRulesPressure,
          changeRulesSleep: this.TXTForm.changeRulesSleep,
          changeRulesHour: this.TXTForm.changeRulesHour,
          changeRulesWeek: this.TXTForm.changeRulesWeek,
          changeRulesAmpm: this.TXTForm.changeRulesWeek,
          changeRulesWeather: this.TXTForm.changeRulesWeek,
        };
        this.difArr.push(obj);
      }
    },
    // 删除
    del(item) {
      for (let i = 0; i < this.difSize.length; i++) {
        if (item.size == this.difSize[i]) {
          this.difSize.splice(i, 1);
        }
      }
      for (let i = 0; i < this.difArr.length; i++) {
        if (item.size == this.difArr[i].size) {
          this.difArr.splice(i, 1);
        }
      }
      this.$forceUpdate();
    },
    // 导出
    importForm() {
      this.formContent.contentList = [];
      this.formContent.designer = this.TXTForm.designer;
      if (
        this.sizes.includes("小米手环8") &&
        (this.TXTForm.functionOptions2.length > 0 ||
          this.TXTForm.functionOptions3.length > 0)
      ) {
        this.dial8Control = true;
        // for (let i = 0; i < this.sizes.length; i++) {
        //   if (this.sizes[i] == "小米手环8") {
        //     this.sizes.splice(i, 1);
        //     this.dial8Control = true;
        //   }
        // }
      } else {
        this.dial8Control = false;
      }
      var result = this.findDifferentElements(this.sizes, this.difSize);
      let obj = {
        size: result.join("/"),
        dialName: this.TXTForm.dialName,
        designHighlights: this.TXTForm.designHighlights,
        designInspiration: this.TXTForm.designInspiration,
        functionOptions1: this.TXTForm.functionOptions1,
        functionOptions2: this.TXTForm.functionOptions2,
        functionOptions3: this.TXTForm.functionOptions3,
        functionOptions4: this.TXTForm.functionOptions4,
        changeControl0: this.TXTForm.changeControl0,
        changeControl1: this.TXTForm.changeControl1,
        changeControl2: this.TXTForm.changeControl2,
        changeControl3: this.TXTForm.changeControl3,
        changeControl4: this.TXTForm.changeControl4,
        changeControl5: this.TXTForm.changeControl5,
        changeRulesUser: this.TXTForm.changeRulesUser,
        changeRulesTime: this.TXTForm.changeRulesTime,
        changeRulesPressure: this.TXTForm.changeRulesPressure,
        changeRulesSleep: this.TXTForm.changeRulesSleep,
        changeRulesHour: this.TXTForm.changeRulesHour,
        changeRulesWeek: this.TXTForm.changeRulesWeek,
        changeRulesAmpm: this.TXTForm.changeRulesWeek,
        changeRulesWeather: this.TXTForm.changeRulesWeek,
      };
      this.formContent.contentList.push(obj);
      for (let i = 0; i < this.difArr.length; i++) {
        let obj = {
          size: this.difArr[i].size,
          dialName: this.difArr[i].dialName,
          designHighlights: this.difArr[i].designHighlights,
          designInspiration: this.difArr[i].designInspiration,
          functionOptions1: this.difArr[i].functionOptions1,
          functionOptions2: this.difArr[i].functionOptions2,
          functionOptions3: this.difArr[i].functionOptions3,
          functionOptions4: this.difArr[i].functionOptions4,
          changeControl0: this.difArr[i].changeControl0,
          changeControl1: this.difArr[i].changeControl1,
          changeControl2: this.difArr[i].changeControl2,
          changeControl3: this.difArr[i].changeControl3,
          changeControl4: this.difArr[i].changeControl4,
          changeControl5: this.difArr[i].changeControl5,
          changeRulesUser: this.difArr[i].changeRulesUser,
          changeRulesTime: this.difArr[i].changeRulesTime,
          changeRulesPressure: this.difArr[i].changeRulesPressure,
          changeRulesSleep: this.difArr[i].changeRulesSleep,
          changeRulesHour: this.difArr[i].changeRulesHour,
          changeRulesWeek: this.difArr[i].changeRulesWeek,
          changeRulesAmpm: this.difArr[i].changeRulesWeek,
          changeRulesWeather: this.difArr[i].changeRulesWeek,
        };
        this.formContent.contentList.push(obj);
      }
      if (
        this.dial8Control &&
        (this.TXTForm.functionOptions2.length > 0 ||
          this.TXTForm.functionOptions3.length > 0)
      ) {
        let obj8 = {
          size: "小米手环8",
          dialName: this.TXTForm.dialName,
          designHighlights: this.TXTForm.designHighlights,
          designInspiration: this.TXTForm.designInspiration,
          functionOptions1: this.TXTForm.functionOptions1,
          functionOptions2: this.TXTForm.functionOptions2,
          functionOptions3: this.TXTForm.functionOptions3,
          functionOptions4: this.TXTForm.functionOptions4,
          changeControl0: this.TXTForm.changeControl0,
          changeControl1: this.TXTForm.changeControl1,
          changeControl2: this.TXTForm.changeControl2,
          changeControl3: this.TXTForm.changeControl3,
          changeControl4: this.TXTForm.changeControl4,
          changeControl5: this.TXTForm.changeControl5,
          changeRulesUser: this.TXTForm.changeRulesUser,
          changeRulesTime: this.TXTForm.changeRulesTime,
          changeRulesPressure: this.TXTForm.changeRulesPressure,
          changeRulesSleep: this.TXTForm.changeRulesSleep,
          changeRulesHour: this.TXTForm.changeRulesHour,
          changeRulesWeek: this.TXTForm.changeRulesWeek,
          changeRulesAmpm: this.TXTForm.changeRulesWeek,
          changeRulesWeather: this.TXTForm.changeRulesWeek,
        };
        this.formContent.contentList.push(obj8);
      }
      // 整理txt字符串
      this.getTxtContent(this.formContent);
    },
    // 获取公共模块的型号名称
    findDifferentElements(arr1, arr2) {
      var differentElements = [];

      for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
          differentElements.push(arr1[i]);
        }
      }

      for (var j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) === -1) {
          differentElements.push(arr2[j]);
        }
      }

      return differentElements;
    },
    // 获取txt内容
    getTxtContent(content) {
      // 设计师名称
      this.txtcontent =
        "开发者：" +
        content.designer +
        "\n" +
        "设计师：" +
        content.designer +
        "\n";
      // 循环创建多型号内容
      for (let i = 0; i < content.contentList.length; i++) {
        this.temp = "";
        // 型号、设计亮点、设计灵感的添加
        this.temp =
          this.temp +
          "\n" +
          content.contentList[i].size +
          "\n" +
          "中文名:" +
          content.contentList[i].dialName +
          "\n" +
          "【表盘设计说明】" +
          "\n";
        if (content.contentList[i].designHighlights.length > 0) {
          this.temp =
            this.temp +
            "设计亮点：" +
            content.contentList[i].designHighlights.replace(/[;；]/g, "") +
            "；\n";
        }
        if (content.contentList[i].designInspiration.length > 0) {
          this.temp =
            this.temp +
            "设计灵感：" +
            content.contentList[i].designInspiration.replace(/[;；]/g, "") +
            "；\n";
        }
        // 切换规则的添加
        if (content.contentList[i].functionOptions4.length > 0) {
          this.temp = this.temp + "切换规则：";
          if (content.contentList[i].functionOptions4.includes("长按编辑")) {
            this.temp =
              this.temp +
              "长按表盘进行编辑切换，共" +
              content.contentList[i].changeRulesUser +
              "张背景图" +
              "；\n";
          }
          if (content.contentList[i].functionOptions4.includes("时间段")) {
            this.temp = this.temp + "根据时间段进行换图功能，";
            for (
              let o = 0;
              o < content.contentList[i].changeRulesTime.length;
              o++
            ) {
              this.temp =
                this.temp +
                content.contentList[i].changeRulesTime[o].min +
                "到" +
                content.contentList[i].changeRulesTime[o].max +
                "为一张图，";
            }
            this.temp =
              this.temp +
              "共" +
              content.contentList[i].changeRulesTime.length +
              "张背景图" +
              "；\n";
          }
          if (content.contentList[i].functionOptions4.includes("压力")) {
            this.temp = this.temp + "当压力值为空状态，";
            for (
              let o = 0;
              o < content.contentList[i].changeRulesPressure.length;
              o++
            ) {
              this.temp =
                this.temp +
                content.contentList[i].changeRulesPressure[o].min +
                "%-" +
                content.contentList[i].changeRulesPressure[o].max +
                "%，";
            }
            this.temp = this.temp.slice(0, -1);
            this.temp =
              this.temp +
              "时进行换图，共" +
              (content.contentList[i].changeRulesPressure.length + 1) +
              "张图" +
              "；\n";
          }
          if (content.contentList[i].functionOptions4.includes("睡眠")) {
            this.temp = this.temp + "当睡眠值为空状态，";
            for (
              let o = 0;
              o < content.contentList[i].changeRulesSleep.length;
              o++
            ) {
              this.temp =
                this.temp +
                content.contentList[i].changeRulesSleep[o].min +
                "%-" +
                content.contentList[i].changeRulesSleep[o].max +
                "%，";
            }
            this.temp = this.temp.slice(0, -1);
            this.temp =
              this.temp +
              "时进行换图，共" +
              (content.contentList[i].changeRulesSleep.length + 1) +
              "张图" +
              "；\n";
          }
          if (content.contentList[i].functionOptions4.includes("时辰")) {
            if (content.contentList[i].changeRulesHour.length == 12) {
              this.temp =
                this.temp +
                "根据时辰进行换图功能，每个时辰切换不同的图" +
                "；\n";
            } else {
              this.temp = this.temp + "根据时辰进行换图功能，";
              for (
                let o = 0;
                o < content.contentList[i].changeRulesHour.length;
                o++
              ) {
                this.temp =
                  this.temp +
                  content.contentList[i].changeRulesHour[o].min +
                  "到" +
                  content.contentList[i].changeRulesHour[o].max +
                  "为一张图，";
              }
              this.temp = this.temp.slice(0, -1);
              console.log(content.contentList[i].changeRulesHour);
              this.temp =
                this.temp +
                "共" +
                content.contentList[i].changeRulesHour.length +
                "张图" +
                "；\n";
            }
          }
          if (content.contentList[i].functionOptions4.includes("星期")) {
            if (content.contentList[i].changeRulesWeek.length == 7) {
              this.temp =
                this.temp + "根据星期进行换图功能，每个天切换不同的图" + "；\n";
            } else {
              this.temp = this.temp + "根据星期进行换图功能，";
              for (
                let o = 0;
                o < content.contentList[i].changeRulesWeek.length;
                o++
              ) {
                this.temp =
                  this.temp +
                  content.contentList[i].changeRulesWeek[o].min +
                  "到" +
                  content.contentList[i].changeRulesWeek[o].max +
                  "为一张图，";
              }
              this.temp = this.temp.slice(0, -1);
              this.temp =
                this.temp +
                "共" +
                content.contentList[i].changeRulesWeek.length +
                "张图" +
                "；\n";
            }
          }
          if (content.contentList[i].functionOptions4.includes("上下午")) {
            this.temp =
              this.temp + "根据上下午进行背景的切换，共2张背景图" + "；\n";
          }
          if (content.contentList[i].functionOptions4.includes("天气")) {
            this.temp =
              this.temp + "根据不同天气感知变换场景图片，共11张图片" + "；\n";
          }
          if (content.contentList[i].functionOptions4.includes("自定义图标跳转")) {
            this.temp =
              this.temp + "长按表盘可切换自定义跳转图标" + "；\n";
          }
        }
        // 功能介绍模块
        this.temp = this.temp + "【功能介绍】\n" + "数据展示：";

        // 功能介绍---数据展示
        for (
          let o = 0;
          o < content.contentList[i].functionOptions1.length;
          o++
        ) {
          this.temp =
            this.temp + content.contentList[i].functionOptions1[o] + "、";
        }
        for (
          let o = 0;
          o < content.contentList[i].functionOptions2.length;
          o++
        ) {
          if (content.contentList[i].functionOptions2[o] != "外圈文字跳转") {
            this.temp =
              this.temp + content.contentList[i].functionOptions2[o] + "、";
          }
        }
        this.temp = this.temp.slice(0, -1) + "；\n";
        // 功能介绍---跳转功能
        if (content.contentList[i].size != "小米手环8") {
          this.temp = this.temp + "跳转功能：";
          for (
            let o = 0;
            o < content.contentList[i].functionOptions2.length;
            o++
          ) {
            if (content.contentList[i].functionOptions2[o] == "外圈文字跳转") {
              this.temp = this.temp + "外圈文字可跳转、";
            } else {
              this.temp =
                this.temp + content.contentList[i].functionOptions2[o] + "、";
            }
          }
          for (
            let o = 0;
            o < content.contentList[i].functionOptions3.length;
            o++
          ) {
            this.temp =
              this.temp + content.contentList[i].functionOptions3[o] + "图标、";
          }
          this.temp = this.temp.slice(0, -1) + "；\n";
          // 功能介绍---其他
          if (
            content.contentList[i].functionOptions2.includes("温度") &&
            content.contentList[i].functionOptions2.includes("心率进度条")
          ) {
            this.temp =
              this.temp +
              "其他：该表盘温度仅支持摄氏度不支持华氏度；心率进度满格为220，且不受最大最小心率影响；\n";
          }
          if (
            content.contentList[i].functionOptions2.includes("温度") &&
            !content.contentList[i].functionOptions2.includes("心率进度条")
          ) {
            this.temp =
              this.temp + "其他：该表盘温度仅支持摄氏度不支持华氏度；\n";
          }
          if (
            !content.contentList[i].functionOptions2.includes("温度") &&
            content.contentList[i].functionOptions2.includes("心率进度条")
          ) {
            this.temp =
              this.temp + "其他：心率进度满格为220，且不受最大最小心率影响；\n";
          }
        }
        // 设计师信息
        this.temp =
          this.temp +
          "【设计师信息】该表盘由外部设计师团队" +
          content.designer +
          "设计并制作";
        // 换行
        this.temp = this.temp + "\n\n";
        // if (
        //   this.temp.length -
        //     content.contentList[i].size.length - 
        //     content.contentList[i].dialName.length -
        //     9 >
        //   250
        // ) {
        //   this.$message(content.contentList[i].size + "字数超出250");
        // }
        this.txtcontent = this.txtcontent + this.temp;
      }
      this.exportText(this.txtcontent);
      this.importControl = false;
    },
    // 下载txt
    exportText(txt) {
      const textToExport = txt; // 你的文本内容
      const blob = new Blob([textToExport], {
        type: "text/plain;charset=utf-8;",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download =
        "小米_" +
        this.TXTForm.dialName +
        "【" +
        this.formContent.designer +
        "】简介.txt"; // 设置下载文件的名称
      link.click(); // 模拟点击事件以触发下载
      URL.revokeObjectURL(link.href); // 清理内存
    },
    // 返回
    backPage() {
      this.$router.push("/Home");
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