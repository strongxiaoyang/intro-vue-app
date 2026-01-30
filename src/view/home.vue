<template>
  <div id="app">
    <el-row :gutter="20" style="margin-top: 400px">
      <el-col :span="5" style="margin-right: 100px; margin-left: 300px"
        ><div class="grid-content bg-purple">
            <router-link to="/Huawei">华为</router-link>
        </div></el-col
      >
      <el-col :span="5" style="margin-right: 100px"
        ><div class="grid-content bg-purple">
          <router-link to="/Xiaomi">小米</router-link>
        </div>
      </el-col>
      <el-col :span="5"
        ><div class="grid-content bg-purple">
          <router-link to="/Oppo">OPPO</router-link>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},
  methods: {},
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  vertical-align: middle;
  text-align: center;
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  a {
    color: #000000;
    font-size: 18px;
    text-decoration: none;
  }
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
