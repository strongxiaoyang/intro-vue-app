<template>
  <div id="app">
    <el-tabs type="border-card">
      <el-tab-pane label="国内">
        <el-tabs type="border-card">
          <el-tab-pane label="国内271/251"
            ><HW454 @value271251="handleValueUpdate"
          /></el-tab-pane>
          <el-tab-pane label="国内211">国内211</el-tab-pane>
          <el-tab-pane label="国内111">国内111</el-tab-pane>
          <el-tab-pane label="国内方盘">国内方盘</el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="国外">
        <el-tabs type="border-card">
          <el-tab-pane label="国外271/251">国外271/251</el-tab-pane>
          <el-tab-pane label="国外211">国外211</el-tab-pane>
          <el-tab-pane label="国外111">国外111</el-tab-pane>
          <el-tab-pane label="国外方盘">国外方盘</el-tab-pane></el-tabs
        >
      </el-tab-pane>
    </el-tabs>

    <div style="text-align: center; margin-top: 30px">
      <el-button @click="backPage">返回首页</el-button>
      <el-button type="primary" @click="importForm">导出</el-button>
    </div>
  </div>
</template>

<script>
import HW454 from "../view/hw454.vue";
export default {
  components: {
    HW454,
  },
  name: "Op",
  data() {
    return {
      // 简介集合
      queryParams: {
        value271251: null,
        value271251EN: null,
        value211: null,
        value211EN: null,
        value111: null,
        value111EN: null,
        valueFang: null,
        valueFangEN: null,
      },
    };
  },
  methods: {
    // 获取国内454数据
    handleValueUpdate(newValue) {
      this.queryParams.value271251 = newValue;
      console.log(this.queryParams.value271251);
    },
    // 返回
    backPage() {
      this.$router.push("/Home");
    },
    // 导出
    importForm() {},
  },
};
</script>

<style>
</style>
